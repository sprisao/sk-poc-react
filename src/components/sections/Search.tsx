import SectionTitle from "../ui/sectionTitle";
import CommonButton from "../ui/commonButton";
import {Button} from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import InputBox from "../ui/inputBox";
import SelectBox from "../ui/selectBox";
import {Checkbox} from "../ui/checkbox";
import {AccountTable} from "../tables/search/AccountTable";
import {
    serviceAccountSearchColumns
} from "../tables/search/account_column";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {HiMagnifyingGlass} from "react-icons/hi2";
import Info from "./Info";
import {getServiceAccountSearchData} from "../../lib/account";
import {getConsultationDetailData} from "../../lib/detail";
import {getBillingInfoData} from "../../lib/billing";
import {getHistoryData} from "../../lib/history";
import {CustomerConsultationDetail, ServiceAccountSearchData} from "../../lib/types";
import {getInfoData} from "../../lib/info";

const Search = () => {

    const [midNumber, setMidNumber] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const [selectedServiceNumber, setSelectedServiceNumber] = useState('')

    const [inputActivated, setInputActivated] = useState(false)
    const [searchResult, setSearchResult] = useState<ServiceAccountSearchData[]>([])

    const [customerInfoData, setCustomerInfoData] = useState([])
    const [detailData, setDetailData] = useState<CustomerConsultationDetail | null>(null)
    const [billingData, setBillingData] = useState([])
    const [historyData, setHistoryData] = useState([])

    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const [getAccountData, setGetAccountData] = useState(false);
    const [getInfoDataState, setGetInfoDataState] = useState(false);
    const [getDetailDataState, setGetDetailDataState] = useState(false);
    const [getBillingDataState, setGetBillingDataState] = useState(false);
    const [getHistoryDataState, setGetHistoryDataState] = useState(false);

    const [customerName, setCustomerName] = useState('')
    const [customerSex, setCustomerSex] = useState('')

    useEffect(() => {
        const controller = new AbortController();
        if (!getAccountData) return
        (async () => {
            const data = await getServiceAccountSearchData(`010${midNumber}${lastNumber}`)
            setSearchResult(data as never[])
            console.log(data)
        })()
        setGetAccountData(false)
        return () => {
            controller.abort()
        }
    }, [getAccountData]);

    useEffect(() => {
        const controller = new AbortController();
        if (!getInfoDataState) return
        (async () => {
            const data = await getInfoData(`010${midNumber}${lastNumber}`)
            setCustomerInfoData(data as never[])
            setInputActivated(true)
        })()
        setGetInfoDataState(false)
        return () => {
            controller.abort()
        }
    }, [getInfoDataState]);

    useEffect(() => {
        const controller = new AbortController();
        if (!getDetailDataState) return
        (async () => {
            const detailData = await getConsultationDetailData(`010${midNumber}${lastNumber}`)
            setDetailData(detailData as CustomerConsultationDetail | null)
        })()
        setGetDetailDataState(false)
        return () => {
            controller.abort()
        }
    }, [getDetailDataState]);

    useEffect(() => {
        const controller = new AbortController();
        if (!getBillingDataState) return
        (async () => {
            const billingData = await getBillingInfoData(`010${midNumber}${lastNumber}`)
            setBillingData(billingData as never[])
        })()
        setGetBillingDataState(false)
        return () => {
            controller.abort()
        }
    }, [getBillingDataState]);

    useEffect(() => {
        const controller = new AbortController();
        if (!getHistoryDataState) return
        (async () => {
            const historyData = await getHistoryData(`010${midNumber}${lastNumber}`)
            setHistoryData(historyData as never[])
        })()
        setGetHistoryDataState(false)
        return () => {
            controller.abort()
        }
    }, [getHistoryDataState]);

    function searchUser() {
        console.log(`searchUser: ${selectedServiceNumber}`)
        const query = `010${midNumber}${lastNumber}`
        setGetAccountData(true)
        console.log(`searchUser: ${query}`)
    }

    /*todo: 검색결과에 표시된 사용자를 클릭하고 적용하면 고객상담 정보에 데이터 표시*/
    function fetchData() {
        setGetInfoDataState(true)
        setGetDetailDataState(true)
        setGetBillingDataState(true)
        setGetHistoryDataState(true)
        console.log(`fetchData: ${selectedServiceNumber}`)
    }

    interface SelectedItem {
        serviceNumber: string;
        // add other properties if needed
    }


    const handleDoubleClick = async (selectedItem: SelectedItem) => {
        /*기존 데이터 초기화 후 다시 fetch*/
        setCustomerName(searchResult[0].customerName)
        setCustomerSex(searchResult[0].sexCode)
        setCustomerInfoData([])
        setHistoryData([])
        setDetailData(null)
        setBillingData([])
        setSelectedServiceNumber(selectedItem.serviceNumber); // 예시로 'serviceNumber' 필드를 사용
        console.log(`handleDoubleClick: ${selectedItem.serviceNumber}`)
        fetchData()
        closeButtonRef.current?.click();
    }

    const handleSelect = (selectedItem: SelectedItem) => {
        setSelectedServiceNumber(selectedItem.serviceNumber); // 예시로 'serviceNumber' 필드를 사용
        console.log(`handleSelect: ${selectedItem.serviceNumber}`)
    };

    useEffect(() => {
        console.log(`useeffect selectedServiceNumber: ${selectedServiceNumber}`)
        setMidNumber(selectedServiceNumber.substring(3, 7));
        setLastNumber(selectedServiceNumber.substring(7, 11));
    }, [selectedServiceNumber]);

    return (
        <Dialog onOpenChange={(e) => {
            if (!e) {
                setSearchResult([])
            }
        }}>
            <div className="w-full border rounded-sm overflow-clip m-1 mt-4 ">
                <SectionTitle title="고객상담관리 조회"/>
                <div className="flex flex-row py-2 px-2 justify-around text-sm space-x-3 w-full">
                    <div className="flex-1  flex flex-row items-center space-x-2 justify-end ">
                        <p className="shrink-0">조회구분</p>
                        <div className="flex flex-row items-center space-x-1 flex-1 ">
                            <SelectBox className="max-w-[120px] min-w-[100px]">
                                <option>서비스번호</option>
                                <option>법인번호</option>
                                <option>사업자번호</option>
                                <option>외국인등록번호</option>
                                <option>여권번호</option>
                                <option>고객계정번호</option>
                            </SelectBox>
                            <SelectBox className="max-w-[100px]">
                                <option>010</option>
                            </SelectBox>

                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                value={midNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setMidNumber(e.target.value)}
                            />
                            <InputBox
                                className="max-w-[100px]"
                                type="number"
                                value={lastNumber}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastNumber(e.target.value)}
                            />
                            <DialogTrigger asChild>
                                <Button className="h-7 px-2 rounded-sm py-1"
                                        onClick={
                                            () => {
                                                searchUser()
                                            }
                                        }
                                ><HiMagnifyingGlass fontSize={23}/></Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    <div className=" flex-1 flex flex-row items-center space-x-3">
                        <div className="flex flex-row items-center">
                            <p className="shrink-0 mr-1">고객명</p>
                            <InputBox
                                className="max-w-[70px] grow"
                                type="text"
                                placeholder={customerName}/>
                            <InputBox
                                className="max-w-[35px]"
                                type="text"
                                placeholder={customerSex}/>
                        </div>
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="shrink-0">생년/법인/사업자번호</p>
                            <InputBox
                                className="max-w-[120px] grow"
                                type="text"
                                placeholder=""/>
                        </div>
                        <CommonButton disable={true}>
                            고객인증
                        </CommonButton>
                    </div>
                    <div className="col-span-1">
                        <DialogTrigger asChild>
                            <Button className="w-28"
                                    onClick={
                                        () => {
                                            searchUser()
                                        }
                                    }
                            >
                                조회</Button>
                        </DialogTrigger>
                    </div>
                </div>
            </div>
            <DialogContent className="w-full">
                <DialogHeader>
                    <DialogTitle>고객청구서비스정보조회</DialogTitle>
                </DialogHeader>
                <div className="w-full text-sm">
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="검색"/>
                        <div className="flex flex-row justify-between items-center py-1 px-3">
                            <div className="flex flex-row space-x-1 items-center">
                                <SelectBox className="">
                                    <option>서비스번호</option>
                                    <option>법인번호</option>
                                    <option>사업자번호</option>
                                    <option>외국인등록번호</option>
                                    <option>여권번호</option>
                                    <option>고객계정번호</option>
                                </SelectBox>
                                <InputBox
                                    className="grow"
                                    type="number"
                                    value={`010${midNumber}${lastNumber}`}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        setMidNumber(e.target.value.substring(3, 7));
                                        setLastNumber(e.target.value.substring(7, 11));
                                    }}
                                />
                                <div className="flex flex-row justify-center items-center w-full space-x-1">
                                    <Checkbox></Checkbox>
                                    <p>번호별이력</p>
                                </div>
                            </div>
                            <Button className="w-16 h-8" onClick={() => {
                                setSearchResult([])
                                searchUser();
                            }}>검색</Button>
                        </div>
                    </div>
                    <div className=" border rounded-sm overflow-clip mb-4 ">
                        <SectionTitle title="결과"/>
                        <AccountTable columns={serviceAccountSearchColumns} data={searchResult}
                                      onSelect={handleSelect} onDoubleClick={handleDoubleClick}/>
                    </div>
                    <DialogFooter className="flex flex-row justify-center items-center space-x-1">
                        <DialogClose asChild ref={closeButtonRef}>
                            <Button type="submit"
                                    onClick={() => {
                                        setCustomerName(searchResult[0].customerName)
                                        setCustomerSex(searchResult[0].sexCode)
                                        setSearchResult([])
                                        setCustomerInfoData([])
                                        setHistoryData([])
                                        setDetailData(null)
                                        setBillingData([])
                                        setGetInfoDataState(true)
                                        setGetDetailDataState(true)
                                        setGetBillingDataState(true)
                                        setGetHistoryDataState(true)
                                        fetchData()
                                    }
                                    }
                            >적용</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={() => {
                                setMidNumber('');
                                setLastNumber('');
                                setSelectedServiceNumber('');
                                setCustomerName('')
                                setCustomerSex('')
                            }}>
                                취소
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </div>
            </DialogContent>
            <Info infoData={customerInfoData} billingData={billingData} detailData={detailData}
                  historyData={historyData} inputActivated={inputActivated}/>
        </Dialog>
    );
}

export default Search;