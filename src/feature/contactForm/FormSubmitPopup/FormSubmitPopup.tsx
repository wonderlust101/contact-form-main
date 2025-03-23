import { motion } from "motion/react";
import checkmarkIcon from "/src/assets/images/icon-success-check.svg";
import "./FormSubmitPopup.scss";

const formSubmitPopupVariants = {
    initial: {
        y      : -200,
        opacity: 0
    },
    animate: {
        y         : 0,
        opacity   : 1,
        transition: {
            type    : "spring",
            bounce  : 0.5,
            duration: 1.25
        }
    },
    exit   : {
        y      : -200,
        opacity: 0,
        transition: {
            duration: 0.15,
            ease: "easeIn",
        }
    }
};

export default function FormSubmitPopup() {
    return (
        <motion.div
            className="form-submit-popup"
            variants={formSubmitPopupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="form-submit-popup__header">
                <img src={checkmarkIcon} alt="" role="presentation"/>
                <p>Message Sent!</p>
            </div>

            <p>Thanks for completing the form. We’ll be in touch soon!</p>
        </motion.div>
    );
}