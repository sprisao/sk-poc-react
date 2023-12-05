interface ResultContainerProps {
    content: string;
}

export default function ResultContainer({content}: ResultContainerProps) {
    return (
        <div className="flex items-center justify-center w-full border h-6 overflow-hidden">
            <p className="text-center text-xs whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                {content != null ? content : ""}
            </p>
        </div>

    )
}