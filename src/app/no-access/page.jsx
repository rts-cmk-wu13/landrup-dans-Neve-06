import Link from "next/link"

export default function NoAccessPage() {
    return (
        <main>
            <div className="no-columns notfound">
            <h1>Ingen Adgang!</h1>
            <p>Du skal logge ind!</p>
            <Link href="/login">
            <button className="login__button">
            Tilbage til Login siden
            </button>
            </Link>
            </div>
        </main>
    )
}