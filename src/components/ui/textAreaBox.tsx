import { cn } from "../../lib/utils"

export default function TextAreaBox({className}: {className?: string}) {
    return (
        <textarea
            className={cn(
                "w-full flex flex-row px-2 py-1 bg-gray-50 border-2 h-6 pb-[5px] text-left align-top ",
                className
            )}
        />
    )
}