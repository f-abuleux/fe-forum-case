import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().email("Email format with @").required("Email is Required"),
    password: yup.string().required("Password is Required")
})

export const registerSchema = yup.object({
    email: yup.string().email("Email format with @").required("Email is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/^(?=.*[a-z])/, "Password must contain at least one lower case letter")
        .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
        .matches(/^(?=.*\d)/, "Password must contain at least one number"),
    username: yup.string().required("Username is required")
})