// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData } from "../../../utils/db/services";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("member");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "Data berhasil diambil",
    data,
  });
}
