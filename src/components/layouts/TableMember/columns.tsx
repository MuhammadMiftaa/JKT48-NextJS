"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberTypeZod } from "../../../schema/zodSchema";
import { ArrowUpDown } from "lucide-react";
import UpdateMemberCell from "./update";
import DeleteMemberCell from "./delete";

export const columns: ColumnDef<MemberTypeZod>[] = [
  {
    accessorKey: "member_regular",
    header: "",
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "generasi",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Generasi
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "umur",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Umur
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "tanggal_lahir",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "asal",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kota Asal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "kota_lahir",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kota Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "fanbase",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fanbase
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "nama_lengkap",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "nama_panggilan",
    header: "Nama Panggilan",
  },
  {
    accessorKey: "kabesha",
    header: "Kabesha",
  },
  {
    accessorKey: "foto",
    header: "Foto",
  },
  {
    accessorKey: "tanggal_bergabung",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Bergabung
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "salam_perkenalan",
    header: "Salam Perkenalan",
  },
  {
    accessorKey: "universitas",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Universitas
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "jurusan",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jurusan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "username_idn",
    header: "Username IDN",
  },
  {
    accessorKey: "username_ig",
    header: "Username IG",
  },
  {
    accessorKey: "username_sr",
    header: "Username SR",
  },
  {
    accessorKey: "username_tiktok",
    header: "Username Tiktok",
  },
  {
    accessorKey: "username_x",
    header: "Username X",
  },
  {
    id: "update",
    cell: ({ row }) => <UpdateMemberCell member={row.original} />,
  },
  {
    id: "remove",
    cell: ({ row }) => <DeleteMemberCell member={row.original} />,
  },
];
