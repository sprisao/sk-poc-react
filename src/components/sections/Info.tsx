import {InfoTable} from "../tables/info/InfoTable";
import {info_columns} from "../tables/info/info_columns";
import SectionTitle from "../ui/sectionTitle";
import Detail from "./Detail";
import Billing from "./Billing";
import Payment from "./Payment";
import Save from "./Save";
import History from "./History";
import React, {useEffect, useState} from "react";


interface InfoProps {
  infoData: any; // Replace 'any' with the actual type
  detailData: any; // Replace 'any' with the actual type
  billingData: any; // Replace 'any' with the actual type
  historyData: any; // Replace 'any' with the actual type
    inputActivated: boolean;
}

const Info: React.FC<InfoProps> = ({infoData, detailData, billingData, historyData}) => {
        const [inputActivated, setInputActivated] = useState(false);
            // When infoData changes, set inputActivated to true
    useEffect(() => {
        if (infoData.length > 0) {
            setInputActivated(true);
        }
    }, [infoData, setInputActivated]);



    return (
        <>
            <div className="w-full border rounded-sm overflow-clip m-1 ">
                <SectionTitle title="고객상담 정보"/>
                <div className="flex flex-row justify-between">
                    <InfoTable columns={info_columns} data={infoData}/>
                </div>
            </div>
            <div className="w-full">
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <Detail data={detailData}/>
                    </div>
                    <div className="w-1/2 border rounded-sm overflow-clip ">
                        <Billing
                            unpaidMonthCount={detailData?.unpaidMonthCount}
                            currentMonthCharge={detailData?.currentMonthCharge}
                            unpaidAmount={detailData?.unpaidAmount}
                            postChargeAmount={detailData?.postChargeAmount}
                            billingInfoData={billingData}
                        />
                    </div>
                </div>
                <div className="flex w-full flex-row space-x-1.5 justify-between m-1">
                    <div className="w-2/5 border rounded-sm overflow-clip ">
                        <Payment data={detailData}/>
                    </div>
                    <div className="w-3/5 border rounded-sm overflow-clip ">
                        <Save inputActivated={inputActivated}/>
                    </div>
                </div>
            </div>
            <History customerHistoryData={historyData} customerSMSHistoryData="" customerUnpaidHistoryData=""/>
        </>
    );
}

export default Info;