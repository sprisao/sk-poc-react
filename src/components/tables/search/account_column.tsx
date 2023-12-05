import {ColumnDef} from "@tanstack/react-table";
import {ServiceAccountSearchData} from "../../../lib/types";
import {Checkbox} from "../../ui/checkbox";


export const serviceAccountSearchColumns: ColumnDef<ServiceAccountSearchData>[] = [
    {
        id: "select",
        header: ({table}) => (
            <p className="">선택</p>
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "serviceNumber",
        accessorKey: "serviceNumber",
        header: "서비스번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceNumber")}</div>
    },
    {
        id: "customerCorporateNumber",
        accessorKey: "customerCorporateNumber",
        header: "고객법인번호",
        cell: ({row}) =>
            <div className="">{row.getValue("customerCorporateNumber")}</div>
    },
    {
        id: "sexCode",
        accessorKey: "sexCode",
        header: "성별코드",
        cell: ({row}) =>
            <div className="">{row.getValue("sexCode")}</div>
    },
    {
        id: "customerAccountNumber",
        accessorKey: "customerAccountNumber",
        header: "고객계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("customerAccountNumber")}</div>
    },
    {
        id: "customerName",
        accessorKey: "customerName",
        header: "고객명",
        cell: ({row}) =>
            <div className="">{row.getValue("customerName")}</div>
    },
    {
        id: "billingAccountNumber",
        accessorKey: "billingAccountNumber",
        header: "청구계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("billingAccountNumber")}</div>
    },
    {
        id: "billingCustomerName",
        accessorKey: "billingCustomerName",
        header: "청구고객명",
        cell: ({row}) =>
            <div className="">{row.getValue("billingCustomerName")}</div>
    },
    {
        id: "serviceAccountNumber",
        accessorKey: "serviceAccountNumber",
        header: "서비스계정번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceAccountNumber")}</div>
    },
    {
        id: "serviceSubscriptionDate",
        accessorKey: "serviceSubscriptionDate",
        header: "서비스가입일자",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceSubscriptionDate")}</div>
    },
]
