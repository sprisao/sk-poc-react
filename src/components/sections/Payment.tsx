import SectionTitle from "../ui/sectionTitle";
import CommonButton from "../ui/commonButton";
import ResultContainer from "../ui/resultContainer";
import {CustomerConsultationDetail} from "../../lib/types";


type PaymentInformationProps = {
    data: CustomerConsultationDetail;
};


const Payment = ({data}: PaymentInformationProps) => {
    return (
        <div className="flex flex-col h-full w-full justify-between">
            <SectionTitle title="납부정보"/>
            <div className="px-5 py-1 space-y-1">
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구서발행유형
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data?.billIssueType || ""} key={data?.billIssueType}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            청구주소
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer
                            content={`${data?.billAddress1 || ""} ${data?.billAddress2 || ""} ${data?.billAddress3 || ""}`}
                            key={`${data?.billAddress1}${data?.billAddress2}${data?.billAddress3}`}
                        />

                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            세금계산서발행
                        </p>
                    </div>
                    <div className="flex items-center  col-span-2 ">
                        <ResultContainer content={data?.taxInvoiceIssue || ""} key={data?.taxInvoiceIssue}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            납부방법
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer
                            content={`${data?.paymentMethod1 || ""} ${data?.paymentMethod2 || ""} ${data?.paymentMethod3 || ""}`}
                            key={`${data?.paymentMethod1}${data?.paymentMethod2}${data?.paymentMethod3}`}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            은행/카드사
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data?.bankOrCardCompany} key={data?.bankOrCardCompany}/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-sm">
                    <div className="flex items-center justify-end col-span-1">
                        <p className="text-right">
                            카드/계좌번호
                        </p>
                    </div>
                    <div className="flex items-center col-span-2 ">
                        <ResultContainer content={data?.bankOrCardNumber} key={data?.bankOrCardNumber}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 auto-cols-max gap-1 p-1">
                <CommonButton disable={false}>자납변경</CommonButton>
                <CommonButton disable={false}>인출일정</CommonButton>
                <CommonButton disable={false}>청구정보관리</CommonButton>
                <CommonButton disable={false}>기본약정/할부지원</CommonButton>
                <CommonButton disable={false}>입금전용계좌</CommonButton>
                <CommonButton disable={true}>청구서 반송내역</CommonButton>
            </div>

        </div>
    )
}

export default Payment