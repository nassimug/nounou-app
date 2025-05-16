"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronLeft, ChevronRight, FileText, Save, Calendar, Clock, User } from "lucide-react"

export default function FamilyContractPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nounou: "",
    children: [],
    startDate: "",
    endDate: "",
    hourlyRate: "",
    hoursPerWeek: "",
    schedule: "",
    meals: false,
    mealPrice: "",
    vacationDays: "",
    paymentMethod: "virement",
    additionalTerms: "",
  })

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Contrat généré avec succès ! Vous pouvez maintenant le télécharger.")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Générer un contrat</h1>
        <p className="text-gray-600">Créez un contrat avec votre assistante maternelle</p>
      </div>

      <div className="mb-8 flex justify-between">
        <div className="flex w-full items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step >= 1 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            1
          </div>
          <div className={`h-1 w-full ${step >= 2 ? "bg-[#6A5ACD]" : "bg-gray-200"}`}></div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step >= 2 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            2
          </div>
          <div className={`h-1 w-full ${step >= 3 ? "bg-[#6A5ACD]" : "bg-gray-200"}`}></div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step >= 3 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            3
          </div>
          <div className={`h-1 w-full ${step >= 4 ? "bg-[#6A5ACD]" : "bg-gray-200"}`}></div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              step >= 4 ? "bg-[#6A5ACD] text-white" : "bg-gray-200 text-gray-500"
            }`}
          >
            4
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Informations de base</CardTitle>
              <CardDescription>Sélectionnez l'assistante maternelle et les enfants concernés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="nounou" className="text-[#6A5ACD]">
                  Assistante maternelle
                </Label>
                <div className="mt-1 flex items-center">
                  <User className="mr-2 h-4 w-4 text-gray-400" />
                  <Select value={formData.nounou} onValueChange={(value) => handleChange("nounou", value)}>
                    <SelectTrigger id="nounou" className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                      <SelectValue placeholder="Sélectionnez une assistante maternelle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marie-dupont">Marie Dupont</SelectItem>
                      <SelectItem value="isabelle-laurent">Isabelle Laurent</SelectItem>
                      <SelectItem value="sophie-moreau">Sophie Moreau</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-[#6A5ACD]">Enfants concernés</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="child-1"
                      checked={formData.children.includes("emma")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleChange("children", [...formData.children, "emma"])
                        } else {
                          handleChange(
                            "children",
                            formData.children.filter((child: string) => child !== "emma"),
                          )
                        }
                      }}
                    />
                    <div className="grid gap-1.5">
                      <Label
                        htmlFor="child-1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Emma Martin (3 ans)
                      </Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="child-2"
                      checked={formData.children.includes("lucas")}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleChange("children", [...formData.children, "lucas"])
                        } else {
                          handleChange(
                            "children",
                            formData.children.filter((child: string) => child !== "lucas"),
                          )
                        }
                      }}
                    />
                    <div className="grid gap-1.5">
                      <Label
                        htmlFor="child-2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Lucas Martin (1 an)
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="startDate" className="text-[#6A5ACD]">
                    Date de début
                  </Label>
                  <div className="mt-1 flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleChange("startDate", e.target.value)}
                      className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-[#6A5ACD]">
                    Date de fin (optionnel)
                  </Label>
                  <div className="mt-1 flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                      className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                      placeholder="Laissez vide pour un CDI"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Rémunération et horaires</CardTitle>
              <CardDescription>Définissez le tarif horaire et les horaires de garde</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="hourlyRate" className="text-[#6A5ACD]">
                    Tarif horaire (€)
                  </Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    step="0.01"
                    value={formData.hourlyRate}
                    onChange={(e) => handleChange("hourlyRate", e.target.value)}
                    className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Ex: 4.50"
                  />
                </div>
                <div>
                  <Label htmlFor="hoursPerWeek" className="text-[#6A5ACD]">
                    Heures par semaine
                  </Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    value={formData.hoursPerWeek}
                    onChange={(e) => handleChange("hoursPerWeek", e.target.value)}
                    className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Ex: 40"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="schedule" className="text-[#6A5ACD]">
                  Planning hebdomadaire
                </Label>
                <div className="mt-1 flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-gray-400" />
                  <Textarea
                    id="schedule"
                    value={formData.schedule}
                    onChange={(e) => handleChange("schedule", e.target.value)}
                    className="min-h-24 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Lundi: 8h-18h&#10;Mardi: 8h-18h&#10;Mercredi: 8h-18h&#10;Jeudi: 8h-18h&#10;Vendredi: 8h-18h"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="meals"
                  checked={formData.meals}
                  onCheckedChange={(checked) => handleChange("meals", checked)}
                />
                <div className="grid gap-1.5">
                  <Label
                    htmlFor="meals"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Repas fournis par l'assistante maternelle
                  </Label>
                </div>
              </div>

              {formData.meals && (
                <div>
                  <Label htmlFor="mealPrice" className="text-[#6A5ACD]">
                    Prix du repas (€)
                  </Label>
                  <Input
                    id="mealPrice"
                    type="number"
                    step="0.01"
                    value={formData.mealPrice}
                    onChange={(e) => handleChange("mealPrice", e.target.value)}
                    className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Ex: 5.00"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="vacationDays" className="text-[#6A5ACD]">
                  Jours de congés payés par an
                </Label>
                <Input
                  id="vacationDays"
                  type="number"
                  value={formData.vacationDays}
                  onChange={(e) => handleChange("vacationDays", e.target.value)}
                  className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                  placeholder="Ex: 25"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Modalités de paiement</CardTitle>
              <CardDescription>Définissez comment vous souhaitez effectuer le paiement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-[#6A5ACD]">Méthode de paiement</Label>
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleChange("paymentMethod", value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="virement" id="virement" />
                    <Label htmlFor="virement">Virement bancaire</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cheque" id="cheque" />
                    <Label htmlFor="cheque">Chèque</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cesu" id="cesu" />
                    <Label htmlFor="cesu">CESU</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="especes" id="especes" />
                    <Label htmlFor="especes">Espèces</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="additionalTerms" className="text-[#6A5ACD]">
                  Conditions supplémentaires (optionnel)
                </Label>
                <Textarea
                  id="additionalTerms"
                  value={formData.additionalTerms}
                  onChange={(e) => handleChange("additionalTerms", e.target.value)}
                  className="mt-1 min-h-32 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                  placeholder="Ajoutez ici toute condition particulière concernant le contrat..."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Récapitulatif et validation</CardTitle>
              <CardDescription>Vérifiez les informations du contrat avant de le générer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Informations de base</h3>
                <div className="grid gap-2 text-sm md:grid-cols-2">
                  <div>
                    <span className="font-medium">Assistante maternelle:</span>
                    <span className="ml-1">
                      {formData.nounou === "marie-dupont"
                        ? "Marie Dupont"
                        : formData.nounou === "isabelle-laurent"
                          ? "Isabelle Laurent"
                          : formData.nounou === "sophie-moreau"
                            ? "Sophie Moreau"
                            : "Non sélectionnée"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Enfants concernés:</span>
                    <span className="ml-1">
                      {formData.children.includes("emma") && "Emma Martin"}
                      {formData.children.includes("emma") && formData.children.includes("lucas") && ", "}
                      {formData.children.includes("lucas") && "Lucas Martin"}
                      {formData.children.length === 0 && "Aucun enfant sélectionné"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Date de début:</span>
                    <span className="ml-1">{formData.startDate || "Non définie"}</span>
                  </div>
                  <div>
                    <span className="font-medium">Date de fin:</span>
                    <span className="ml-1">{formData.endDate || "CDI"}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Rémunération et horaires</h3>
                <div className="grid gap-2 text-sm md:grid-cols-2">
                  <div>
                    <span className="font-medium">Tarif horaire:</span>
                    <span className="ml-1">{formData.hourlyRate ? `${formData.hourlyRate}€` : "Non défini"}</span>
                  </div>
                  <div>
                    <span className="font-medium">Heures par semaine:</span>
                    <span className="ml-1">{formData.hoursPerWeek ? `${formData.hoursPerWeek}h` : "Non défini"}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium">Planning hebdomadaire:</span>
                    <div className="mt-1 whitespace-pre-line">{formData.schedule || "Non défini"}</div>
                  </div>
                  <div>
                    <span className="font-medium">Repas fournis:</span>
                    <span className="ml-1">{formData.meals ? "Oui" : "Non"}</span>
                  </div>
                  {formData.meals && (
                    <div>
                      <span className="font-medium">Prix du repas:</span>
                      <span className="ml-1">{formData.mealPrice ? `${formData.mealPrice}€` : "Non défini"}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Jours de congés payés:</span>
                    <span className="ml-1">
                      {formData.vacationDays ? `${formData.vacationDays} jours` : "Non défini"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Modalités de paiement</h3>
                <div className="grid gap-2 text-sm md:grid-cols-2">
                  <div>
                    <span className="font-medium">Méthode de paiement:</span>
                    <span className="ml-1">
                      {formData.paymentMethod === "virement"
                        ? "Virement bancaire"
                        : formData.paymentMethod === "cheque"
                          ? "Chèque"
                          : formData.paymentMethod === "cesu"
                            ? "CESU"
                            : formData.paymentMethod === "especes"
                              ? "Espèces"
                              : "Non définie"}
                    </span>
                  </div>
                </div>
                {formData.additionalTerms && (
                  <div className="mt-2">
                    <span className="font-medium">Conditions supplémentaires:</span>
                    <div className="mt-1 whitespace-pre-line">{formData.additionalTerms}</div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </Button>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                >
                  <Save className="h-4 w-4" />
                  Enregistrer
                </Button>
                <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                  <FileText className="h-4 w-4" />
                  Générer le contrat
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </form>
    </main>
  )
}
