import { Timestamp } from "firebase/firestore";
import { deleted } from "./delete";

export type theaterType = {
  id: string;
  setlist: string;
  tanggal: string;
  member_regular: boolean;
  member: string;
  venue: string;
  time: Timestamp;
  deleted: deleted;
};
