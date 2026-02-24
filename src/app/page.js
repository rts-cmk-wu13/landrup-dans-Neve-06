import Image from "next/image";
import Hero from "@/app/components/Hero/hero"
import Link from "next/link";
import Groups from "@/app/components/Groups/groups";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import { getTestimonials } from "./lib/dal";

export default async function Home() {
  const testimonials = await getTestimonials()
  return (
      <main>
        <Hero/>
        <Link className="login__button"href="/login">Login</Link>
        <Groups/>
        <Testimonials testimonials={testimonials}/>
      </main>
  );
}
