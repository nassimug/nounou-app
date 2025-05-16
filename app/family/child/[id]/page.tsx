"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  Edit,
  Calendar,
  FileText,
  Heart,
  Baby,
  Cake,
  User,
  Clock,
  MapPin,
  Phone,
  AlertCircle,
} from "lucide-react"

export default function ChildDetailsPage() {
  const params = useParams()
  const childId = params.id

  // Données simulées pour l'enfant
  const child = {
    id: childId,
    name: childId === "1" ? "Emma" : "Lucas",
    age: childId === "1" ? "3 ans" : "1 an",
    birthdate: childId === "1" ? "12/05/2020" : "23/11/2022",
    image: childId === "1" ? "/emma.png" : "/lucas.png",
    nounou: "Marie Dupont",
    nounouId: "123",
    allergies: childId === "1" ? ["Arachides", "Fraises"] : [],
    particularites: childId === "1" ? "Doudou nécessaire pour la sieste" : "Tétine pour dormir",
    address: "15 rue des Lilas, 69003 Lyon",
    emergency: [
      { name: "Sophie Martin (Maman)", phone: "06 12 34 56 78" },
      { name: "Thomas Martin (Papa)", phone: "06 98 76 54 32" },
      { name: "Dr. Petit (Pédiatre)", phone: "04 72 00 00 00" },
    ],
    schedule: [
      { day: "Lundi", hours: "8h30 - 18h00" },
      { day: "Mardi", hours: "8h30 - 18h00" },
      { day: "Mercredi", hours: "8h30 - 12h30" },
      { day: "Jeudi", hours: "8h30 - 18h00" },
      { day: "Vendredi", hours: "8h30 - 17h00" },
    ],
    development: {
      milestones: [
        { date: "15/08/2021", description: "Premier sourire" },
        { date: "20/10/2021", description: "Premiers mots" },
        { date: "05/01/2022", description: "Premiers pas" },
      ],
      notes:
        "Emma est très sociable et aime jouer avec les autres enfants. Elle commence à s'intéresser aux livres et aux histoires.",
    },
    documents: [
      { name: "Carnet de santé", date: "12/05/2023", type: "pdf" },
      { name: "Vaccinations", date: "15/01/2023", type: "pdf" },
      { name: "Autorisation sorties", date: "01/09/2022", type: "pdf" },
    ],
  }

  const [activeTab, setActiveTab] = useState("general")

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/children" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des enfants
      </Link>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="relative h-64 w-full overflow-hidden bg-[#FFDEE9]/30">
              <img src={child.image || "/placeholder.svg"} alt={child.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h1 className="mb-1 text-2xl font-bold text-[#6A5ACD]">{child.name}</h1>
              <div className="mb-4 flex items-center gap-2 text-gray-600">
                <Cake className="h-4 w-4" />
                <span>
                  {child.age} • Né(e) le {child.birthdate}
                </span>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#6A5ACD]" />
                  <span className="text-sm">
                    Nounou:{" "}
                    <Link href={`/family/nounou/${child.nounouId}`} className="text-[#6A5ACD] hover:underline">
                      {child.nounou}
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#6A5ACD]" />
                  <span className="text-sm">{child.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link href={`/family/child/${child.id}/edit`}>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <Edit className="h-4 w-4" />
                    Modifier
                  </Button>
                </Link>
                <Link href={`/family/child/${child.id}/planning`}>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                  >
                    <Calendar className="h-4 w-4" />
                    Planning
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="general">Général</TabsTrigger>
              <TabsTrigger value="daily">Quotidien</TabsTrigger>
              <TabsTrigger value="development">Développement</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Informations médicales</CardTitle>
                    <CardDescription>Allergies et particularités médicales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Allergies</h3>
                        {child.allergies.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {child.allergies.map((allergie, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm text-red-800"
                              >
                                <AlertCircle className="h-3 w-3" />
                                {allergie}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600">Aucune allergie connue</p>
                        )}
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Particularités</h3>
                        <p className="text-sm text-gray-600">{child.particularites}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Contacts d'urgence</CardTitle>
                    <CardDescription>Personnes à contacter en cas d'urgence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {child.emergency.map((contact, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                              <User className="h-5 w-5 text-[#6A5ACD]" />
                            </div>
                            <div>
                              <p className="font-medium text-[#6A5ACD]">{contact.name}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{contact.phone}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="daily">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Planning hebdomadaire</CardTitle>
                    <CardDescription>Horaires de garde habituels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {child.schedule.map((day, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                          <div className="font-medium">{day.day}</div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#6A5ACD]" />
                            <span>{day.hours}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Habitudes quotidiennes</CardTitle>
                    <CardDescription>Routines et préférences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Repas</h3>
                        <p className="text-sm text-gray-600">
                          {child.id === "1"
                            ? "Emma mange de tout mais préfère les pâtes. Elle boit environ 500ml d'eau par jour."
                            : "Lucas mange des petits morceaux et a besoin d'aide pour boire au verre."}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Sieste</h3>
                        <p className="text-sm text-gray-600">
                          {child.id === "1"
                            ? "Une sieste l'après-midi d'environ 1h30 (13h-14h30). A besoin de son doudou."
                            : "Deux siestes par jour : 10h-11h et 14h-16h. Utilise une tétine pour s'endormir."}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Activités préférées</h3>
                        <p className="text-sm text-gray-600">
                          {child.id === "1"
                            ? "Dessin, lecture d'histoires, jeux de construction."
                            : "Jeux d'éveil, musique, cubes."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="development">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Étapes de développement</CardTitle>
                    <CardDescription>Suivi des progrès</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative ml-4 space-y-4 border-l border-dashed border-[#6A5ACD] pl-6">
                      {child.development.milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFDEE9]">
                            <Baby className="h-3 w-3 text-[#6A5ACD]" />
                          </div>
                          <div className="rounded-lg border p-3">
                            <p className="text-sm font-medium text-[#6A5ACD]">{milestone.date}</p>
                            <p className="text-sm text-gray-600">{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#6A5ACD]">Notes de développement</CardTitle>
                    <CardDescription>Observations et remarques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-[#FFDEE9]/10 p-4">
                      <div className="flex items-start gap-3">
                        <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-[#6A5ACD]" />
                        <p className="text-gray-700">{child.development.notes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#6A5ACD]">Documents importants</CardTitle>
                  <CardDescription>Fichiers et documents liés à {child.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {child.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7E9FB]">
                            <FileText className="h-5 w-5 text-[#6A5ACD]" />
                          </div>
                          <div>
                            <p className="font-medium text-[#6A5ACD]">{doc.name}</p>
                            <p className="text-xs text-gray-500">Mis à jour le {doc.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD]">
                          Voir
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
