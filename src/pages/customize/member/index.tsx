import { memberType } from "@/components/types/memberType";
import React from "react";
import useSWR from "swr";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function Member() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-member", fetcher);
  const dataMember: memberType[] = isLoading
    ? []
    : data.data.filter((member: memberType) => !member.deleted.isDeleted);

  return (
    <div className="w-[90%] mx-auto mt-20">
      <DataTable columns={columns} data={dataMember} />
    </div>
  );
}
