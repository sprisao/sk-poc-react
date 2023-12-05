import SectionTitle from "../ui/sectionTitle";
import CommonButton from "../ui/commonButton";
import ResultContainer from "../ui/resultContainer";
import {CustomerConsultationDetail} from "../../lib/types";


type CustomerServiceDetailProps = {
    data: CustomerConsultationDetail;
};
export const GridRowComponent = ({title, contents}: { title?: string, contents?: string[] }) => {
    return (
        <div className="grid grid-cols-3 w-full justify-center gap-2">
            <div className="col-span-1 flex items-center justify-end shrink-0 ">
                <p className="text-right text-sm">{title}</p>
            </div>
            <div className="col-span-2 flex flex-row w-full justify-evenly space-x-0.5 ">
                {contents?.map((content: string, index: number) => (
                    <ResultContainer key={index} content={content}/>
                ))}
            </div>
        </div>
    );
};
const Detail = ({data}: CustomerServiceDetailProps) => {

    const rows1 = [
        {
            title: "소속법인명",
            contents: [data?.postCorpName || ""]
        },
        {
            title: "가입/해지일",
            contents: [data?.serviceSubscribeDate || "", data?.serviceTerminateDate || ""]
        },
        /*서비스상태, 제조사/OS, 일력/사용일, 방식, 번호이동 Row 추가 */

        {
            title: "서비스상태",
            contents: [data?.serviceStatusName || ""]
        },
        {
            title: "제조사/OS",
            contents: [data?.equipmentManufacturer || "", data?.equipmentOS || ""]
        },
        {
            title: "일련/사용일",
            contents: [data?.serviceNumber || "", data?.serviceUseDate || ""]
        },
        {
            title: "방식",
            contents: [data?.equipmentMethod1 || "", data?.equipmentMethod2 || ""]
        },
        {
            title: "번호이동",
            contents: [data?.serviceNumberPortability1 || "", data?.serviceNumberPortability2 || ""]
        },
    ];

    const rows2 = [
        /*복지할인, 요금제, 이용종류, SIM유형, 단말기애칭, 미성년자, 법정대리인*/
        {
            title: "복지할인",
            contents: [data?.welfareDiscount || ""]
        },
        {
            title: "요금제",
            contents: [data?.feeDetailName || ""]
        },
        {
            title: "이용종류",
            contents: [data?.serviceType || ""]
        },
        {
            title: "SIM유형",
            contents: [data?.simType1 || "", data?.simType2 || "", data?.simType3 || "", data?.simType4 || ""]
        },
        {
            title: "단말기애칭",
            contents: [data?.equipmentNickname1 || "", data?.equipmentNickname2 || ""]
        },
        {
            title: "미성년자",
            contents: [data?.minorClass || ""]
        },
        {
            title: "법정대리인",
            contents: [data?.legalGuardian || ""]
        },
    ];


    return (
        <div>
            <SectionTitle title="고객상담 상세정보"/>
            <div className="grid grid-cols-2 py-2 px-2">
                <div className="col-span-1 flex flex-col space-y-0.5">
                    {rows1.map((row, index) => (
                        <GridRowComponent key={`detail-row1-${index}`} {...row} />
                    ))}
                </div>
                <div className="col-span-1 flex flex-col space-y-0.5">
                    {rows2.map((row, index) => (
                        <GridRowComponent key={`detail-row2-${index}`} {...row} />
                    ))}
                </div>
                <div className="col-end-3 flex flex-row my-2 justify-end space-x-1">
                    <CommonButton disable={false}><p>
                        이동전화변경
                    </p></CommonButton>
                    <CommonButton disable={false}><p>
                        단말할부
                    </p></CommonButton>
                </div>
            </div>
        </div>
    );
}

export default Detail