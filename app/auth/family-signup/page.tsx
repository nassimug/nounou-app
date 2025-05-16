"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, User, Mail, Lock, Phone, MapPin, Check } from "lucide-react"

export default function FamilySignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une inscription réussie
    alert("Inscription réussie ! Vous allez être redirigé vers la page de connexion.")
    // Redirection vers la page de connexion
    window.location.href = "/auth/family-login"
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center text-sm text-[#6A5ACD] hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <Card className="border-[#FFDEE9]">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#FFDEE9]">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-full w-full"
                >
                  <circle cx="50" cy="50" r="45" fill="#FFDEE9" />
                  <path d="M30 65C40 80 60 80 70 65" stroke="#6A5ACD" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="35" cy="40" r="5" fill="#6A5ACD" />
                  <circle cx="65" cy="40" r="5" fill="#6A5ACD" />
                </svg>
              </div>
            </div>
            <CardTitle className="text-center text-2xl text-[#6A5ACD]">Inscription Famille</CardTitle>
            <CardDescription className="text-center">
              Créez votre compte famille pour trouver une assistante maternelle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 transform bg-gray-200"></div>
                <div className="relative flex justify-between">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step >= 1 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step > 1 ? <Check className="h-4 w-4" /> : "1"}
                  </div>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step >= 2 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step > 2 ? <Check className="h-4 w-4" /> : "2"}
                  </div>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step >= 3 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {step > 3 ? <Check className="h-4 w-4" /> : "3"}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs">
                <span className={step >= 1 ? "text-[#6A5ACD]" : "text-gray-400"}>Compte</span>
                <span className={step >= 2 ? "text-[#6A5ACD]" : "text-gray-400"}>Coordonnées</span>
                <span className={step >= 3 ? "text-[#6A5ACD]" : "text-gray-400"}>Confirmation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#6A5ACD]">
                        Prénom
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#6A5ACD]">
                        Nom
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#6A5ACD]">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-[#6A5ACD]">
                      Mot de passe
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-[#6A5ACD]">
                      Confirmer le mot de passe
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#6A5ACD]">
                      Téléphone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-[#6A5ACD]">
                      Adresse
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="15 rue des Lilas"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-[#6A5ACD]">
                        Ville
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="Lyon"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-[#6A5ACD]">
                        Code postal
                      </Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="69000"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="rounded-lg bg-[#FFDEE9]/10 p-4">
                    <h3 className="mb-2 font-medium text-[#6A5ACD]">Récapitulatif de vos informations</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Nom complet:</span> {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span> {formData.email}
                      </p>
                      <p>
                        <span className="font-medium">Téléphone:</span> {formData.phone}
                      </p>
                      <p>
                        <span className="font-medium">Adresse:</span> {formData.address}, {formData.zipCode}{" "}
                        {formData.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#6A5ACD] focus:ring-[#6A5ACD]"
                      required
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                      J'accepte les{" "}
                      <Link href="/terms" className="text-[#6A5ACD] hover:underline">
                        conditions d'utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link href="/privacy" className="text-[#6A5ACD] hover:underline">
                        politique de confidentialité
                      </Link>
                    </label>
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Précédent
                  </Button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                    disabled={!formData.acceptTerms}
                  >
                    Créer mon compte
                    <Check className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm">
              Vous avez déjà un compte ?{" "}
              <Link href="/auth/family-login" className="text-[#6A5ACD] hover:underline">
                Connectez-vous
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
