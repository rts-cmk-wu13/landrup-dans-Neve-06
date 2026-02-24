"use server"

import Link from "next/link"
import logoutAction from "./action"
import { cookies } from "next/headers"

export default async function LogoutButton() {
    const cookieStore = await cookies()
    const isUserLoggedIn = cookieStore.has("authToken")

    return (
        <form className="no-columns logo" action={logoutAction}>
            {
                isUserLoggedIn
                ? <button  type="submit">Logout</button>
                : <Link href="/login">Login</Link>
            }
        </form>
    )

}