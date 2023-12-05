import {useTranslation} from "react-i18next";
import { useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import i18n from "i18next";

import {Button} from "./components/ui/button";

export default function SecondPage() {
    const {t} = useTranslation();
    const languageRef = useRef<null | HTMLDivElement>(null);
    const navigate = useNavigate();
    const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguageMenuOpen(false);
    };

    return (
        <header className="bg-blue-500 p-4">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <nav className="flex space-x-4">
                        <Button className="text-white cursor-pointer"
                             onClick={() => navigate("/user/signin")}>{t(`header.login`)}</Button>
                        <Button className="text-white cursor-pointer"
                             onClick={() => navigate("/user/register")}>{t(`header.register`)}</Button>
                        <div ref={languageRef} className="text-white cursor-pointer"
                             onClick={() => setLanguageMenuOpen(prev => !prev)}>
                            {t(`header.language`)}
                            {isLanguageMenuOpen && (
                                <ul className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg">
                                    <Button className="cursor-pointer"
                                        onClick={() => changeLanguage("ko")}>한국어
                                    </Button>
                                    <li className="cursor-pointer"
                                        onClick={() => changeLanguage("en")}>English
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="text-white cursor-pointer">{t(`header.help`)}</div>
                    </nav>
                </div>
            </div>
        </header>
    )
}