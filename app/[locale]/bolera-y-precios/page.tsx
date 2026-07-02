"use client"

import { Navbar1 } from "@/components/bolera/Navbar1"
import { Header60 } from "@/components/bolera/Header60"
import { Pricing15 } from "@/components/bolera/Pricing15"
import nextDynamic from "next/dynamic"
const Layout514 = nextDynamic(() => import("@/components/bolera/Layout514").then(m => ({ default: m.Layout514 })), { ssr: false })
import { Gallery9 } from "@/components/bolera/Gallery9"
import { Testimonial6 } from "@/components/bolera/Testimonial6"
import { Faq } from "@/components/bolera/Faq"
import { Footer5 } from "@/components/bolera/Footer5"

export default function BoleraYPrecios() {
  return (
    <main>
      <Navbar1 />
      <Header60 />
      <Pricing15 />
      <Layout514 />
      <Gallery9 />
      <Testimonial6 />
      <Faq />
      <Footer5 />
    </main>
  )
}
