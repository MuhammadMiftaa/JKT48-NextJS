"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberTypeZod } from "./zodSchema";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="h-8 w-8 p-0 flex justify-center items-center"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.nama)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
