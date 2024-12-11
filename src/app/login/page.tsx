"use client"

import { createCookies } from "@/components/actions/createToken"
import { loginUser } from "@/components/libs/fetchdata"
import { loginSchema } from "@/components/schema/schema"
import { Ilogin } from "@/components/types/types"
import { Formik, FormikHelpers } from "formik"

export default function LoginPage() {

    const fetchLogin = async (data: Ilogin, action: FormikHelpers<Ilogin>) => {
        try {
            const { result, ok } = await loginUser(data)
            if (!ok) throw "DATA TIDAK OKE"
            createCookies("token", result.token)
        } catch (error) {
            console.log("PESAN : " + error)
        }
    }

    const initialValues = {
        email: "",
        password: ""
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, action) => {
                    console.log(values)
                    fetchLogin(values, action)
                }}
            >

            </Formik>
        </div>
    )
}