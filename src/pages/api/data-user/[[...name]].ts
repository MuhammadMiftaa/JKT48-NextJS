import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData, retrieveDataById } from "../../../../utils/db/services";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  if (req.query.name?.[1]) {
    const data = await retrieveDataById("users", req.query.name[1]);
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  } else {
    const data = await retrieveData("users");
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  }
}
