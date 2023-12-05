import cn from 'classnames';
import { ChangeEvent } from 'react';

interface InputBoxProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    // add other props if needed
}

export default function InputBox({className, type, placeholder, value, onChange, ...props}: InputBoxProps) {
    return (
        <input
            className={cn(
                "w-full flex flex-row px-2 bg-gray-50 border-2 h-7",
                className
            )}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}