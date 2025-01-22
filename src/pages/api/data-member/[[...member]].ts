import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData, retrieveDataById } from "../../../../utils/db/services";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.member?.[0]) {

    if (req.query.member[0] === "add" && req.method === "POST") {
      res.status(200).json({
        status: true,
        statusCode: 200,
        message: "Data berhasil ditambahkan",
      });
    }

    const data = await retrieveDataById("member", req.query.member[0]);
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  } else {
    const data = await retrieveData("member");
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  }
}
