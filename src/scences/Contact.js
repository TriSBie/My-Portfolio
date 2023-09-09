import React from 'react'
import { useForm } from "react-hook-form"
const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit() = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section
            i
        >

        </section>
    )
}

export default Contact