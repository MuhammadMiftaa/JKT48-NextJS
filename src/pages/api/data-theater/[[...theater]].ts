import type { NextApiRequest, NextApiResponse } from "next";
import {
  addData,
  deleteData,
  retrieveData,
  retrieveDataById,
  updateData,
} from "../../../../utils/db/services";
import { theaterType } from "@/types/theaterType";
import { formatDateToReadable } from "@/helper/function";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req.query);
  if (req.query.theater?.[0]) {
    if (req.query.theater[0] === "add" && req.method === "POST") {
      const theater: theaterType = req.body;

      theater.deleted = {
        isDeleted: false,
        deletedAt: "",
        description: "",
      };

      const ID: string =
        theater.setlist
          .split(" ")
          .map((val) => val.slice(0, 1))
          .join("") +
        theater.tanggal
          .split("-")
          .map((val, idx) => (idx === 0 ? val.slice(2) : val))
          .toReversed()
          .join("");

      theater.tanggal = formatDateToReadable(theater.tanggal);

      await addData(
        ID,
        "theater",
        theater,
        ({
          status,
          message,
          data,
        }: {
          status: boolean;
          message: string;
          data?: theaterType;
        }) => {
          status
            ? res.status(200).json({ status, message, data })
            : res.status(400).json({ status, message });
        }
      );
    }

    if (req.query.theater[0] === "update" && req.method === "PUT") {
      const theater: theaterType = req.body;

      await updateData(
        "theater",
        theater,
        ({
          status,
          message,
          data,
        }: {
          status: boolean;
          message: string;
          data?: theaterType;
        }) => {
          status
            ? res.status(200).json({ status, message, data })
            : res.status(400).json({ status, message });
        }
      );
    }

    if (req.query.theater[0] === "delete" && req.method === "DELETE") {
      const { id, description }: { id: string; description: string } = req.body;

      await deleteData(
        id,
        "theater",
        description,
        ({
          status,
          message,
          data,
        }: {
          status: boolean;
          message: string;
          data?: theaterType;
        }) => {
          status
            ? res.status(200).json({ status, message, data })
            : res.status(400).json({ status, message });
        }
      );
    }
    const data = await retrieveDataById("theater", req.query.theater[0]);
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  } else {
    const data = await retrieveData("theater");
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  }
}
