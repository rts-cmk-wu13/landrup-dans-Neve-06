import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers";
import { getUsersById, getAllActivities } from "../lib/dal";

export default async function Profilepage() {
    const cookieStore = await cookies()
    const userId = cookieStore.get('username')
    const user = await getUsersById(userId.value)
    const activities = await getAllActivities()

    console.log(user);
    
    return (
        <>
            <main>
                <section className="profile__info full-width">
                    <figure className="logo no-columns">
                        <Image src="/profile.svg" width={100} height={100} alt="profile__image"></Image>
                    </figure>
                    <h1 className="no-columns logo">Velkommen</h1>
                    <p className="no-columns logo">{user.firstname} {user.lastname}</p>
                    <p className="no-columns logo">{user.role}</p>
                </section>
            </main>
        </>
    )
}