"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { loginSchema, LoginUserType } from "./schema"
import { InputField } from "@/components/inputField/InputField"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { loginUser } from "@/service/loginUser/loginUser"

export function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginUserType>({
        resolver: zodResolver(loginSchema)
    })

    const router = useRouter()
    const [formError, setFormError] = useState<string | null>(null)

    const handleForm = async (data: LoginUserType) => {
        setFormError(null)
        try {
            await loginUser(data)

            toast.success("Login realizado com sucesso! 🎉")
            router.replace("/dashboard")
        } catch (error: any) {
            if (error.response?.data?.error) {
                setFormError(error.response.data.error)
                toast.error(error.response.data.error)
            } else {
                setFormError("Falha no login. Verifique suas credenciais.")
                toast.error("Falha no login. Verifique suas credenciais.")
            }
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-2xl font-bold">Faça login</h1>
            <form
                onSubmit={handleSubmit(handleForm)}
                className="flex flex-col gap-6 max-w-sm w-full p-6 rounded-2xl shadow"
            >
                <InputField
                    type="email"
                    label="E-mail"
                    registration={register("email")}
                    error={errors.email}
                />

                <InputField
                    type="password"
                    label="Senha"
                    registration={register("password")}
                    error={errors.password}
                />

                {formError && (
                    <p className="text-red-500 text-sm font-medium">{formError}</p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
            cursor-pointer group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content-[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse
          "
                >
                    {isSubmitting ? "Entrando..." : "Entrar"}
                </button>
            </form>

            <div>
                <Link
                    href="/user/auth/register"
                    className="text-zinc-400 hover:text-teal-500 transition-colors font-semibold text-xl border-b-4 font-mono"
                >
                    Criar conta
                </Link>
            </div>
        </div>
    )
}
