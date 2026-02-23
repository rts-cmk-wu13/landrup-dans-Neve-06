"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiCircleList } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";



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
                <ul className="fixed__footer columns">
                    <li><Link href="/"><IoHome style={{color: "black"}}/></Link></li>
                    <li><Link href="/activities"><CiCircleList style={{color: "black"}}/></Link></li>
                    <li><Link href="/profile"><FaUserAlt style={{color: "black"}}/></Link></li>
                </ul>
        </>
    )
}