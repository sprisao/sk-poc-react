import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../../ui/table";
import {useEffect, useState} from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    onSelect: (selectedItem: TData) => void
    onDoubleClick?: (selectedItem: TData) => void
}

export function AccountTable<TData, TValue>({
                                                             columns, data, onSelect, onDoubleClick
                                                         }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({})


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        state:{
            rowSelection
        }
    });
    //
    useEffect(() => {
        if (rowSelection && table.getFilteredSelectedRowModel().rows.length === 1) {
            onSelect(table.getFilteredSelectedRowModel().rows[0].original)
        }
    }, [rowSelection]);


    return (
        <Table className="table-auto">
            <TableHeader className="bg-blue-300 text-xs">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead
                                    className="text-center border h-6 text-white px-0"
                                    key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className="text-xs">
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            data-state={row.getIsSelected() && "selected"}
                            onDoubleClick={() => {
                                if (onDoubleClick) {
                                    onDoubleClick(row.original)
                                }
                            }}
                            className={row.index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                            key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell className="text-center border text-sm" key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow className="h-[110px]">
                        <TableCell className="text-center border" colSpan={columns.length}>
                            No data
                        </TableCell>
                    </TableRow>
                )}

            </TableBody>
        </Table>
    )
}