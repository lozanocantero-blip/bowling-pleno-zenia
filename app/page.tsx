"use client"

export const dynamic = 'force-dynamic'
import { Navbar1 } from "@/components/inicio/Navbar1"
import { Header83 } from "@/components/inicio/Header83"
import { Layout370 } from "@/components/inicio/Layout370"
import { Timeline19 } from "@/components/inicio/Timeline19"
import { Testimonial17 } from "@/components/inicio/Testimonial17"
import { Contact26 } from "@/components/inicio/Contact26"
import { Footer5 } from "@/components/inicio/Footer5"

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <Header83 />
      <Layout370 />
      <Timeline19 />
      <Testimonial17 />
      <Contact26 />
      <Footer5 />
    </main>
  )
}
