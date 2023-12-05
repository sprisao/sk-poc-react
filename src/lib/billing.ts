import {BillingInfoData} from "./types";

export async function getBillingInfoData(): Promise<BillingInfoData[]> {
    const serverUrl = 'http://3.35.140.144/api/sk/GET_INV_SVC_INV_SPC';

    const response = await fetch(serverUrl,{
        cache: 'no-cache',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }


    const data = await response.json();

    // 'contents' 키에 해당하는 배열에 접근
    const contents = data.contents;

    // 각 항목을 'toHistory' 함수로 변환
    return contents.map(toBillingInfo);
}

type BillingData ={
    INV_DT: number; // 청구일자
    INV_AMT: number; // 청구금액(절사)
    COL_BAMT: number; // 미납잔액
    SVC_CNT: number; // 서비스수
}

function toBillingInfo(data: BillingData): BillingInfoData {
    return {
        invoiceDate: data.INV_DT,
        invoiceAmount: data.INV_AMT,
        unpaidBalance: data.COL_BAMT,
        serviceCount: data.SVC_CNT,
    };
}
