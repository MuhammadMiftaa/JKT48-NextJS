import type { NextApiRequest, NextApiResponse } from "next";
import { addData, retrieveData, retrieveDataById, updateData } from "../../../../utils/db/services";
import { memberType } from "@/components/types/memberType";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.member?.[0]) {
    if (req.query.member[0] === "add" && req.method === "POST") {
      const member: memberType = req.body;

      if (member.universitas === "" || member.universitas === undefined) member.universitas = "-";
      if (member.jurusan === "" || member.jurusan === undefined) member.jurusan = "-";
      if (member.username_idn === "" || member.username_idn === undefined) member.username_idn = "-";
      if (member.username_ig === "" || member.username_ig === undefined) member.username_ig = "-";
      if (member.username_sr === "" || member.username_sr === undefined) member.username_sr = "-";
      if (member.username_tiktok === "" || member.username_tiktok === undefined) member.username_tiktok = "-";
      if (member.username_x === "" || member.username_x === undefined) member.username_x = "-";

      const ID: string = member.nama.split(" ").join("-")

      await addData(ID, "member", member, ({status, message, data}: {status: boolean, message: string, data?: memberType}) => {
        if (status) res.status(200).json({status, message, data})
        else res.status(400).json({status, message})
      })
    }

    if (req.query.member[0] === "update" && req.method === "PUT") {
      const member: memberType = req.body;

      await updateData("member", member, ({status, message, data}: {status: boolean, message: string, data?: memberType}) => {
        if (status) res.status(200).json({status, message, data})
        else res.status(400).json({status, message})
      })
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
