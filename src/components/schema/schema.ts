import * as yup from "yup"

export const loginSchema = yup.object({
    email: yup.string().email("Email format with @").required("Email is Required"),
    password: yup.string().required("Password is Required")
})

export const registerSchema = yup.object({
    email : yup.string().email("Email format with @").required("Email is required"),
    password : yup.string().required("Password is required"),
    username : yup.string().required("Username is required")
})