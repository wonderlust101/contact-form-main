import { InputHTMLAttributes } from "react";
import "./Checkbox.scss";

type CheckboxType = InputHTMLAttributes<HTMLInputElement>&{
    label: string;
    value: string;
    required?: boolean;
    error?: string;
    props?: InputHTMLAttributes<HTMLInputElement>;
}

export default function Checkbox({label, value, id, required, error, ...props}: CheckboxType) {
    return (
        <div className="checkbox">
            <div className="checkbox__container">
                <input
                    id={props.name}
                    className="checkbox__input"
                    type="checkbox"
                    value={value}
                    {...props}
                />

                <label htmlFor={props.name}>
                    {label} <span className="checkbox__required">{required ? "*" : ""}</span>
                </label>
            </div>

            <p className="checkbox__error">
                {error}
            </p>
        </div>
    );
}