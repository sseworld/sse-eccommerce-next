import React from "react"
import { getServerSession } from "next-auth/next"
import { Session } from "next-auth"
import { authOptions } from "@/libs/auth"
import { redirect } from "next/navigation"
import Signin from "@/components/account/Signin"

const Login = async () => {
    const session: Session | null = await getServerSession(authOptions)
    if(session) {
        redirect("/")
    } else {
        return (
            <Signin />
        )
    }
}

export default Login