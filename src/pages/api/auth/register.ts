import { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "../../../../utils/db/services";

type data = {
  status: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  if (req.method === "POST") {
    await registerUser(
      req.body,
      ({ status, message }: { status: boolean; message: string }) => {
        if (status){
            res.status(200).json({ status, message });
        } else {
            res.status(400).json({ status, message });
        }
      }
    );
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
