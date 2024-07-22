import NewsPagingButton from "@/components/elements/NewsPagingButton";
import React from "react";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";

export default function NewsPaging() {
  return (
    <>
      <TbChevronsLeft className="cursor-pointer hover:bg-gradient-to-r rounded-xl p-1 text-3xl hover:text-black hover:from-custom-green hover:to-blue-600" />
      <div className="flex gap-1 cursor-pointer ">
        <NewsPagingButton>1</NewsPagingButton>
        <NewsPagingButton>2</NewsPagingButton>
        <NewsPagingButton>3</NewsPagingButton>
      </div>
      <TbChevronsRight className="cursor-pointer rounded-xl p-1 text-3xl hover:text-black hover:bg-gradient-to-r hover:from-custom-green hover:to-blue-600" />
    </>
  );
}
