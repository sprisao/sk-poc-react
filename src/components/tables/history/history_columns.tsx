import {ColumnDef} from "@tanstack/react-table";
import {CustomerConsultationHistory} from "../../../lib/types";

export const customerServiceHistoryColumns: ColumnDef<CustomerConsultationHistory>[] = [
    {
        id: "consultationDate",
        accessorKey: "consultationDate",
        header: "상담일자",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationDate")}</div>
    },
    {
        id: "consultationTime",
        accessorKey: "consultationTime",
        header: "상담시각",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationTime")}</div>
    },
    {
        id: "serviceConsultationNumber",
        accessorKey: "serviceConsultationNumber",
        header: "통화번호",
        cell: ({row}) =>
            <div className="">{row.getValue("serviceConsultationNumber")}</div>
    },
    {
        id: "consultationType",
        accessorKey: "consultationType",
        header: "상담유형",
        cell: ({row}) =>
            <div className="">{row.getValue("consultationType")}</div>
    },
    {
        id: "notes",
        accessorKey: "notes",
        header: "메모",
        cell: ({row}) =>
            <div className="">{row.getValue("notes")}</div>
    },
    {
        id: "processStatus",
        accessorKey: "processStatus",
        header: "처리상태",
        cell: ({row}) =>
            <div className="">{row.getValue("processStatus")}</div>
    },
    {
        id: "consultantName",
        accessorKey: "consultantName",
        header: "상담원",
        cell: ({row}) =>
            <div className="">{row.getValue("consultantName")}</div>
    },
    {
        id: "contactCategory",
        accessorKey: "contactCategory",
        header: "접촉구분",
        cell: ({row}) =>
            <div className="">{row.getValue("contactCategory")}</div>
    },
]
