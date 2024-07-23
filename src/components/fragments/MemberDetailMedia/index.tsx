import BackSide from "@/components/elements/MemberDetailMediaSide/BackSide";
import FrontSide from "@/components/elements/MemberDetailMediaSide/FrontSide";
import React from "react";

export default function MemberDetailMedia(props: {
  username_ig: string;
  username_idn: string;
  username_tiktok: string;
  username_sr: string;
  username_x: string;
  nama: string;
}) {
  const {
    username_ig,
    username_idn,
    username_tiktok,
    username_sr,
    username_x,
    nama,
  } = props;
  return (
    <div
      className="card relative h-screen w-full overflow-hidden"
      style={{ backfaceVisibility: "hidden", transition: "0.6s" }}
    >
      <FrontSide nama={nama} />
      <BackSide
        username_ig={username_ig}
        username_idn={username_idn}
        username_tiktok={username_tiktok}
        username_sr={username_sr}
        username_x={username_x}
      />
    </div>
  );
}
