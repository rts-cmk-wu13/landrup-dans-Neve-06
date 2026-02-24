import Link from "next/link"

export default function NotFound() {

    return (
        <main>
            <section className="columns notfound">

                <h1>Hov! Hvad laver du her?</h1>
                <p>Denne side findes ikke</p>
                <Link href="/">
                    <button className="login__button">
                        Tilbage til forsiden
                    </button>
                </Link>
            </section>
        </main>
    )
}