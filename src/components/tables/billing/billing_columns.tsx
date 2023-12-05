import {ColumnDef} from "@tanstack/react-table";
import {BillingInfoData} from "../../../lib/types";



export const columns: ColumnDef<BillingInfoData, string>[] = [
    {
        id: 'invoiceDate',
        accessorKey: 'invoiceDate',
        header: '청구일자', cell: ({row}) =>
            <div className="text-center">{row.getValue("invoiceDate")}</div>
    },
    {
        id: 'invoiceAmount',
        accessorKey: 'invoiceAmount',
        header: '청구금액', cell: ({row}) =>
            <div className="text-center">{row.getValue("invoiceAmount")}</div>
    },
    {
        id: 'unpaidBalance',
        accessorKey: 'unpaidBalance',
        header: '미납잔액', cell: ({row}) =>
            <div className="text-center">{row.getValue("unpaidBalance")}</div>
    },
    {
        id: 'serviceCount',
        accessorKey: 'serviceCount',
        header: '서비스 수', cell: ({row}) =>
            <div className="text-center">{row.getValue("serviceCount")}</div>
    },
];

