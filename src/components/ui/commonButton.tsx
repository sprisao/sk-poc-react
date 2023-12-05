import React from "react";
import { cn } from "../../lib/utils"

interface CommonButtonProps {
    className?: string;
    children: React.ReactNode;
    disable: boolean;
}

const CommonButton = (({className, children, disable}: CommonButtonProps) => {
        return (
            <button className={cn(`rounded-sm ${disable ? 'bg-gray-300' : 'bg-gray-500'} px-2 text-gray-100 text-sm py-0.5 shrink-0`, className)} disabled={disable}>
                {children}
            </button>
        )
    }
)

export default CommonButton;