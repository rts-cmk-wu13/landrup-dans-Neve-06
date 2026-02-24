import Image from "next/image"


export default function Hero() {

    return (
        <>
        <div className="hero">
        <Image 
        src="/heroimg.jpg" 
        width={330}
        height={300}
        // fill="background-color"
        alt="hero">
        </Image>
        </div>
        </>
    )
}