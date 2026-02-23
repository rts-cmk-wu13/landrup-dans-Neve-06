"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Footer() {
    const pathname = usePathname()

    if (pathname === "/") return <HomeFooter />

    return (
        <>
            <FixedFooter />
        </>
    )
}

export function HomeFooter() {
    return (
        <>
            <footer>
                <figure className="logo">
                    <Image src="/logo.svg" width={75} height={25} alt="logo"></Image>
                </figure>
                <figure className="logo">
                    <Image src="/title.svg" width={250} height={100} alt="logo__title"></Image>
                </figure>
            </footer>
        </>
    )
}

export function FixedFooter() {
    return (

        <>
            <footer className="fixed__footer">
                <ul>
                    <li><Link href="/"></Link></li>
                    <li><Link href="/activities"></Link></li>
                    <li><Link href="/profile"></Link></li>
                </ul>
            </footer>
        </>
    )
}