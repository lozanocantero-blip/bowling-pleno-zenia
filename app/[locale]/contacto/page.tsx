"use client"

export const dynamic = 'force-dynamic'
import { Navbar1 } from "@/components/shared/Navbar1"
import { ContactForm } from "@/components/shared/ContactForm"
import { Footer5 } from "@/components/shared/Footer5"

export default function Contacto() {
  return (
    <main>
      <Navbar1 />
      <ContactForm />
      <Footer5 />
    </main>
  )
}
