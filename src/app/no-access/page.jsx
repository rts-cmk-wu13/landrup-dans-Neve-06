import Link from "next/link"

export default function NoAccessPage() {
    return (
        <main>
            <div className="no-columns">
            <h1>Ingen Adgang!</h1>
            <p>Du skal logge ind!</p>
            <Link href="/login">Tilbage til Login siden</Link>
            </div>
        </main>
    )
}