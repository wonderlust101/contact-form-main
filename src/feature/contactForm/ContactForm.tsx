import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";

import TextInput from "@/components/Form/TextInput";
import TextArea from "@/components/Form/TextArea";
import Button from "@/components/Button";
import Checkbox from "@/components/Form/Checkbox";
import Radio from "@/components/Form/Radio";
import Form from "@/components/Form";
import FormSubmitPopup from "@/feature/contactForm/FormSubmitPopup";

import "./ContactForm.scss";

const queryType: string[] = ["General Enquiry", "Support Request"];

const ContactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName : z.string().min(1, "Last name is required"),
    email    : z.string().email("Please enter a valid email address"),
    queryType: z.string().min(1, "Please select a query type"),
    message  : z.string().min(1, "Message is required"),
    consent  : z.literal("Consented", {
        errorMap: () => ({message: "To submit this form, please consent to being contacted"})
    })
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
    const [showPopup, setShowPopup] = useState<Boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            queryType: "",
        }
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Data read:", data);

        setShowPopup(true);
        reset();

        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    return (
        <main className="contact-form">
            <div className="contact-form__form">
                <h1>Contact Us</h1>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-form__form-row">
                        <TextInput label="First Name" error={errors.firstName?.message} required {...register("firstName")}/>
                        <TextInput label="Last Name" error={errors.lastName?.message} required {...register("lastName")}/>
                    </div>

                    <TextInput label="Email Address" error={errors.email?.message} required {...register("email")}/>

                    <Radio label="Query Type" error={errors.queryType?.message} required>
                        {queryType.map((item) => (
                            <Radio.Item key={item} {...register("queryType")} name="queryType" value={item}>{item}</Radio.Item>
                        ))}
                    </Radio>

                    <TextArea label="Message" error={errors.message?.message} required {...register("message")}/>

                    <Checkbox
                        id='consent'
                        value="Consented"
                        label="I consent to being contacted by the team"
                        error={errors.consent?.message}
                        required
                        {...register("consent")}
                    />

                    <Button type="submit" color="green">
                        Submit
                    </Button>
                </Form>
            </div>

            <AnimatePresence>
                {showPopup && <FormSubmitPopup />}
            </AnimatePresence>
        </main>
    );
}