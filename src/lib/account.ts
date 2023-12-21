import {ServiceAccountSearchData} from "./types";

export async function getServiceAccountSearchData(phoneNumber: string): Promise<ServiceAccountSearchData[]> {
    // http://localhost:8080/api/sk/GET_CSR_SV_ACNT?phoneNumber=01046363632
    const serverUrl = `http://43.201.114.135/api/sk/GET_CSR_SV_ACNT?phoneNumber=${phoneNumber}`;

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
    return contents.map(toAccountResult);
}

type AccountData = {
    SEX_NM: string; // 성별
    CU_CORP_NUM: string; // 법인번호
    SV_ACNT_NUM: number; // 서비스계정번호
    CU_NM: string; // 고객명
    SVC_NUM: string; // 서비스번호
    SVC_SCRB_DT: string; // 서비스가입일자
    BL_ACNT_NUM: number; // 청구계정번호
    CU_ACNT_NUM: number; // 고객계정번호
    BL_CU_NM: string; // 청구고객명
}

function toAccountResult(data: AccountData): ServiceAccountSearchData {
    return {
        serviceNumber: data.SVC_NUM,
        customerCorporateNumber: data.CU_CORP_NUM,
        sexCode:data.SEX_NM,
        customerAccountNumber: data.CU_ACNT_NUM,
        customerName: data.CU_NM,
        billingAccountNumber: data.BL_ACNT_NUM,
        billingCustomerName: data.BL_CU_NM,
        serviceAccountNumber: data.SV_ACNT_NUM,
        serviceSubscriptionDate: data.SVC_SCRB_DT,
    };
}