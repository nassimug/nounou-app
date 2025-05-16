"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Info, Baby } from "lucide-react"

export default function AddChildPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [childData, setChildData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    allergies: "",
    specialNeeds: false,
    specialNeedsDetails: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // En situation réelle, envoyer les données au serveur
      // Ici, on simule une redirection après l'ajout
      router.push("/family/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push("/family/dashboard")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setChildData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setChildData((prev) => ({ ...prev, specialNeeds: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setChildData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="container mx-auto min-h-[calc(100vh-16rem)] p-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour au tableau de bord
        </Link>

        <Card className="border-[#FFDEE9]">
          <CardHeader className="bg-[#FFDEE9]/20">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-[#6A5ACD]">
              <Baby className="h-6 w-6" />
              Ajouter un enfant
            </CardTitle>
            <CardDescription>
              Renseignez les informations de votre enfant pour faciliter la prise en charge
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex justify-between">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                      step === i
                        ? "bg-[#6A5ACD] text-white"
                        : step > i
                          ? "bg-[#FFDEE9] text-[#6A5ACD]"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 transform bg-gray-200"></div>
                <div
                  className="absolute left-0 top-1/2 h-1 -translate-y-1/2 transform bg-[#FFDEE9]"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#6A5ACD]">Informations de base</h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-[#6A5ACD]">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={childData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#6A5ACD]">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={childData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="birthDate" className="text-[#6A5ACD]">
                      Date de naissance *
                    </Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={childData.birthDate}
                      onChange={handleChange}
                      required
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>

                  <div>
                    <Label className="text-[#6A5ACD]">Genre *</Label>
                    <RadioGroup
                      defaultValue={childData.gender}
                      onValueChange={(value) => handleSelectChange("gender", value)}
                      className="mt-2 flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="F" id="gender-f" className="border-[#FFDEE9] text-[#6A5ACD]" />
                        <Label htmlFor="gender-f" className="font-normal">
                          Fille
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="M" id="gender-m" className="border-[#C7E9FB] text-[#6A5ACD]" />
                        <Label htmlFor="gender-m" className="font-normal">
                          Garçon
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#6A5ACD]">Informations médicales</h3>

                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <p className="text-sm text-blue-700">
                          Ces informations permettront à l'assistante maternelle de mieux prendre soin de votre enfant
                          et de répondre à ses besoins spécifiques.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="allergies" className="text-[#6A5ACD]">
                      Allergies et intolérances
                    </Label>
                    <Textarea
                      id="allergies"
                      name="allergies"
                      placeholder="Précisez toutes les allergies et intolérances alimentaires ou autres..."
                      value={childData.allergies}
                      onChange={handleChange}
                      className="mt-1 min-h-24 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="special-needs" className="text-[#6A5ACD]">
                        Besoins spécifiques
                      </Label>
                      <Switch
                        id="special-needs"
                        checked={childData.specialNeeds}
                        onCheckedChange={handleSwitchChange}
                      />
                    </div>
                    {childData.specialNeeds && (
                      <Textarea
                        id="specialNeedsDetails"
                        name="specialNeedsDetails"
                        placeholder="Précisez les besoins spécifiques de votre enfant..."
                        value={childData.specialNeedsDetails}
                        onChange={handleChange}
                        className="mt-1 min-h-24 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      />
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#6A5ACD]">Récapitulatif</h3>

                  <div className="rounded-lg bg-[#FFDEE9]/20 p-4">
                    <h4 className="mb-2 font-medium text-[#6A5ACD]">Informations de base</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Prénom:</span>
                        <span>{childData.firstName}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Nom:</span>
                        <span>{childData.lastName}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Date de naissance:</span>
                        <span>{childData.birthDate}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Genre:</span>
                        <span>{childData.gender === "F" ? "Fille" : "Garçon"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#C7E9FB]/20 p-4">
                    <h4 className="mb-2 font-medium text-[#6A5ACD]">Informations médicales</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Allergies:</span>
                        <span>{childData.allergies || "Aucune"}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium text-gray-600">Besoins spécifiques:</span>
                        <span>
                          {childData.specialNeeds ? "Oui" : "Non"}
                          {childData.specialNeeds && (
                            <>
                              <br />
                              <span className="text-xs">{childData.specialNeedsDetails}</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="rounded-lg bg-yellow-50 p-3 text-sm text-yellow-700">
                    Veuillez vérifier que les informations sont correctes avant de finaliser l'ajout de votre enfant.
                  </p>
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="outline"
                  className="rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                >
                  {step === 1 ? "Annuler" : "Précédent"}
                </Button>
                <Button type="submit" className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                  {step < 3 ? "Suivant" : "Finaliser"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
