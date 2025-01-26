"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberTypeZod } from "./zodSchema";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react"
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
    accessorKey: "nama",
    header: ({ column }) => {
        return (
          <button
            type="button"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nama
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        )
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
    accessorKey: "generasi",
    header: "Generasi",
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
    accessorKey: "umur",
    header: "Umur",
  },
  {
    accessorKey: "asal",
    header: "Asal",
  },
  {
    accessorKey: "tanggal_lahir",
    header: "Tanggal Lahir",
  },
  {
    accessorKey: "kota_lahir",
    header: "Kota Lahir",
  },
  {
    accessorKey: "member_regular",
    header: "Member Regular",
  },
  {
    accessorKey: "salam_perkenalan",
    header: "Salam Perkenalan",
  },
  {
    accessorKey: "tanggal_bergabung",
    header: "Tanggal Bergabung",
  },
  {
    accessorKey: "fanbase",
    header: "Fanbase",
  },
  {
    accessorKey: "universitas",
    header: "Universitas",
  },
  {
    accessorKey: "jurusan",
    header: "Jurusan",
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
            <button type="button" className="h-8 w-8 p-0">
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
