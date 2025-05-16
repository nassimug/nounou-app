"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NounouLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une connexion réussie
    router.push("/nounou/dashboard")
  }

  return (
    <main className="container mx-auto min-h-[calc(100vh-16rem)] p-4">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-xl">
          <div className="bg-[#C7E9FB]/50 p-6 text-center">
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#C7E9FB]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6A5ACD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#6A5ACD]">Espace Nounou</h1>
            <p className="text-sm text-gray-600">Connectez-vous à votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <Label htmlFor="email" className="text-[#6A5ACD]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                required
                className="mt-1 rounded-xl border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="password" className="text-[#6A5ACD]">
                Mot de passe
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="mt-1 rounded-xl border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <Link
                href="/auth/reset-password"
                className="mt-1 block text-right text-xs text-[#6A5ACD] hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <Button type="submit" className="w-full rounded-xl bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              Se connecter
            </Button>

            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Pas encore de compte ? </span>
              <Link href="/auth/nounou-signup" className="text-[#6A5ACD] hover:underline">
                Créer un compte nounou
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
