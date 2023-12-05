import {CustomerConsultationHistory} from "./types";
export async function getHistoryData(): Promise<CustomerConsultationHistory[]> {
    const serverUrl = 'http://3.35.140.144/api/sk/GET_CSR_CNSL_HST_HISTORY';

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
    return contents.map(toHistory);
}

type HistoryData = {
    CNSL_DT: string; // 상담일자
    CNSL_TM: string; // 상담시각
    SVC_CNSL_NUM: string; // 통화번호
    CNST_TYP: string; // 상담유형
    CNSL_SEQ_NUM: string; // 메모
    PROC_ST: string; // 처리상태
    CNSL_NM: string; // 상담원
    CONT_KND: string; // 접촉구분
};

function toHistory(data: HistoryData): CustomerConsultationHistory {
    return {
        consultationDate: data.CNSL_DT,
        consultationTime: data.CNSL_TM,
        serviceConsultationNumber: data.SVC_CNSL_NUM,
        consultationType: data.CNST_TYP,
        notes: data.CNSL_SEQ_NUM,
        processStatus: data.PROC_ST,
        consultantName: data.CNSL_NM,
        contactCategory: data.CONT_KND,
    };
}
