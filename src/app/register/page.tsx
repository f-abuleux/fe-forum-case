'use client'

import Link from 'next/link'
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Mail, Lock } from 'lucide-react'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { registerSchema } from '@/components/schema/schema'
import { IRegister } from '@/components/types/types'
import { registerUser } from '@/components/libs/fetchdata'
import { toast } from 'react-toastify'

import { FaGoogle } from 'react-icons/fa'
import { loginWithGoogle } from '@/components/libs/auth'
import { useRouter } from 'next/navigation'



export default function RegisterPage() {
    const router = useRouter()

    const fetchDataRegister = async (data: IRegister, action: FormikHelpers<IRegister>) => {
        const { result, ok } = await registerUser(data)
        try {
            if (result.status != "ok") throw new Error(result.status)
            console.log(ok)
            console.log("Result : ", result)
            toast.success(result.status)
            // router.push("/beranda")
        } catch (error) {
            toast.error(result.status)
            console.log("PESAN :", error)
        }
    }

    const handleGoogleLogin = async () => {
            const result = await loginWithGoogle();
            if (result.success) {
                toast.success('Login with Google successful!');
                console.log('User Info:', result.user);
                // router.push("/berando")
            } else {
                toast.error(result.message);
            }
        };

    const initialValues = {
        email: "",
        username: "",
        password: ""
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
            <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-2xl p-8">
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Daftar</h1>
                        <ThemeToggle />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Buat akun forum baru</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerSchema}
                        onSubmit={(values, action) => {
                            fetchDataRegister(values, action)
                            console.log(values)

                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-6">
                                <div className="space-y-2">
                                    <div className='relative'>
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field name="username" placeholder="Username" className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white transition-all duration-300" />
                                        <ErrorMessage name="username" component={'div'} className="absolute text-[12px]" />

                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='relative'>
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field name="email" placeholder="Email" className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white transition-all duration-300" />
                                        <ErrorMessage name="email" component={'div'} className="absolute text-[12px]" />

                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <div className='relative'>
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field name="password" type="password" className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white transition-all duration-300" placeholder="password" />
                                        <ErrorMessage name="password" component={'div'} className="absolute text-[12px]" />
                                    </div>
                                </div>
                                {/* <div className='space-y-2'>
                                    <div className='relative'>
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Field
                                    </div>
                                </div> */}
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300"
                                >
                                    Daftar
                                </button>
                                <span className='border-[1px] w-full'></span>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full p-2 flex items-center gap-2 justify-center border-[1px] text-black rounded-lg">
                                    <span><FaGoogle /></span>
                                    <p>Login with Google</p>
                                </button>
                            </Form>
                        )}
                    </Formik>

                    <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Sudah punya akun?{' '}
                        <Link href="/login" className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300">
                            Masuk
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

