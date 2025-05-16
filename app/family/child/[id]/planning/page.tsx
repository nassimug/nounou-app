"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Save, Plus, Calendar, Clock, X, CalendarDays, CalendarRange } from "lucide-react"

export default function ChildPlanningPage() {
  const params = useParams()
  const childId = params.id

  // Données simulées pour l'enfant
  const [childName] = useState(childId === "1" ? "Emma" : "Lucas")

  // Planning régulier
  const [regularSchedule, setRegularSchedule] = useState([
    {
      day: "Lundi",
      active: true,
      morning: { start: "08:30", end: "12:30" },
      afternoon: { start: "13:30", end: "18:00" },
    },
    {
      day: "Mardi",
      active: true,
      morning: { start: "08:30", end: "12:30" },
      afternoon: { start: "13:30", end: "18:00" },
    },
    { day: "Mercredi", active: true, morning: { start: "08:30", end: "12:30" }, afternoon: { start: "", end: "" } },
    {
      day: "Jeudi",
      active: true,
      morning: { start: "08:30", end: "12:30" },
      afternoon: { start: "13:30", end: "18:00" },
    },
    {
      day: "Vendredi",
      active: true,
      morning: { start: "08:30", end: "12:30" },
      afternoon: { start: "13:30", end: "17:00" },
    },
    { day: "Samedi", active: false, morning: { start: "", end: "" }, afternoon: { start: "", end: "" } },
    { day: "Dimanche", active: false, morning: { start: "", end: "" }, afternoon: { start: "", end: "" } },
  ])

  // Événements spéciaux
  const [specialEvents, setSpecialEvents] = useState([
    {
      id: 1,
      title: "Rendez-vous pédiatre",
      date: "2023-06-15",
      time: "14:00",
      duration: "1h",
      location: "Cabinet Dr. Petit",
      notes: "Vaccins à jour",
    },
    {
      id: 2,
      title: "Sortie parc",
      date: "2023-06-20",
      time: "10:00",
      duration: "2h",
      location: "Parc de la Tête d'Or",
      notes: "Prévoir chapeau et crème solaire",
    },
    {
      id: 3,
      title: "Anniversaire ami",
      date: "2023-07-05",
      time: "15:00",
      duration: "3h",
      location: "Maison de Léo",
      notes: "Cadeau déjà acheté",
    },
  ])

  // Vacances et absences
  const [vacations, setVacations] = useState([
    {
      id: 1,
      title: "Vacances d'été",
      startDate: "2023-08-01",
      endDate: "2023-08-15",
      notes: "Vacances en famille à la mer",
    },
    {
      id: 2,
      title: "Pont de la Toussaint",
      startDate: "2023-10-30",
      endDate: "2023-11-01",
      notes: "Chez les grands-parents",
    },
  ])

  // Nouvel événement
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    notes: "",
  })

  // Nouvelle période de vacances
  const [newVacation, setNewVacation] = useState({
    title: "",
    startDate: "",
    endDate: "",
    notes: "",
  })

  const updateRegularSchedule = (index: number, period: string, field: string, value: string) => {
    const newSchedule = [...regularSchedule]
    newSchedule[index] = {
      ...newSchedule[index],
      [period]: {
        ...newSchedule[index][period as keyof (typeof newSchedule)[0] as "morning" | "afternoon"],
        [field]: value,
      },
    }
    setRegularSchedule(newSchedule)
  }

  const toggleDayActive = (index: number, active: boolean) => {
    const newSchedule = [...regularSchedule]
    newSchedule[index] = { ...newSchedule[index], active }
    setRegularSchedule(newSchedule)
  }

  const addSpecialEvent = () => {
    if (newEvent.title && newEvent.date) {
      setSpecialEvents([
        ...specialEvents,
        {
          id: Date.now(),
          ...newEvent,
        },
      ])
      setNewEvent({
        title: "",
        date: "",
        time: "",
        duration: "",
        location: "",
        notes: "",
      })
    }
  }

  const removeSpecialEvent = (id: number) => {
    setSpecialEvents(specialEvents.filter((event) => event.id !== id))
  }

  const addVacation = () => {
    if (newVacation.title && newVacation.startDate && newVacation.endDate) {
      setVacations([
        ...vacations,
        {
          id: Date.now(),
          ...newVacation,
        },
      ])
      setNewVacation({
        title: "",
        startDate: "",
        endDate: "",
        notes: "",
      })
    }
  }

  const removeVacation = (id: number) => {
    setVacations(vacations.filter((vacation) => vacation.id !== id))
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href={`/family/child/${childId}`} className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au profil de {childName}
      </Link>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Planning de {childName}</h1>
        <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
          <Save className="h-4 w-4" />
          Enregistrer
        </Button>
      </div>

      <Tabs defaultValue="regular" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="regular" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Horaires réguliers
          </TabsTrigger>
          <TabsTrigger value="special" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Événements spéciaux
          </TabsTrigger>
          <TabsTrigger value="vacation" className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4" />
            Vacances et absences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="regular">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#6A5ACD]">Planning hebdomadaire</CardTitle>
              <CardDescription>Définissez les horaires habituels de garde</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {regularSchedule.map((day, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Switch checked={day.active} onCheckedChange={(checked) => toggleDayActive(index, checked)} />
                        <h3 className="text-lg font-medium text-[#6A5ACD]">{day.day}</h3>
                      </div>
                      {!day.active && <span className="text-sm text-gray-500">Jour non prévu</span>}
                    </div>

                    {day.active && (
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-[#6A5ACD]">Matin</Label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <Input
                                type="time"
                                value={day.morning.start}
                                onChange={(e) => updateRegularSchedule(index, "morning", "start", e.target.value)}
                                className="w-32"
                              />
                            </div>
                            <span>à</span>
                            <Input
                              type="time"
                              value={day.morning.end}
                              onChange={(e) => updateRegularSchedule(index, "morning", "end", e.target.value)}
                              className="w-32"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-[#6A5ACD]">Après-midi</Label>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <Input
                                type="time"
                                value={day.afternoon.start}
                                onChange={(e) => updateRegularSchedule(index, "afternoon", "start", e.target.value)}
                                className="w-32"
                              />
                            </div>
                            <span>à</span>
                            <Input
                              type="time"
                              value={day.afternoon.end}
                              onChange={(e) => updateRegularSchedule(index, "afternoon", "end", e.target.value)}
                              className="w-32"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#6A5ACD]">Événements spéciaux</CardTitle>
              <CardDescription>Rendez-vous, sorties, activités particulières</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {specialEvents.map((event) => (
                  <div key={event.id} className="relative rounded-lg border p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 text-gray-400 hover:bg-red-50 hover:text-red-500"
                      onClick={() => removeSpecialEvent(event.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <div className="mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#6A5ACD]" />
                      <h3 className="text-lg font-medium text-[#6A5ACD]">{event.title}</h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                          <CalendarDays className="h-4 w-4" />
                          <span>Date: {event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>
                            Heure: {event.time} ({event.duration})
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 text-sm font-medium text-gray-700">Lieu</div>
                        <div className="text-sm text-gray-600">{event.location}</div>
                        {event.notes && (
                          <>
                            <div className="mb-1 mt-2 text-sm font-medium text-gray-700">Notes</div>
                            <div className="text-sm text-gray-600">{event.notes}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-dashed p-4">
                  <h3 className="mb-4 text-lg font-medium text-[#6A5ACD]">Ajouter un événement</h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="eventTitle">Titre de l'événement</Label>
                        <Input
                          id="eventTitle"
                          placeholder="Ex: Rendez-vous médical"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={newEvent.date}
                            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventTime">Heure</Label>
                          <Input
                            id="eventTime"
                            type="time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventDuration">Durée</Label>
                        <Select
                          value={newEvent.duration}
                          onValueChange={(value) => setNewEvent({ ...newEvent, duration: value })}
                        >
                          <SelectTrigger id="eventDuration">
                            <SelectValue placeholder="Sélectionner une durée" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30min">30 minutes</SelectItem>
                            <SelectItem value="1h">1 heure</SelectItem>
                            <SelectItem value="1h30">1h30</SelectItem>
                            <SelectItem value="2h">2 heures</SelectItem>
                            <SelectItem value="2h30">2h30</SelectItem>
                            <SelectItem value="3h">3 heures</SelectItem>
                            <SelectItem value="4h">4 heures</SelectItem>
                            <SelectItem value="journée">Journée entière</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="eventLocation">Lieu</Label>
                        <Input
                          id="eventLocation"
                          placeholder="Ex: Cabinet médical"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventNotes">Notes</Label>
                        <Input
                          id="eventNotes"
                          placeholder="Informations complémentaires"
                          value={newEvent.notes}
                          onChange={(e) => setNewEvent({ ...newEvent, notes: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={addSpecialEvent}
                      className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter l'événement
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vacation">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#6A5ACD]">Vacances et absences</CardTitle>
              <CardDescription>Périodes d'absence prévues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {vacations.map((vacation) => (
                  <div key={vacation.id} className="relative rounded-lg border p-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 text-gray-400 hover:bg-red-50 hover:text-red-500"
                      onClick={() => removeVacation(vacation.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <div className="mb-2 flex items-center gap-2">
                      <CalendarRange className="h-5 w-5 text-[#6A5ACD]" />
                      <h3 className="text-lg font-medium text-[#6A5ACD]">{vacation.title}</h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Du {vacation.startDate} au {vacation.endDate}
                          </span>
                        </div>
                      </div>
                      {vacation.notes && (
                        <div>
                          <div className="mb-1 text-sm font-medium text-gray-700">Notes</div>
                          <div className="text-sm text-gray-600">{vacation.notes}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-dashed p-4">
                  <h3 className="mb-4 text-lg font-medium text-[#6A5ACD]">Ajouter une période d'absence</h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="vacationTitle">Titre</Label>
                        <Input
                          id="vacationTitle"
                          placeholder="Ex: Vacances d'été"
                          value={newVacation.title}
                          onChange={(e) => setNewVacation({ ...newVacation, title: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor="startDate">Date de début</Label>
                          <Input
                            id="startDate"
                            type="date"
                            value={newVacation.startDate}
                            onChange={(e) => setNewVacation({ ...newVacation, startDate: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="endDate">Date de fin</Label>
                          <Input
                            id="endDate"
                            type="date"
                            value={newVacation.endDate}
                            onChange={(e) => setNewVacation({ ...newVacation, endDate: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="vacationNotes">Notes</Label>
                        <Input
                          id="vacationNotes"
                          placeholder="Informations complémentaires"
                          value={newVacation.notes}
                          onChange={(e) => setNewVacation({ ...newVacation, notes: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={addVacation}
                      className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter la période
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
