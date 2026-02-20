import Image from "next/image";
import Hero from "@/app/components/Hero/hero"
import Link from "next/link";
import Groups from "@/app/components/Groups/groups";
import Testimonials from "@/app/components/Testimonials/Testimonials";

export default function Home() {
  return (
      <main className="">
        <Hero/>
        <Link className="login__button"href="/login">Login</Link>
        <Groups/>
        <Testimonials/>
      </main>
  );
}
