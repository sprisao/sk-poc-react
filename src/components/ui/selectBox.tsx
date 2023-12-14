import {cn} from "../../lib/utils";
import React, {ChangeEvent} from "react";

interface InputBoxProps {
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export default function SelectBox({className, children, disabled}: InputBoxProps) {
    return (
        <select
            className={cn(
                "w-full flex flex-row items-center px-1 bg-gray-50 border-2 h-7 text-sm pb-1",
                disabled ? "bg-gray-300" : "bg-pink-50",
                className
            )}
            disabled={disabled}
        >
            {children}
        </select>
    )
}