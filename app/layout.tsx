import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NounouConnect - Connexion Familles et Assistantes Maternelles",
  description:
    "Plateforme de mise en relation entre familles et assistantes maternelles agréées en lien avec les structures RAM-RAP",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={quicksand.variable}>
      <body className="min-h-screen bg-[#faf9fe] font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
