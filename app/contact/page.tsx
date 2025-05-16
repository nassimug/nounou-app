"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Send, Phone, Mail, MapPin, Building, Check } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    requestType: "information",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à l'accueil
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Contactez-nous</h1>
          <p className="mb-6 text-gray-600">
            Vous êtes un Relais d'Assistantes Maternelles (RAM) ou un Relais Petite Enfance (RPE) et vous souhaitez
            rejoindre notre plateforme ? Contactez-nous pour obtenir plus d'informations ou pour demander la création
            d'un compte administrateur.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D1F2EB]">
                <Phone className="h-5 w-5 text-[#6A5ACD]" />
              </div>
              <div>
                <h3 className="font-medium text-[#6A5ACD]">Téléphone</h3>
                <p className="text-gray-600">01 23 45 67 89</p>
                <p className="text-sm text-gray-500">Du lundi au vendredi, 9h-18h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                <Mail className="h-5 w-5 text-[#6A5ACD]" />
              </div>
              <div>
                <h3 className="font-medium text-[#6A5ACD]">Email</h3>
                <p className="text-gray-600">contact@nounouconnect.fr</p>
                <p className="text-sm text-gray-500">Nous répondons sous 24-48h</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7E9FB]">
                <MapPin className="h-5 w-5 text-[#6A5ACD]" />
              </div>
              <div>
                <h3 className="font-medium text-[#6A5ACD]">Adresse</h3>
                <p className="text-gray-600">15 rue de la République, 69002 Lyon</p>
                <p className="text-sm text-gray-500">Siège social</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D1F2EB]">
                <Building className="h-5 w-5 text-[#6A5ACD]" />
              </div>
              <div>
                <h3 className="font-medium text-[#6A5ACD]">À propos de nous</h3>
                <p className="text-gray-600">
                  NounouConnect est une plateforme dédiée à faciliter la relation entre les familles, les assistantes
                  maternelles et les RAM-RAP.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#FFDEE9]/10 p-4">
            <h3 className="mb-2 font-medium text-[#6A5ACD]">Vous êtes une famille ou une assistante maternelle ?</h3>
            <p className="mb-4 text-sm text-gray-600">
              Si vous êtes une famille ou une assistante maternelle, vous pouvez vous inscrire directement sur notre
              plateforme.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/auth/family-signup">
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20 sm:w-auto"
                >
                  Inscription Famille
                </Button>
              </Link>
              <Link href="/auth/nounou-signup">
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20 sm:w-auto"
                >
                  Inscription Assistante Maternelle
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          {isSubmitted ? (
            <Card className="border-[#D1F2EB]">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1F2EB]">
                  <Check className="h-8 w-8 text-[#6A5ACD]" />
                </div>
                <h2 className="mb-2 text-2xl font-bold text-[#6A5ACD]">Message envoyé !</h2>
                <p className="mb-6 text-gray-600">
                  Merci de nous avoir contactés. Nous avons bien reçu votre message et nous vous répondrons dans les
                  meilleurs délais.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                >
                  Envoyer un autre message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-[#D1F2EB]">
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Formulaire de contact</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour nous contacter. Nous vous répondrons dans les meilleurs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#6A5ACD]">
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#6A5ACD]">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#6A5ACD]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#6A5ACD]">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-[#6A5ACD]">
                      Organisation (RAM/RPE)
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requestType" className="text-[#6A5ACD]">
                      Type de demande
                    </Label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#D1F2EB] p-2 focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]"
                      required
                    >
                      <option value="information">Demande d'information</option>
                      <option value="account">Création de compte RAM-RAP</option>
                      <option value="support">Support technique</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#6A5ACD]">
                      Sujet
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#6A5ACD]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-32 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                      placeholder="Détaillez votre demande..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
