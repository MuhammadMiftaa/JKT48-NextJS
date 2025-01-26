"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  VisibilityState,
  Cell,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends Cell<TData, unknown>, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterBy, setFilterBy] = useState("nama");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      nama: true,
      nama_lengkap: false,
      nama_panggilan: false,
      generasi: true,
      kabesha: false,
      foto: false,
      umur: true,
      asal: true,
      tanggal_lahir: true,
      kota_lahir: true,
      member_regular: true,
      salam_perkenalan: false,
      tanggal_bergabung: false,
      fanbase: true,
      universitas: false,
      jurusan: false,
      username_idn: false,
      username_ig: false,
      username_sr: false,
      username_tiktok: false,
      username_x: false,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <div className="flex items-center border border-zinc-600 rounded-xl w-[21rem]">
          <input
            placeholder={`Cari berdasarkan ${filterBy.split("_").join(" ")}...`}
            value={
              (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterBy)?.setFilterValue(event.target.value)
            }
            className="bg-transparent border-none p-2 w-full rounded-xl font-urbanist"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="px-3 text-zinc-400 hover:text-white cursor-pointer duration-300">
                <IoMdArrowDropdown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-custom-gray text-white border-zinc-600 font-urbanist">
              <DropdownMenuLabel>Search by</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-600" />
              <DropdownMenuRadioGroup
                value={filterBy}
                onValueChange={setFilterBy}
                className="overflow-y-auto max-h-60"
              >
                {columns.map((column) =>
                  "accessorKey" in column && column.accessorKey ? (
                    <DropdownMenuRadioItem
                      className="capitalize"
                      key={column.accessorKey as string}
                      value={column.accessorKey as string}
                    >
                      {(column.accessorKey as string).split("_").join(" ")}
                    </DropdownMenuRadioItem>
                  ) : null
                )}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="text-zinc-400 hover:text-white duration-300 ml-auto border rounded-md border-zinc-600 py-1.5 px-4 font-urbanist shadow-sm shadow-zinc-600 focus:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              Pilih kolom
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="font-urbanist bg-custom-gray border-zinc-600 text-white overflow-y-auto max-h-80"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id.split("_").join(" ")}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table className="border border-zinc-600 font-urbanist rounded">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="border-zinc-600 group" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="p-1 text-nowrap pr-6 text-zinc-400 group-hover:text-white"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-zinc-600"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell, index) => {
                  const cellName =
                    "accessorKey" in cell.column.columnDef &&
                    cell.column.columnDef.accessorKey
                      ? (cell.column.columnDef.accessorKey as string)
                      : "";
                  const memberRegular =
                    "member_regular" in cell.row.original &&
                    cell.row.original.member_regular
                      ? (cell.row.original.member_regular as boolean)
                      : false;
                  return (
                    <TableCell
                      className={`${
                        cellName === "nama" &&
                        "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-blue-600"
                      } ———— ${
                        (cellName === "foto" || cellName === "kabesha") &&
                        "text-blue-500 italic hover:underline hover:text-white"
                      } ———— ${index === 0 && "pl-6"} text-nowrap pr-6`}
                      key={cell.id}
                    >
                      {!(cellName === "member_regular") ? (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      ) : (
                        <span
                          className={`text-sm uppercase p-1 rounded ${
                            cellName === "member_regular"
                              ? memberRegular
                                ? "border border-red-500 text-red-500"
                                : "border border-pink-400 text-pink-400"
                              : ""
                          }`}
                        >
                          {memberRegular ? "Member" : "Trainee"}
                        </span>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 gap-3 font-urbanist">
        <button
          className="py-1.5 px-4 border border-zinc-600 text-zinc-400 hover:text-white rounded-lg shadow-sm shadow-zinc-600 active:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          type="button"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button
          className="py-1.5 px-4 border border-zinc-600 text-zinc-400 hover:text-white rounded-lg shadow-sm shadow-zinc-600 active:outline-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          type="button"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
