import {CustomerConsultationDetail} from "./types";

export async function getConsultationDetailData(phoneNumber: string): Promise<CustomerConsultationDetail> {
    const serverUrl = `http://43.201.114.135/api/sk/GET_CSR_CNSL_HST?phoneNumber=${phoneNumber}`;

    const response = await fetch(serverUrl, {
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
    const contents = data.contents[0];

    console.log(`contents: ${contents}`)


    // 각 항목을 'toHistory' 함수로 변환
    return toConsultationDetail(contents);
}

type DetailData = {
    SIM_TYP2: string; // USIM
    SIM_TYP1: string; // 02
    EQP_CORP: string; // 블랙리스트_삼성
    PAY_MT1: string; // 카드자동납부
    PAY_MT2: string; // 26일
    PAY_MT3: string; // 청구1주기(KFTC)
    EQP_OS: string; // Android 9
    SVC_AFT_AMT: string; // 0
    BANK_CARD_CO: string; // 삼성카드
    TEEN_CL: string; // N
    SVC_SCRB_DT: string; // ****07-22
    BILL_ADDR3: string; // **********
    SVC_COL_CNT: number; // 1
    SIM_TYP4: string; // 12********
    BILL_ADDR1: string; // 008**
    SIM_TYP3: string; // 150**
    BILL_ADDR2: string; // 서울 강**********
    EQP_NM2: string; // 스마트폰
    BILL_ISUE_NM: string; // 청구서미발송
    SVC_EQP: string; // 353406
    BANK_CARD_NUM: string; // 7318****************
    EQP_NM1: string; // OMD 삼성 갤럭시
    FEE_DTL_NM: string; // 10% 포인트(2GB/200분) [요금무약정]
    SVC_SCRB_CL: string; // 신규가입
    SVC_MTH_AMT: string; // 0
    TAX_ISUE: string; // N
    SVC_ST_NM: string; // 사용 중
    BILL_EMAIL: string; // test***********
    EQP_MTHD1: string; // LTE-WCDMA
    SVC_TYP_NM: string; // 일반
    SVC_COL_AMT: number; // 7700
}


function toConsultationDetail(data: DetailData): CustomerConsultationDetail {
    return {
        serviceNumber: data.SVC_EQP,
        postCorpName: data.BILL_ADDR1,
        welfareDiscount: data.SVC_AFT_AMT,
        serviceSubscribeDate: data.SVC_SCRB_DT,
        serviceTerminateDate: data.SVC_SCRB_DT,
        feeDetailName: data.FEE_DTL_NM,
        serviceStatusName: data.SVC_ST_NM,
        serviceSubscribeClass: data.SVC_SCRB_CL,
        serviceType: data.SVC_TYP_NM,
        simType1: data.SIM_TYP1,
        simType2: data.SIM_TYP2,
        simType3: data.SIM_TYP3,
        simType4: data.SIM_TYP4,
        equipmentManufacturer: data.EQP_CORP,
        equipmentOS: data.EQP_OS,
        equipmentNickname1: data.EQP_NM1,
        equipmentNickname2: data.EQP_NM2,
        serviceUseDate: data.SVC_SCRB_DT,
        minorClass: data.TEEN_CL,
        equipmentMethod1: data.EQP_MTHD1,
        equipmentMethod2: data.EQP_MTHD1,
        legalGuardian: data.BILL_ADDR1,
        serviceNumberPortability1: data.SVC_EQP,
        serviceNumberPortability2: data.SVC_EQP,
        unpaidMonthCount: data.SVC_COL_CNT,
        unpaidAmount: data.SVC_COL_AMT,
        currentMonthCharge: data.SVC_MTH_AMT,
        postChargeAmount: data.SVC_MTH_AMT,
        billIssueType: data.BILL_ISUE_NM,
        billEmail: data.BILL_EMAIL,
        billAddress1: data.BILL_ADDR1,
        billAddress2: data.BILL_ADDR2,
        billAddress3: data.BILL_ADDR3,
        taxInvoiceIssue: data.TAX_ISUE,
        paymentMethod1: data.PAY_MT1,
        paymentMethod2: data.PAY_MT2,
        paymentMethod3: data.PAY_MT3,
        bankOrCardCompany: data.BANK_CARD_CO,
        bankOrCardNumber: data.BANK_CARD_NUM,
    };

}