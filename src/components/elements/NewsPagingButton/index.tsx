import React, { PropsWithChildren } from "react";

export default function NewsPagingButton(props: PropsWithChildren) {
  return (
    <p className="hover:bg-gradient-to-r rounded-xl py-1 px-3 text-xl hover:text-black hover:from-custom-green hover:to-blue-600">
      {props.children}
    </p>
  );
}
