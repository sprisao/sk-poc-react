import {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface DataTableProps<TData, TValue> {
    data: TData[]
    showMore: boolean
}

const HistoryTable = ({data, showMore}: DataTableProps<any, any>) => {

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
            {
                field: "consultationDate", headerName: "상담일자",
            },
            {field: "consultationTime", headerName: "상담시각",},
            {field: "serviceConsultationNumber", headerName: "통화번호",},
            {field: "consultationType", headerName: "상담유형",},
            {field: "notes", headerName: "메모",},
            {field: "processStatus", headerName: "처리상태",},
            {field: "consultantName", headerName: "상담원",},
            {field: "contactCategory", headerName: "접촉구분",},
        ]
    );
    let tHeight = showMore ? 1285 : 285;


    return (
        <div className="ag-theme-alpine" style={{height: tHeight, width: '100%'}}>
            <AgGridReact
                headerHeight={30}
                rowHeight={25}
                rowData={data}
                columnDefs={colDefs}
                defaultColDef={{
                    flex: 1,
                    minWidth: 100,
                    resizable: true,
                    sortable: true,
                    filter: true
                }}
            />
        </div>
    )
}

export default HistoryTable;