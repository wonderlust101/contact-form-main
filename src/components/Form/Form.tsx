import { FormEventHandler, ReactNode } from "react";
import "./Form.scss";

type FormType = {
    children: ReactNode;
    onSubmit:  FormEventHandler<HTMLFormElement>;
}

export default function Form({children, onSubmit}: FormType) {
    return (
        <form className="form" onSubmit={onSubmit}>
            {children}
        </form>
    );
}