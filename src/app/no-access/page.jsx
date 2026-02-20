import Link from "next/link"

export default function NoAccessPage() {
    return (
        <main>
            <div className="no-columns">
            <h1>No Access</h1>
            <p>You have to log in!</p>
            <Link href="/login">Go to Login Page</Link>
            </div>
        </main>
    )
}