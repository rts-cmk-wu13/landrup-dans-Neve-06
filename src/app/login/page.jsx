import LoginForm from "../components/Loginform/Loginform"
import Image from "next/image"

export default function Loginpage() {

    return (
        <>
            <main>
                <figure className="logo">
                    <Image src="/logo.svg" width={150} height={75} alt="logo"></Image>
                </figure>
                <figure className="logo">
                    <Image src="/title.svg" width={250} height={100} alt="logo__title"></Image>
                </figure>
                <h1 className="login__title">Log Ind</h1>
                <LoginForm />
            </main>
        </>
    )
}