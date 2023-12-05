import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import i18n from "i18next";

import {Button} from "./components/ui/button";
import {HiOutlineGlobeAlt} from "react-icons/hi2";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "./components/ui/dialog";
import MonthlySignUpChart from "./components/charts/MonthlySignUpChart";
import RegionPieChart from "./components/charts/RegionPieChart";
import MonthlySignUpLineChart from "./components/charts/MonthlySignUpLineChart";
import RegionRadarChart from "./components/charts/RegionRadarChart";
import ImageSlider from "./components/ui/ImageSlider";
import InputBox from "./components/ui/inputBox";

import profilePic from './assets/images/user.png'
import {DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger} from "./components/ui/dropdown-menu";


// export default function SecondPage() {
//     const {t} = useTranslation();
//     const languageRef = useRef<null | HTMLDivElement>(null);
//     const navigate = useNavigate();
//     const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);
//
//     const changeLanguage = (lang: string) => {
//         i18n.changeLanguage(lang);
//         setLanguageMenuOpen(false);
//     };
//
//     return (
//         <header className="bg-blue-500 p-4">
//             <div className="flex justify-between">
//                 <div className="flex space-x-4">
//                     <nav className="flex space-x-4">
//                         <Button className="text-white cursor-pointer"
//                              onClick={() => navigate("/user/signin")}>{t(`header.login`)}</Button>
//                         <Button className="text-white cursor-pointer"
//                              onClick={() => navigate("/user/register")}>{t(`header.register`)}</Button>
//                         <div ref={languageRef} className="text-white cursor-pointer"
//                              onClick={() => setLanguageMenuOpen(prev => !prev)}>
//                             {t(`header.language`)}
//                             {isLanguageMenuOpen && (
//                                 <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg">
//                                     <Button className="cursor-pointer"
//                                         onClick={() => changeLanguage("ko")}>한국어
//                                     </Button>
//                                     <li className="cursor-pointer"
//                                         onClick={() => changeLanguage("en")}>English
//                                     </li>
//                                 </ul>
//                             )}
//                         </div>
//                         <div className="text-white cursor-pointer">{t(`header.help`)}</div>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     )
// }

export default function SecondPage() {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const dialogTriggerRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(''); // Adjusted default image path
    const fileInputRef = useRef(null);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files === null) return;
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault()
            setIsMenuActive(!isMenuActive)
           if (dialogTriggerRef.current) {
    (dialogTriggerRef.current as HTMLButtonElement).click()
}
        }
    }

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            (fileInputRef.current as HTMLInputElement).click();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuActive]);

    return (
        <Dialog>
            <div className="px-5 space-y-4">
                <div className="grid grid-cols-[250px_auto] gap-3">
                    <div className="col-span-3 col-start-2 flex flex-row justify-between">
                        <div className="flex flex-row space-x-2">
                            <InputBox
                                className="rounded h-full"
                                type="text"
                            />
                            <DialogTrigger asChild ref={dialogTriggerRef}>
                                <Button variant="outline" className=" h-full">
                                    메뉴 검색
                                </Button>
                            </DialogTrigger>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex flex-row justify-center items-center space-x-1"
                                        variant="outline"><HiOutlineGlobeAlt fontSize={20}/>
                                    <p>언어</p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>영어</DropdownMenuLabel>
                                    <DropdownMenuLabel>한국어</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="col-span-1 flex-col space-y-3 ">
                        <div className="w-full flex border grow h-72 items-center justify-center">
                            <div className="w-full h-full relative flex justify-center items-center">
                                {imageSrc === '' ? (
                                    <img src={profilePic} alt="Image" style={{width: '50%'}}/>
                                ) : (
                                    <img src={imageSrc} alt="Image" />
                                )}
                            </div>
                        </div>

                        <input
                            ref={fileInputRef}
                            id="file-upload" type="file" accept="image/*" onChange={handleFileChange}
                            style={{display: 'none'}}/>
                        <Button className="w-full" onClick={handleFileInputClick}>
                            찾기
                        </Button>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-80 border p-5 flex justify-center"><MonthlySignUpChart/></div>
                            <div className="flex h-80 border p-5 justify-center"><RegionPieChart/></div>
                            <div className="h-80 border p-5 flex justify-center"><MonthlySignUpLineChart/></div>
                            <div className="h-80 border p-5 flex justify-center"><RegionRadarChart/></div>
                        </div>
                    </div>
                </div>
                <ImageSlider/>
                <div className="p-5 border bg-gray-50">
                    {/*<Accordion lng={lng}/>*/}
                </div>
            </div>
            <DialogContent>
                <DialogHeader>
                    메뉴 팝업
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
