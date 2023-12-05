import {cn} from "../../lib/utils";

export default function SelectBox({className, children, ...props}: {className?: string, children?: React.ReactNode}) {
    return (
        <select
            className={cn(
                "w-full flex flex-row items-center px-1 bg-gray-50 border-2 h-7 text-sm pb-1",
                className
            )}
            {...props}
        >
            {children}
        </select>
    )
}