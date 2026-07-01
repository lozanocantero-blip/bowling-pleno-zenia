"use client"

import { Navbar1 } from "@/components/shared/Navbar1"
import { LegalArticle } from "@/components/legal/LegalArticle"
import { Footer5 } from "@/components/shared/Footer5"

export default function Page() {
  return (
    <main>
      <Navbar1 />
      <LegalArticle docKey="cookies" />
      <Footer5 />
    </main>
  )
}
