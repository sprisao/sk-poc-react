export type ServiceAccountSearchData = {
    serviceNumber: string;        // 서비스번호, VARCHAR2(20)
    customerCorporateNumber: string; // 고객법인번호, NUMBER(20)
    sexCode: string;              // 성별코드, VARCHAR2(4)
    customerAccountNumber: number; // 고객계정번호, NUMBER(10)
    customerName: string;         // 고객명, VARCHAR2(80)
    billingAccountNumber: number; // 청구계정번호, NUMBER(10)
    billingCustomerName: string;  // 청구고객명, VARCHAR2(80)
    serviceAccountNumber: number; // 서비스계정번호, NUMBER(10)
    serviceSubscriptionDate: string; // 서비스가입일자, VARCHAR2(8)
};


export type CustomerConsultationInfo = {
    serviceNumber: string; // 서비스번호
    serviceAccountNumber: number; // 서비스계정번호
    serviceName: string; // 서비스명
    serviceStatusName: string; // 서비스상태명
    feeName: string; // 요금제
    equipmentName: string; // 단말기
};

export type CustomerConsultationDetail = {
    serviceNumber: string; // 서비스번호
    postCorpName: string; // 소속법인명
    welfareDiscount: string; // 복지할인
    serviceSubscribeDate: string; // 서비스가입일
    serviceTerminateDate: string; // 서비스해지일
    feeDetailName: string; // 요금제상세
    serviceStatusName: string; // 서비스상태명
    serviceSubscribeClass: string; // 서비스구분
    serviceType: string; // 이용종류
    simType1: string; // SIM유형1
    simType2: string; // SIM유형2
    simType3: string; // SIM유형3
    simType4: string; // SIM유형4
    equipmentManufacturer: string; // 제조사
    equipmentOS: string; // OS
    equipmentNickname1: string; // 단말기애칭1
    equipmentNickname2: string; // 단말기애칭2
    serviceUseDate: string; // 사용일
    minorClass: string; // 미성년자
    equipmentMethod1: string; // 방식1
    equipmentMethod2: string; // 방식2
    legalGuardian: string; // 법정대리인
    serviceNumberPortability1: string; // 번호이동1
    serviceNumberPortability2: string; // 번호이동2
    unpaidMonthCount: number; // 미납월수
    unpaidAmount: number; // 미납금액
    currentMonthCharge: string; // 당월청구
    postChargeAmount: string; // 후청구금액
    billIssueType: string; // 청구서발행유형
    billEmail: string; // 이메일
    billAddress1: string; // 청구주소
    billAddress2: string;
    billAddress3: string;
    taxInvoiceIssue: string; // 새금계산서발행
    paymentMethod1: string; // 납부방법1
    paymentMethod2: string; // 납부방법2
    paymentMethod3: string; // 납부방법3
    bankOrCardCompany: string; // 은행/카드사
    bankOrCardNumber: string; // 카드/계좌번호
};

export type CustomerConsultationHistory = {
    consultationDate: string; // 상담일자
    consultationTime: string; // 상담시각
    serviceConsultationNumber: string; // 통화번호
    consultationType: string; // 상담유형
    notes: string; // 메모
    processStatus: string; // 처리상태
    consultantName: string; // 상담원
    contactCategory: string; // 접촉구분
};

export type BillingInfoData = {
    invoiceDate: number; // 청구일자
    invoiceAmount: number; // 청구금액(절사)
    unpaidBalance: number; // 미납잔액
    serviceCount: number; // 서비스수
};

