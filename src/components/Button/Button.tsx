import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    color: string;
}

export default function Button({children, color, ...props}: ButtonType) {
    return (
        <button
            className={`button button--${color}`}
            {...props}
        >
            {children}
        </button>
    );
}