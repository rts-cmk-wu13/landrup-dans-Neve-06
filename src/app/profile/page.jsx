import Image from "next/image"
import Link from "next/link"

export default function Profilepage() {

    return (
        <>
                <main>
                    <section className="profile__info full-width">
                        <figure className="logo no-columns">
                        <Image src="/profile.svg" width={100} height={100} alt="profile__image"></Image>
                        </figure>
                        <h1 className="no-columns logo">Velkommen, [Brugernavn]!</h1>
                    </section>
                </main>
        </>
    )
}