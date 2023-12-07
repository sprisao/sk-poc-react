import {Button} from "./button";
import {HiChartPie, HiMiniTableCells} from "react-icons/hi2";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex flex-row justify-end mx-4 pt-3">
            <ul className="flex gap-2">
                <li>
                    <Link to="/"
                          className=" hover:underline">
                        <Button variant="outline" className="flex flex-row justify-center items-center space-x-1">
                            <HiMiniTableCells fontSize={20}/>
                            <p>
                                첫번째 화면
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
                                두번째 화면
                            </p>
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
