"use client"
import { useActionState } from "react"
import { loginUser } from "./action"

const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}
export default function LoginForm() {


    const [state, formAction, isPending] = useActionState(loginUser, initialState)
    return (

        <form action={formAction} noValidate>
            <div className="columns">
                <input className="login__input" type="text" name="username" placeholder="Brugernavn" defaultValue={state.values.username} />
                {state.errors?.email && <p>{state.errors.email}</p>}
            </div>
            <div className="columns">
                <input className="login__input" type="password" name="password" placeholder="Adgangskode" defaultValue={state.values.password} />
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>
            {state.errors?.form && <p>{state.errors.form}</p>}
            <button className="login__button" type="submit" disabled={isPending}>{isPending ? "Logger ind..." : "Log ind"}</button>
        </form>
    )
}