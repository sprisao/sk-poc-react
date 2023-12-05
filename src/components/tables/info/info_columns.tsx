import {ColumnDef} from "@tanstack/react-table"
import {Checkbox} from "../../ui/checkbox";
import {CustomerConsultationInfo} from "../../../lib/types";

/*고객상담정보 타입*/

export const info_columns: ColumnDef<CustomerConsultationInfo>[] = [
    {
        id: "select",
        header: ({table}) => (
            <div className="flex flex-row justify-center">
                <p className="">선택</p>
            </div>
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
        accessorKey: "serviceAccountNumber",
        header: "서비스계정정보",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceAccountNumber")}</div>,
    },
    {
        accessorKey: "serviceName",
        header: "서비스구분",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceName")}</div>,
    },
    {
        accessorKey: "serviceNumber",
        header: "서비스 번호",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceNumber")}</div>,
    },
    {
        accessorKey: "serviceStatusName",
        header: "서비스상태",
        cell: ({row}) => <div className="lowercase">{row.getValue("serviceStatusName")}</div>,
    },
    {
        accessorKey: "feeName",
        header: "요금제",
        cell: ({row}) => <div className="lowercase">{row.getValue("feeName")}</div>,
    },
    {
        accessorKey: "equipmentName",
        header: "단말기",
        cell: ({row}) => <div className="lowercase">{row.getValue("equipmentName" +
            "")}</div>,
    },
]
