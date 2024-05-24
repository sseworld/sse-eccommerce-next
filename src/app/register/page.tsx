import React from "react"
import { getServerSession } from "next-auth/next"
import { Session } from "next-auth"
import { authOptions } from "@/libs/auth"
import { redirect } from "next/navigation"
import Signup from "@/components/account/Signup"

const Login = async () => {
    const session: Session | null = await getServerSession(authOptions)
    if(session) {
        redirect("/")
    } else {
        return (
            <Signup />
        )
    }
}

export default Login