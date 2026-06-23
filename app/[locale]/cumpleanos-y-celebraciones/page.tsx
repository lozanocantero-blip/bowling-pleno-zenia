"use client"

import { useEffect } from "react"
import { useRouter } from "@/i18n/navigation"

// Sección de cumpleaños desactivada temporalmente: redirige al inicio.
export default function CumpleanosYCelebraciones() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/")
  }, [router])
  return null
}
