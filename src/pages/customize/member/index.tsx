import { memberType } from "@/types/memberType";
import React, { useState } from "react";
import useSWR from "swr";
import { columns } from "../../../components/layouts/TableMember/columns";
import { DataTable } from "@/components/layouts/TableMember/data-table";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Member() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [success, setSuccess] = useState(false);
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
