import "./TextArea.scss";
import { InputHTMLAttributes } from "react";

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>&{
    label: string;
    required?: boolean;
    error?: string;
    props?: InputHTMLAttributes<HTMLTextAreaElement>;
}

export default function TextArea({label, required, error, ...props}: TextAreaProps) {
    return (
        <div className="text-area">
            <label htmlFor={props.name} className="text-area__label">
                {label} <span className="text-area__required">{required ? "*" : ""}</span>
            </label>

            <textarea
                id={props.name}
                className={`text-area__input ${!error || "text-area__input--error"}`}
                rows={4}
                {...props}
            />

            {error && <p className="text-input__error">{error}</p>}
        </div>
    );
}