import { Timestamp } from "firebase/firestore";

export type theaterType = {
    id: string;
    setlist: string;
    tanggal: string;
    member_regular: boolean;
    member: string;
    venue: string;
    time: Timestamp;
}