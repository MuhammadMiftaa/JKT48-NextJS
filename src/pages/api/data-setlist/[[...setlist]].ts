import type { NextApiRequest, NextApiResponse } from "next";
import { addData, deleteData, retrieveData, retrieveDataById, updateData } from "../../../../utils/db/services";
import { setlistType } from "@/components/types/setlistType";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.setlist?.[0]) {
    if (req.query.setlist[0] === "add" && req.method === "POST") {
          const setlist: setlistType = req.body;
    
          const ID: string = setlist.nama_setlist.split(" ").join("-")
    
          await addData(ID, "setlist", setlist, ({status, message, data}: {status: boolean, message: string, data?: setlistType}) => {
            if (status) res.status(200).json({status, message, data})
            else res.status(400).json({status, message})
          })
        }
    
        if (req.query.setlist[0] === "update" && req.method === "PUT") {
          const setlist: setlistType = req.body;
    
          await updateData("setlist", setlist, ({status, message, data}: {status: boolean, message: string, data?: setlistType}) => {
            if (status) res.status(200).json({status, message, data})
            else res.status(400).json({status, message})
          })
        }
    
        if (req.query.setlist[0] === "delete" && req.method === "DELETE") {
          const {id, description}: {id: string, description: string} = req.body
    
          await deleteData(id, "setlist", description, ({status, message, data}: {status: boolean, message: string, data?: setlistType}) => {
            if (status) res.status(200).json({status, message, data})
            else res.status(400).json({status, message})
          })
        }

    const data = await retrieveDataById("setlist", req.query.setlist[0]);
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  } else {
    const data = await retrieveData("setlist");
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data,
    });
  }
}
