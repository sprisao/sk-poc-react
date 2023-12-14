import { cn } from "../../lib/utils"

interface TextAreaBoxProps {
    className?: string;
    disabled: boolean;
}


export default function TextAreaBox({className, disabled}: TextAreaBoxProps ) {
    return (
        <textarea
            className={cn(
                "w-full flex flex-row px-2 py-1 border-2 h-6 pb-[5px] text-left align-top ",
                disabled ? "bg-gray-300" : "bg-white",
                className
            )}
            disabled={disabled}
        />
    )
}