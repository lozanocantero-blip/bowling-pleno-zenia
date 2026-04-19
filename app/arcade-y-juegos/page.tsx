"use client"

export const dynamic = 'force-dynamic'
import { Navbar1 } from "@/components/arcade/Navbar1"
import { Header60 } from "@/components/arcade/Header60"
import dynamic from "next/dynamic"
const Layout513 = dynamic(() => import("@/components/arcade/Layout513").then(m => ({ default: m.Layout513 })), { ssr: false })
import { Layout384 } from "@/components/arcade/Layout384"
import { Cta51 } from "@/components/arcade/Cta51"
import { Footer5 } from "@/components/arcade/Footer5"

export default function ArcadeYJuegos() {
  return (
    <main>
      <Navbar1 />
      <Header60 />
      <Layout513 />
      <Layout384 />
      <Cta51 />
      <Footer5 />
    </main>
  )
}
