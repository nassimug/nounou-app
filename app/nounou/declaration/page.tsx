"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, FileCheck, Save, Download, Info } from "lucide-react"

export default function NounouDeclarationPage() {
  const [declarationData, setDeclarationData] = useState({
    month: "04",
    year: "2023",
    children: [
      {
        id: 1,
        name: "Emma Martin",
        family: "Famille Martin",
        regularHours: 160,
        overtimeHours: 4,
        absenceHours: 0,
        mealCount: 20,
        notes: "",
      },
      {
        id: 2,
        name: "Lucas Martin",
        family: "Famille Martin",
        regularHours: 160,
        overtimeHours: 4,
        absenceHours: 0,
        mealCount: 20,
        notes: "",
      },
      {
        id: 3,
        name: "Léa Dubois",
        family: "Famille Dubois",
        regularHours: 120,
        overtimeHours: 0,
        absenceHours: 8,
        mealCount: 15,
        notes: "Absente le 12 avril (maladie)",
      },
    ],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDeclarationData((prev) => ({ ...prev, [name]: value }))
  }

  const handleChildChange = (childId: number, field: string, value: string | number) => {
    setDeclarationData((prev) => ({
      ...prev,
      children: prev.children.map((child) =>
        child.id === childId ? { ...child, [field]: field === "notes" ? value : Number(value) } : child,
      ),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une sauvegarde
    alert("Déclaration mensuelle envoyée avec succès !")
  }

  const months = [
    { value: "01", label: "Janvier" },
    { value: "02", label: "Février" },
    { value: "03", label: "Mars" },
    { value: "04", label: "Avril" },
    { value: "05", label: "Mai" },
    { value: "06", label: "Juin" },
    { value: "07", label: "Juillet" },
    { value: "08", label: "Août" },
    { value: "09", label: "Septembre" },
    { value: "10", label: "Octobre" },
    { value: "11", label: "Novembre" },
    { value: "12", label: "Décembre" },
  ]

  const years = ["2023", "2024", "2025"]

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-4 flex flex-col items-center md:mb-0 md:flex-row md:items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9] md:mb-0 md:mr-4">
            <FileCheck className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#6A5ACD]">Déclaration mensuelle</h1>
            <p className="text-gray-600">Déclarez vos heures de garde pour chaque enfant</p>
          </div>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl text-[#6A5ACD]">Période de déclaration</CardTitle>
          <CardDescription>Sélectionnez le mois et l'année de votre déclaration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Label htmlFor="month" className="text-[#6A5ACD]">
                Mois
              </Label>
              <Select
                value={declarationData.month}
                onValueChange={(value) => setDeclarationData((prev) => ({ ...prev, month: value }))}
              >
                <SelectTrigger id="month" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                  <SelectValue placeholder="Sélectionnez un mois" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="year" className="text-[#6A5ACD]">
                Année
              </Label>
              <Select
                value={declarationData.year}
                onValueChange={(value) => setDeclarationData((prev) => ({ ...prev, year: value }))}
              >
                <SelectTrigger id="year" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                  <SelectValue placeholder="Sélectionnez une année" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="font-medium text-blue-800">Informations importantes</h3>
              <p className="text-sm text-blue-700">
                Cette déclaration mensuelle sera transmise aux familles concernées et au RAM-RAP pour validation.
                Assurez-vous que les informations saisies sont exactes avant de soumettre votre déclaration.
              </p>
            </div>
          </div>
        </div>

        {declarationData.children.map((child) => (
          <Card key={child.id} className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">{child.name}</CardTitle>
              <CardDescription>{child.family}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-4">
                <div>
                  <Label htmlFor={`regularHours-${child.id}`} className="text-[#6A5ACD]">
                    Heures normales
                  </Label>
                  <Input
                    id={`regularHours-${child.id}`}
                    type="number"
                    value={child.regularHours}
                    onChange={(e) => handleChildChange(child.id, "regularHours", e.target.value)}
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
                <div>
                  <Label htmlFor={`overtimeHours-${child.id}`} className="text-[#6A5ACD]">
                    Heures supplémentaires
                  </Label>
                  <Input
                    id={`overtimeHours-${child.id}`}
                    type="number"
                    value={child.overtimeHours}
                    onChange={(e) => handleChildChange(child.id, "overtimeHours", e.target.value)}
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
                <div>
                  <Label htmlFor={`absenceHours-${child.id}`} className="text-[#6A5ACD]">
                    Heures d'absence
                  </Label>
                  <Input
                    id={`absenceHours-${child.id}`}
                    type="number"
                    value={child.absenceHours}
                    onChange={(e) => handleChildChange(child.id, "absenceHours", e.target.value)}
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
                <div>
                  <Label htmlFor={`mealCount-${child.id}`} className="text-[#6A5ACD]">
                    Nombre de repas
                  </Label>
                  <Input
                    id={`mealCount-${child.id}`}
                    type="number"
                    value={child.mealCount}
                    onChange={(e) => handleChildChange(child.id, "mealCount", e.target.value)}
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor={`notes-${child.id}`} className="text-[#6A5ACD]">
                  Notes / Observations
                </Label>
                <Textarea
                  id={`notes-${child.id}`}
                  value={child.notes}
                  onChange={(e) => handleChildChange(child.id, "notes", e.target.value)}
                  placeholder="Précisez les absences, les changements d'horaires, etc."
                  className="mt-1 min-h-24 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                />
              </div>

              <div className="rounded-lg bg-[#FFDEE9]/10 p-4">
                <h3 className="mb-2 font-medium text-[#6A5ACD]">Récapitulatif</h3>
                <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                  <div>
                    <span className="font-medium text-gray-600">Total heures:</span>
                    <span className="ml-1">{child.regularHours + child.overtimeHours} h</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Dont supplémentaires:</span>
                    <span className="ml-1">{child.overtimeHours} h</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Absences:</span>
                    <span className="ml-1">{child.absenceHours} h</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Repas:</span>
                    <span className="ml-1">{child.mealCount}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
          >
            <Download className="h-4 w-4" />
            Télécharger un brouillon
          </Button>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
            >
              Enregistrer comme brouillon
            </Button>
            <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Save className="h-4 w-4" />
              Soumettre la déclaration
            </Button>
          </div>
        </div>
      </form>
    </main>
  )
}
