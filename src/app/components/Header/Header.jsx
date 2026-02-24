"use client"
import { usePathname } from "next/navigation"

export default function Header() {

    const pathname = usePathname()
    
    if (pathname === "/profile") return <ProfileHeader/>

    return (
        <>
        
        </>
    )
}

export function ProfileHeader() {
    return (
        <>
            <header className="full-width">
                <h1 className="">Profil</h1>
            </header>
        </>
    )
}