"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberTypeZod } from "./zodSchema";

export const columns: ColumnDef<MemberTypeZod>[] = [
    {
        accessorKey: "nama",
        header: "Nama",
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
];
