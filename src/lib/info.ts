import {CustomerConsultationInfo} from "./types";

export async function getInfoData(): Promise<CustomerConsultationInfo[]> {
    const serverUrl = 'http://43.201.114.135/api/sk/GET_CSR_CNSL_INFO';

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

    const contents = data.contents;

    return contents.map(toCustomerInfo);
}

type CustomerInfoData = {
    SV_ACNT_NUM: number; // 서비스계정번호
    SVC_NM: string; // 서비스명
    SVC_ST_NM: string; // 서비스상태명
    EQP_NM: string; // 단말기
    SVC_NUM: string; // 서비스번호
    FEE_NM: string; // 요금제
}

function toCustomerInfo(data: CustomerInfoData): CustomerConsultationInfo {
    return {
        serviceAccountNumber: data.SV_ACNT_NUM,
        serviceName: data.SVC_NM,
        serviceStatusName: data.SVC_ST_NM,
        equipmentName: data.EQP_NM,
        serviceNumber: data.SVC_NUM,
        feeName: data.FEE_NM,
    };
}

