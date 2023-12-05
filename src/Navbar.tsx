// src/Navbar.tsx
import { Link } from "react-router-dom";
import { HiChartPie } from "react-icons/hi2";
import {HiMiniTableCells} from "react-icons/hi2";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-end mx-4 pb-3">
            <ul className="flex gap-2">
                <li>
                    <Link to="/" className="hover:underline">
                        <button className="flex flex-row justify-center items-center space-x-1 border border-gray-300 rounded px-2 py-1">
                            <HiMiniTableCells fontSize={20}/>
                            <p>첫번째 화면</p>
                        </button>
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link to="/about" className="hover:underline">
                        <button className="flex flex-row justify-center items-center space-x-1 border border-gray-300 rounded px-2 py-1">
                            <HiChartPie fontSize={20}/>
                            <p>두번째 화면</p>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}