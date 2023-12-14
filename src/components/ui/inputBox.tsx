import cn from 'classnames';
import { ChangeEvent } from 'react';

interface InputBoxProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export default function InputBox({className, type, placeholder, value, onChange, disabled, ...props}: InputBoxProps) {
    return (
        <input
            className={cn(
                "w-full flex flex-row px-2  border-2 h-7",
                                disabled ? "bg-gray-300" : "bg-white",
                className
            )}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...props}
        />
    );
}