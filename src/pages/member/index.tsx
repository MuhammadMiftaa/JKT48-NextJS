import Member from "@/components/layouts/Member";
import { log } from "console";
import { useState, useEffect } from "react";

export default function ShopPage() {
  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/member")
      .then((res) => res.json())
      .then((data) => setMember(data.data));
  }, []);

  type memberType = {
    _id: {
      $oid: string;
    };
    nama: string;
    generasi: number;
    asal: string;
    nama_panggilan: string;
    umur: number;
    salam_perkenalan: string;
    tanggal_bergabung: string;
    fanbase: string;
    kota_lahir: string;
    tanggal_lahir: string;
    nama_lengkap: string;
    universitas: string;
    jurusan: string;
    foto: string;
    member_regular: boolean;
    username_idn: string;
    username_ig: string;
    username_sr: string;
    username_tiktok: string;
    username_x: string;
    __v: number;
  };

  return (
    <div>
      {member.map((m: memberType, i: number) => (
        <h1 key={i}>{m.nama}</h1>
      ))}
    </div>
  );
}
