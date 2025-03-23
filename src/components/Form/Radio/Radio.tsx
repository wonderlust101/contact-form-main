import { InputHTMLAttributes, ReactNode } from "react";
import "./Radio.scss";

type RadioType = {
    children: ReactNode;
    label: string;
    error?: string;
    required?: boolean;
}

type RadioItemType = InputHTMLAttributes<HTMLInputElement> & {
    children?: ReactNode;
    value: string;
    props?: InputHTMLAttributes<HTMLInputElement>
}

export default function Radio({children, label, error, required }: RadioType) {
    return (
        <div className="radio">
            <p>{label} <span className="text-input__required">{required ? "*" : ""}</span></p>

            <div className="radio__group">
                {children}
            </div>

            {error && <p className='text-input__error'>{error}</p>}
        </div>
    );
}

Radio.Item = function Radio({children, value, ...props}: RadioItemType) {
    return (
        <label htmlFor={props.name} className="radio__label">
            {children}
            <input
                id={props.name}
                className="radio__input"
                type="radio"
                value={value}
                {...props}
            />
        </label>
    );
};