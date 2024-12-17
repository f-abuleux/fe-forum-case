"use client"

import { createCookies } from "@/components/actions/createToken"
import { loginWithGoogle } from "@/components/libs/auth"
import { loginUser } from "@/components/libs/fetchdata"
import { loginSchema } from "@/components/schema/schema"
import { ThemeToggle } from "@/components/theme-toggle"
import { Ilogin } from "@/components/types/types"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { Lock, Mail } from "lucide-react"
import Link from "next/link"
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation"


export default function LoginPage() {
    // const router = useRouter()
    const router = useRouter()

    const fetchLogin = async (data: Ilogin, action: FormikHelpers<Ilogin>) => {
        const { result, ok } = await loginUser(data)
        try {
            if (result.status !== "ok") throw "DATA TIDAK OKE"
            console.log("OK", ok)
            createCookies("token", result.token)
            toast.success('Login successful!');
            router.push('/berando')
        } catch (error) {
            toast.error(result.status)
            console.log("PESAN : " + error)
        }
    }

    const handleGoogleLogin = async () => {
        const result = await loginWithGoogle();
        if (result.success) {
            toast.success('Login with Google successful!');
            console.log('User Info:', result.user);
            router.push('/berando')
        } else {
            toast.error(result.message);
        }
    };

    const initialValues = {
        email: "",
        password: ""
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
            <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-2xl p-8">
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Masuk</h1>
                        <ThemeToggle />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Masuk ke akun forum Anda</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                        onSubmit={(values, action) => {
                            console.log(values)
                            fetchLogin(values, action)
                            action.resetForm()
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                                            placeholder="nama@example.com"
                                            type="email" name="email"
                                        />
                                        <ErrorMessage name="email" component={'div'} className="absolute text-[12px]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field name="password" type="password" className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300" />
                                        <ErrorMessage name="password" component={'div'} className="absolute text-[12px]" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300"
                                >
                                    Masuk
                                </button>
                                <div className='border-[1px] w-full '></div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full p-2 flex items-center gap-2 justify-center border-[1px] text-black rounded-lg">
                                    <span><FaGoogle/></span>
                                    <p>Login with Google</p>
                                </button>
                            </Form>

                        )}
                    </Formik>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Belum punya akun?{' '}
                        <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                            Daftar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}