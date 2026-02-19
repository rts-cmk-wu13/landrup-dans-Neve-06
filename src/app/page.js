import Image from "next/image";
import Hero from "@/app/components/Hero/hero"
import Link from "next/link";

export default function Home() {
  return (
    <div className="root">
      <main className="">
        <Hero/>
        <Link className="login__button"href="/login">Login</Link>
      </main>
    </div>
  );
}
