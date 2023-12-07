import {Button} from "./button";
import {HiChartPie, HiMiniTableCells} from "react-icons/hi2";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function NavBar() {
    const {t} = useTranslation();
    return (
        <nav className="flex flex-row justify-end mx-4 pt-3">
            <ul className="flex gap-2">
                <li>
                    <Link to="/"
                          className=" hover:underline">
                        <Button variant="outline" className="flex flex-row justify-center items-center space-x-1">
                            <HiMiniTableCells fontSize={20}/>
                            <p>
                                {t(`firstScreen`)}
                            </p>
                        </Button>
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link to="/second"
                          className=" hover:underline">
                        <Button variant="outline" className="flex flex-row justify-center items-center space-x-1">
                            <HiChartPie fontSize={20}/>
                            <p>
                                {t(`secondScreen`)}
                            </p>
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
