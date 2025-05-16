"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Search, Baby, User, Calendar, Phone, Mail, MapPin, Heart, AlertCircle, Info } from "lucide-react"

export default function NounouChildrenPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const children = [
    {
      id: 1,
      name: "Emma Martin",
      age: "3 ans",
      birthdate: "15/05/2020",
      image: "/placeholder.svg?height=100&width=100",
      family: {
        name: "Famille Martin",
        parents: "Thomas et Sophie Martin",
        address: "15 rue des Lilas, 69003 Lyon",
        phone: "06 12 34 56 78",
        email: "martin@example.com",
      },
      allergies: ["Arachides", "Fraises"],
      medicalInfo: "Asthme léger",
      schedule: "Lundi au vendredi, 8h-18h",
      startDate: "01/09/2022",
      status: "active",
    },
    {
      id: 2,
      name: "Lucas Martin",
      age: "1 an",
      birthdate: "10/11/2022",
      image: "/placeholder.svg?height=100&width=100",
      family: {
        name: "Famille Martin",
        parents: "Thomas et Sophie Martin",
        address: "15 rue des Lilas, 69003 Lyon",
        phone: "06 12 34 56 78",
        email: "martin@example.com",
      },
      allergies: [],
      medicalInfo: "",
      schedule: "Lundi au vendredi, 8h-18h",
      startDate: "01/02/2023",
      status: "active",
    },
    {
      id: 3,
      name: "Léa Dubois",
      age: "2 ans",
      birthdate: "22/07/2021",
      image: "/placeholder.svg?height=100&width=100",
      family: {
        name: "Famille Dubois",
        parents: "Pierre et Julie Dubois",
        address: "8 avenue Jean Jaurès, 69007 Lyon",
        phone: "06 23 45 67 89",
        email: "dubois@example.com",
      },
      allergies: ["Lactose"],
      medicalInfo: "",
      schedule: "Lundi, mardi, jeudi, 9h-17h",
      startDate: "15/01/2023",
      status: "active",
    },
  ]

  const filteredChildren = children.filter((child) => child.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Enfants</h1>
        <p className="text-gray-600">Gérez les informations des enfants dont vous vous occupez</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Rechercher un enfant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{children.length} enfants</Badge>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="active">Actifs</TabsTrigger>
          <TabsTrigger value="family">Par famille</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6">
            {filteredChildren.map((child) => (
              <Card key={child.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex h-48 w-full items-center justify-center bg-[#FFDEE9]/20 p-4 md:h-auto md:w-48">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full">
                        <img
                          src={child.image || "/placeholder.svg"}
                          alt={child.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold text-[#6A5ACD]">{child.name}</h2>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                          <Baby className="h-4 w-4" />
                          <span>{child.age}</span>
                          <span className="mx-1">•</span>
                          <Calendar className="h-4 w-4" />
                          <span>Né(e) le {child.birthdate}</span>
                        </div>
                      </div>

                      <div className="mb-4 grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                            <User className="h-4 w-4" />
                            Famille
                          </h3>
                          <div className="space-y-1 text-sm">
                            <p className="font-medium">{child.family.name}</p>
                            <p>{child.family.parents}</p>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-gray-500" />
                              <span>{child.family.address}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3 text-gray-500" />
                              <span>{child.family.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3 text-gray-500" />
                              <span>{child.family.email}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                            <Info className="h-4 w-4" />
                            Informations importantes
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div>
                              <div className="flex items-center gap-1 font-medium">
                                <AlertCircle className="h-3 w-3 text-red-500" />
                                Allergies:
                              </div>
                              <p>
                                {child.allergies.length > 0 ? child.allergies.join(", ") : "Aucune allergie connue"}
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1 font-medium">
                                <Heart className="h-3 w-3 text-red-500" />
                                Informations médicales:
                              </div>
                              <p>{child.medicalInfo || "Aucune information médicale particulière"}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 rounded-lg bg-[#C7E9FB]/10 p-3">
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Planning</h3>
                        <div className="grid gap-2 text-sm md:grid-cols-2">
                          <div>
                            <span className="font-medium">Horaires:</span>
                            <span className="ml-1">{child.schedule}</span>
                          </div>
                          <div>
                            <span className="font-medium">Date de début:</span>
                            <span className="ml-1">{child.startDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-end gap-2">
                        <Link href={`/nounou/child/${child.id}`}>
                          <Button
                            variant="outline"
                            className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                          >
                            Voir le dossier complet
                          </Button>
                        </Link>
                        <Link href={`/nounou/messages?contact=${child.family.name.toLowerCase().replace(" ", "-")}`}>
                          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                            Contacter la famille
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-0">
          <div className="grid gap-6">
            {filteredChildren
              .filter((child) => child.status === "active")
              .map((child) => (
                <Card key={child.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex h-48 w-full items-center justify-center bg-[#FFDEE9]/20 p-4 md:h-auto md:w-48">
                        <div className="relative h-32 w-32 overflow-hidden rounded-full">
                          <img
                            src={child.image || "/placeholder.svg"}
                            alt={child.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-[#6A5ACD]">{child.name}</h2>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                            <Baby className="h-4 w-4" />
                            <span>{child.age}</span>
                            <span className="mx-1">•</span>
                            <Calendar className="h-4 w-4" />
                            <span>Né(e) le {child.birthdate}</span>
                          </div>
                        </div>

                        <div className="mb-4 grid gap-4 md:grid-cols-2">
                          <div>
                            <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                              <User className="h-4 w-4" />
                              Famille
                            </h3>
                            <div className="space-y-1 text-sm">
                              <p className="font-medium">{child.family.name}</p>
                              <p>{child.family.parents}</p>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-gray-500" />
                                <span>{child.family.address}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3 text-gray-500" />
                                <span>{child.family.phone}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 text-gray-500" />
                                <span>{child.family.email}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                              <Info className="h-4 w-4" />
                              Informations importantes
                            </h3>
                            <div className="space-y-2 text-sm">
                              <div>
                                <div className="flex items-center gap-1 font-medium">
                                  <AlertCircle className="h-3 w-3 text-red-500" />
                                  Allergies:
                                </div>
                                <p>
                                  {child.allergies.length > 0 ? child.allergies.join(", ") : "Aucune allergie connue"}
                                </p>
                              </div>
                              <div>
                                <div className="flex items-center gap-1 font-medium">
                                  <Heart className="h-3 w-3 text-red-500" />
                                  Informations médicales:
                                </div>
                                <p>{child.medicalInfo || "Aucune information médicale particulière"}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 rounded-lg bg-[#C7E9FB]/10 p-3">
                          <h3 className="mb-2 font-medium text-[#6A5ACD]">Planning</h3>
                          <div className="grid gap-2 text-sm md:grid-cols-2">
                            <div>
                              <span className="font-medium">Horaires:</span>
                              <span className="ml-1">{child.schedule}</span>
                            </div>
                            <div>
                              <span className="font-medium">Date de début:</span>
                              <span className="ml-1">{child.startDate}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto flex justify-end gap-2">
                          <Link href={`/nounou/child/${child.id}`}>
                            <Button
                              variant="outline"
                              className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                            >
                              Voir le dossier complet
                            </Button>
                          </Link>
                          <Link href={`/nounou/messages?contact=${child.family.name.toLowerCase().replace(" ", "-")}`}>
                            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                              Contacter la famille
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="family" className="mt-0">
          {/* Regrouper les enfants par famille */}
          {Array.from(new Set(filteredChildren.map((child) => child.family.name))).map((familyName) => {
            const familyChildren = filteredChildren.filter((child) => child.family.name === familyName)
            const familyInfo = familyChildren[0].family

            return (
              <div key={familyName} className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#6A5ACD]">{familyName}</h2>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {familyChildren.length} enfant(s)
                  </Badge>
                </div>

                <Card className="mb-4">
                  <CardContent className="p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                          <User className="h-4 w-4" />
                          Coordonnées
                        </h3>
                        <div className="space-y-1 text-sm">
                          <p>{familyInfo.parents}</p>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-500" />
                            <span>{familyInfo.address}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3 text-gray-500" />
                            <span>{familyInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span>{familyInfo.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Link href={`/nounou/messages?contact=${familyName.toLowerCase().replace(" ", "-")}`}>
                          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                            Contacter la famille
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  {familyChildren.map((child) => (
                    <Card key={child.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-full">
                            <img
                              src={child.image || "/placeholder.svg"}
                              alt={child.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{child.name}</h3>
                            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                              <Baby className="h-3 w-3" />
                              <span>{child.age}</span>
                              <span className="mx-1">•</span>
                              <Calendar className="h-3 w-3" />
                              <span>Né(e) le {child.birthdate}</span>
                            </div>
                            <div className="mt-2">
                              <Link href={`/nounou/child/${child.id}`}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                                >
                                  Voir le dossier
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </TabsContent>
      </Tabs>
    </main>
  )
}
