"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Calendar, Clock, Save, Plus, X } from "lucide-react"

export default function NounouAvailabilityPage() {
  const [availabilityData, setAvailabilityData] = useState({
    maxCapacity: 4,
    currentCapacity: 3,
    availableSpots: 1,
    availableFrom: "2023-06-01",
    availableUntil: "",
    isAvailableForEmergency: true,
    isAvailableForPartTime: true,
    isAvailableForFullTime: true,
    isAvailableForWeekends: false,
    isAvailableForNights: false,
    isAvailableForHolidays: false,
    notes:
      "Je suis disponible pour accueillir un enfant supplémentaire à partir de juin 2023. Je privilégie les contrats à temps plein, mais reste ouverte aux temps partiels selon les horaires.",
    schedule: {
      monday: { isOpen: true, start: "07:30", end: "18:30" },
      tuesday: { isOpen: true, start: "07:30", end: "18:30" },
      wednesday: { isOpen: true, start: "07:30", end: "18:30" },
      thursday: { isOpen: true, start: "07:30", end: "18:30" },
      friday: { isOpen: true, start: "07:30", end: "18:00" },
      saturday: { isOpen: false, start: "08:00", end: "18:00" },
      sunday: { isOpen: false, start: "08:00", end: "18:00" },
    },
    vacations: [
      { id: 1, startDate: "2023-07-15", endDate: "2023-08-15", description: "Vacances d'été" },
      { id: 2, startDate: "2023-12-23", endDate: "2024-01-02", description: "Vacances de Noël" },
    ],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAvailabilityData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setAvailabilityData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleScheduleChange = (day: string, field: string, value: string | boolean) => {
    setAvailabilityData((prev) => ({
      ...prev,
      schedule: {
        ...prev.schedule,
        [day]: {
          ...prev.schedule[day as keyof typeof prev.schedule],
          [field]: value,
        },
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une sauvegarde
    alert("Disponibilités mises à jour avec succès !")
  }

  const addVacation = () => {
    const newId = Math.max(0, ...availabilityData.vacations.map((v) => v.id)) + 1
    setAvailabilityData((prev) => ({
      ...prev,
      vacations: [
        ...prev.vacations,
        {
          id: newId,
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeVacation = (id: number) => {
    setAvailabilityData((prev) => ({
      ...prev,
      vacations: prev.vacations.filter((v) => v.id !== id),
    }))
  }

  const handleVacationChange = (id: number, field: string, value: string) => {
    setAvailabilityData((prev) => ({
      ...prev,
      vacations: prev.vacations.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
    }))
  }

  const days = [
    { key: "monday", label: "Lundi" },
    { key: "tuesday", label: "Mardi" },
    { key: "wednesday", label: "Mercredi" },
    { key: "thursday", label: "Jeudi" },
    { key: "friday", label: "Vendredi" },
    { key: "saturday", label: "Samedi" },
    { key: "sunday", label: "Dimanche" },
  ]

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-4 flex flex-col items-center md:mb-0 md:flex-row md:items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C7E9FB] md:mb-0 md:mr-4">
            <Calendar className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#6A5ACD]">Mes disponibilités</h1>
            <p className="text-gray-600">Gérez vos horaires et vos places disponibles</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Places disponibles:</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
            {availabilityData.availableSpots} / {availabilityData.maxCapacity}
          </span>
        </div>
      </div>

      <Tabs defaultValue="capacity" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="capacity">Capacité d'accueil</TabsTrigger>
          <TabsTrigger value="schedule">Horaires</TabsTrigger>
          <TabsTrigger value="vacations">Congés</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="capacity" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Capacité d'accueil</CardTitle>
                <CardDescription>Gérez vos places disponibles et vos préférences d'accueil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="maxCapacity" className="text-[#6A5ACD]">
                      Capacité maximale
                    </Label>
                    <Input
                      id="maxCapacity"
                      name="maxCapacity"
                      type="number"
                      value={availabilityData.maxCapacity}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentCapacity" className="text-[#6A5ACD]">
                      Enfants actuels
                    </Label>
                    <Input
                      id="currentCapacity"
                      name="currentCapacity"
                      type="number"
                      value={availabilityData.currentCapacity}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="availableSpots" className="text-[#6A5ACD]">
                      Places disponibles
                    </Label>
                    <Input
                      id="availableSpots"
                      name="availableSpots"
                      type="number"
                      value={availabilityData.availableSpots}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      disabled
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="availableFrom" className="text-[#6A5ACD]">
                      Disponible à partir du
                    </Label>
                    <Input
                      id="availableFrom"
                      name="availableFrom"
                      type="date"
                      value={availabilityData.availableFrom}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="availableUntil" className="text-[#6A5ACD]">
                      Disponible jusqu'au (optionnel)
                    </Label>
                    <Input
                      id="availableUntil"
                      name="availableUntil"
                      type="date"
                      value={availabilityData.availableUntil}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                  <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Types d'accueil proposés</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForFullTime" className="flex-1 cursor-pointer">
                        Temps plein
                      </Label>
                      <Switch
                        id="isAvailableForFullTime"
                        checked={availabilityData.isAvailableForFullTime}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForFullTime", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForPartTime" className="flex-1 cursor-pointer">
                        Temps partiel
                      </Label>
                      <Switch
                        id="isAvailableForPartTime"
                        checked={availabilityData.isAvailableForPartTime}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForPartTime", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForEmergency" className="flex-1 cursor-pointer">
                        Accueil d'urgence
                      </Label>
                      <Switch
                        id="isAvailableForEmergency"
                        checked={availabilityData.isAvailableForEmergency}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForEmergency", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForWeekends" className="flex-1 cursor-pointer">
                        Week-ends
                      </Label>
                      <Switch
                        id="isAvailableForWeekends"
                        checked={availabilityData.isAvailableForWeekends}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForWeekends", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForNights" className="flex-1 cursor-pointer">
                        Nuits
                      </Label>
                      <Switch
                        id="isAvailableForNights"
                        checked={availabilityData.isAvailableForNights}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForNights", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <Label htmlFor="isAvailableForHolidays" className="flex-1 cursor-pointer">
                        Jours fériés
                      </Label>
                      <Switch
                        id="isAvailableForHolidays"
                        checked={availabilityData.isAvailableForHolidays}
                        onCheckedChange={(checked) => handleSwitchChange("isAvailableForHolidays", checked)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-[#6A5ACD]">
                    Notes sur vos disponibilités
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={availabilityData.notes}
                    onChange={handleChange}
                    className="mt-1 min-h-32 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    placeholder="Précisez vos disponibilités, vos préférences d'accueil, etc."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Ces informations seront visibles par les familles qui consultent votre profil.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Horaires d'accueil</CardTitle>
                <CardDescription>Définissez vos horaires d'accueil pour chaque jour de la semaine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                  <div className="space-y-4">
                    {days.map((day) => (
                      <div key={day.key} className="flex flex-wrap items-center gap-4">
                        <div className="w-28">
                          <Label className="font-medium text-[#6A5ACD]">{day.label}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id={`${day.key}-open`}
                            checked={
                              availabilityData.schedule[day.key as keyof typeof availabilityData.schedule].isOpen
                            }
                            onCheckedChange={(checked) => handleScheduleChange(day.key, "isOpen", checked)}
                          />
                          <Label htmlFor={`${day.key}-open`} className="cursor-pointer text-sm">
                            {availabilityData.schedule[day.key as keyof typeof availabilityData.schedule].isOpen
                              ? "Ouvert"
                              : "Fermé"}
                          </Label>
                        </div>
                        {availabilityData.schedule[day.key as keyof typeof availabilityData.schedule].isOpen && (
                          <>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <Input
                                type="time"
                                value={
                                  availabilityData.schedule[day.key as keyof typeof availabilityData.schedule].start
                                }
                                onChange={(e) => handleScheduleChange(day.key, "start", e.target.value)}
                                className="w-32 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                              />
                              <span className="text-gray-500">à</span>
                              <Input
                                type="time"
                                value={availabilityData.schedule[day.key as keyof typeof availabilityData.schedule].end}
                                onChange={(e) => handleScheduleChange(day.key, "end", e.target.value)}
                                className="w-32 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                  <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Horaires spéciaux</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Si vous proposez des horaires spéciaux (tôt le matin, tard le soir, etc.), précisez-les ici.
                  </p>
                  <Textarea
                    placeholder="Ex: Je peux accueillir les enfants dès 6h30 le matin sur demande préalable..."
                    className="min-h-24 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vacations" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Congés et absences</CardTitle>
                <CardDescription>Planifiez vos congés et périodes d'indisponibilité</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-[#D1F2EB] bg-[#D1F2EB]/10 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[#6A5ACD]">Périodes de congés</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addVacation}
                      className="gap-1 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter une période
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {availabilityData.vacations.map((vacation) => (
                      <div key={vacation.id} className="rounded-lg border border-[#D1F2EB] bg-white p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="font-medium text-[#6A5ACD]">Période de congés</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeVacation(vacation.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <Label className="text-[#6A5ACD]">Date de début</Label>
                            <Input
                              type="date"
                              value={vacation.startDate}
                              onChange={(e) => handleVacationChange(vacation.id, "startDate", e.target.value)}
                              className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                            />
                          </div>
                          <div>
                            <Label className="text-[#6A5ACD]">Date de fin</Label>
                            <Input
                              type="date"
                              value={vacation.endDate}
                              onChange={(e) => handleVacationChange(vacation.id, "endDate", e.target.value)}
                              className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <Label className="text-[#6A5ACD]">Description</Label>
                          <Input
                            type="text"
                            value={vacation.description}
                            onChange={(e) => handleVacationChange(vacation.id, "description", e.target.value)}
                            placeholder="Ex: Vacances d'été, formation, etc."
                            className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                          />
                        </div>
                      </div>
                    ))}

                    {availabilityData.vacations.length === 0 && (
                      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#D1F2EB] bg-white p-8 text-center">
                        <Calendar className="mb-2 h-10 w-10 text-[#D1F2EB]" />
                        <h4 className="mb-1 font-medium text-[#6A5ACD]">Aucune période de congés</h4>
                        <p className="mb-4 text-sm text-gray-600">
                          Ajoutez vos périodes de congés pour informer les familles de vos disponibilités.
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addVacation}
                          className="gap-1 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                        >
                          <Plus className="h-4 w-4" />
                          Ajouter une période
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                  <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Informations complémentaires</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Précisez ici toute information complémentaire concernant vos congés ou absences.
                  </p>
                  <Textarea
                    placeholder="Ex: Je prends généralement 5 semaines de congés par an, dont 3 semaines en été..."
                    className="min-h-24 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <div className="mt-6 flex justify-end">
            <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Save className="h-4 w-4" />
              Enregistrer les modifications
            </Button>
          </div>
        </form>
      </Tabs>
    </main>
  )
}
