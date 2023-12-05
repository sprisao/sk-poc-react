'use client'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../../ui/table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function BillingTable<TData, TValue>({
                                                    columns, data
                                                }: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="h-[127px] overflow-y-scroll">
        <Table className="table-auto">
            <TableHeader className="bg-blue-300">
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {
                                headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className="text-center border text-white h-6" key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })
                            }
                        </TableRow>
                    ))
                }
            </TableHeader>
            <TableBody>
                {
                    table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className={row.index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                                key={row.id}>
                                {
                                    row.getVisibleCells().map((cell) => {
                                        return (
                                            <TableCell className="text-center border" key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell className="text-center border" colSpan={columns.length}>
                                No Data
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
        </div>
    );
}

