import "./TextInput.scss";
import { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>&{
    label: string;
    required?: boolean;
    error?: string;
    props?: InputHTMLAttributes<HTMLInputElement>;
};

export default function TextInput({label, required, error, ...props}: TextInputProps) {
    return (
        <div className="text-input">
            <label htmlFor={props.name} className="text-input__label">
                {label} <span className="text-input__required">{required ? "*" : ""}</span>
            </label>

            <input
                id={props.name}
                className={`text-input__input ${!error || "text-input__input--error"}`}
                type="text"
                {...props}
            />

            {error && <p className="text-input__error">{error}</p>}
        </div>
    );
}