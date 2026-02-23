"use client"
import { usePathname } from "next/navigation"

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
            test1
        </>
    )
}

export function FixedFooter() {
    return (

        <>
            test2
        </>
    )
}