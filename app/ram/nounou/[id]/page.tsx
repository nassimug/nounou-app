"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  CheckCircle,
  ChevronLeft,
  Clock,
  Download,
  FileText,
  MapPin,
  MessageCircle,
  Star,
  User,
  Users,
  X,
} from "lucide-react"

export default function RamNounouProfilePage({ params }: { params: { id: string } }) {
  const nounou = {
    id: params.id,
    name: "Marie Dupont",
    rating: 4.8,
    reviewCount: 32,
    experience: "10 ans",
    city: "Lyon",
    address: "69003 Lyon",
    languages: ["Français", "Anglais"],
    availability: true,
    availableSpots: 2,
    image: "/nounou1.png?height=300&width=300",
    specialties: ["Éveil musical", "Activités manuelles", "Sorties ludiques"],
    about:
      "Assistante maternelle agréée depuis 10 ans, je propose un accueil chaleureux et bienveillant pour vos enfants. Diplômée du CAP Petite Enfance, je suis passionnée par l'éveil des tout-petits et la mise en place d'activités ludiques et éducatives adaptées à chaque âge.",
    schedule: {
      monday: "7h30 - 18h30",
      tuesday: "7h30 - 18h30",
      wednesday: "7h30 - 18h30",
      thursday: "7h30 - 18h30",
      friday: "7h30 - 18h00",
      saturday: "Non disponible",
      sunday: "Non disponible",
    },
    services: [
      "Repas faits maison",
      "Sorties au parc quotidiennes",
      "Activités d'éveil adaptées",
      "Apprentissage de l'autonomie",
      "Rituels de lecture",
    ],
    housingInfo: {
      type: "Appartement",
      size: "90m²",
      outdoor: "Balcon sécurisé",
      smokingStatus: "Non-fumeur",
      pets: "Chat",
    },
    certifications: ["CAP Petite Enfance", "Formation premiers secours", "Formation Montessori"],
    galleryImages: [
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
    ],
    status: "Agréée",
    agrementNumber: "069-AM-2345",
    lastRenewal: "2022",
    nextRenewal: "2025",
    children: [
      {
        id: 1,
        name: "Emma Martin",
        age: "3 ans",
        family: "Famille Martin",
        startDate: "01/09/2022",
      },
      {
        id: 2,
        name: "Lucas Martin",
        age: "1 an",
        family: "Famille Martin",
        startDate: "01/09/2022",
      },
      {
        id: 3,
        name: "Léa Dubois",
        age: "2 ans",
        family: "Famille Dubois",
        startDate: "15/01/2023",
      },
    ],
    documents: [
      {
        id: 1,
        title: "Agrément",
        date: "15/03/2022",
        type: "agrément",
      },
      {
        id: 2,
        title: "Attestation d'assurance",
        date: "10/01/2023",
        type: "assurance",
      },
      {
        id: 3,
        title: "Diplôme CAP Petite Enfance",
        date: "05/07/2012",
        type: "diplôme",
      },
    ],
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Agréée":
        return "bg-green-100 text-green-800"
      case "En attente":
        return "bg-yellow-100 text-yellow-800"
      case "Suspendue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/nounous" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des nounous
      </Link>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full">
                  <img
                    src={nounou.image || "/placeholder.svg"}
                    alt={nounou.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <h1 className="text-center text-2xl font-bold text-[#6A5ACD]">{nounou.name}</h1>
                  <Badge className={getStatusColor(nounou.status)}>{nounou.status}</Badge>
                </div>

                <div className="mb-2 flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="text-sm font-medium">
                    {nounou.rating} ({nounou.reviewCount} avis)
                  </span>
                </div>

                <div className="mb-3 flex items-center justify-center gap-1 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{nounou.address}</span>
                </div>

                <div className="mb-4 flex flex-wrap justify-center gap-1">
                  {nounou.languages.map((language, index) => (
                    <span key={index} className="rounded-full bg-[#C7E9FB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                      {language}
                    </span>
                  ))}
                </div>

                {nounou.availability && (
                  <div className="mb-4 flex w-full items-center justify-center rounded-full bg-green-100 py-2 text-sm font-medium text-green-800">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>
                      {nounou.availableSpots} place{nounou.availableSpots > 1 ? "s" : ""} disponible
                      {nounou.availableSpots > 1 ? "s" : ""}
                    </span>
                  </div>
                )}

                <div className="grid w-full grid-cols-2 gap-2">
                  <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <MessageCircle className="h-4 w-4" />
                    Contacter
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                  >
                    <Download className="h-4 w-4" />
                    Exporter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#6A5ACD]">Informations administratives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">N° d'agrément</span>
                  <span>{nounou.agrementNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dernier renouvellement</span>
                  <span>{nounou.lastRenewal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Prochain renouvellement</span>
                  <span>{nounou.nextRenewal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Expérience</span>
                  <span>{nounou.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Capacité d'accueil</span>
                  <span>4 enfants</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-1 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                >
                  Modifier
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-1 rounded-full border-red-200 text-red-600 hover:bg-red-50"
                >
                  Suspendre
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#6A5ACD]">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {nounou.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between rounded-lg border p-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#6A5ACD]" />
                      <div>
                        <p className="text-sm font-medium">{doc.title}</p>
                        <p className="text-xs text-gray-500">{doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-4 w-full grid-cols-4">
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="children">Enfants</TabsTrigger>
              <TabsTrigger value="housing">Logement</TabsTrigger>
              <TabsTrigger value="history">Historique</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">À propos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{nounou.about}</p>

                  <div className="mt-6">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Spécialités</h3>
                    <div className="flex flex-wrap gap-2">
                      {nounou.specialties.map((specialty, index) => (
                        <span key={index} className="rounded-full bg-[#FFDEE9]/30 px-3 py-1.5 text-sm text-[#6A5ACD]">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Certifications et formations</h3>
                    <div className="space-y-3">
                      {nounou.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-lg border border-[#D1F2EB] bg-[#D1F2EB]/10 p-3"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1F2EB]">
                            <CheckCircle className="h-4 w-4 text-[#6A5ACD]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#6A5ACD]">{cert}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Horaires d'accueil</h3>
                    <div className="rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                          <p className="font-medium text-[#6A5ACD]">Lundi</p>
                          <p className="text-sm text-gray-600">{nounou.schedule.monday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-[#6A5ACD]">Mardi</p>
                          <p className="text-sm text-gray-600">{nounou.schedule.tuesday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-[#6A5ACD]">Mercredi</p>
                          <p className="text-sm text-gray-600">{nounou.schedule.wednesday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-[#6A5ACD]">Jeudi</p>
                          <p className="text-sm text-gray-600">{nounou.schedule.thursday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-[#6A5ACD]">Vendredi</p>
                          <p className="text-sm text-gray-600">{nounou.schedule.friday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-400">Samedi</p>
                          <p className="text-sm text-gray-400">{nounou.schedule.saturday}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-400">Dimanche</p>
                          <p className="text-sm text-gray-400">{nounou.schedule.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="children" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Enfants accueillis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nounou.children.map((child) => (
                      <div key={child.id} className="rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <img
                              src="/emma.png?height=100&width=100"
                              alt={child.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{child.name}</h3>
                            <p className="text-sm text-gray-600">{child.age}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {child.family}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                Depuis le {child.startDate}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                          >
                            Voir contrat
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-dashed border-[#D1F2EB] bg-[#D1F2EB]/5 p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <Users className="h-8 w-8 text-[#D1F2EB]" />
                    </div>
                    <h3 className="mb-1 font-medium text-[#6A5ACD]">Capacité d'accueil</h3>
                    <p className="mb-2 text-sm text-gray-600">
                      {nounou.children.length} enfant{nounou.children.length > 1 ? "s" : ""} sur 4 places
                    </p>
                    <div className="mx-auto mb-2 h-2 w-3/4 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full bg-[#6A5ACD]"
                        style={{ width: `${(nounou.children.length / 4) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {4 - nounou.children.length} place{4 - nounou.children.length > 1 ? "s" : ""} disponible
                      {4 - nounou.children.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="housing" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Logement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-3 font-medium text-[#6A5ACD]">Informations générales</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Type</span>
                          <span>{nounou.housingInfo.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Surface</span>
                          <span>{nounou.housingInfo.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Extérieur</span>
                          <span>{nounou.housingInfo.outdoor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Tabac</span>
                          <span>{nounou.housingInfo.smokingStatus}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Animaux</span>
                          <span>{nounou.housingInfo.pets}</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="mb-3 font-medium text-[#6A5ACD]">Dernière visite</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Date</span>
                          <span>15/03/2022</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Inspecteur</span>
                          <span>Mme Leroy</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Résultat</span>
                          <span className="font-medium text-green-600">Conforme</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Prochaine visite</span>
                          <span>Mars 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Photos du logement</h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      {nounou.galleryImages.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg border">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`Espace de vie ${index + 1}`}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Espace dédié aux enfants</h3>
                    <p className="text-gray-700">
                      L'appartement dispose d'un espace entièrement dédié et sécurisé pour l'accueil des enfants. Avec
                      une zone de jeux, un coin lecture et un espace repas adapté, tout est pensé pour le confort et
                      l'épanouissement des tout-petits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Historique</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                    <div className="space-y-6">
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D1F2EB]">
                          <CheckCircle className="h-4 w-4 text-[#6A5ACD]" />
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium text-[#6A5ACD]">Renouvellement d'agrément</h3>
                          <p className="text-sm text-gray-600">15/03/2022</p>
                          <p className="mt-2 text-sm">
                            Renouvellement de l'agrément pour une période de 5 ans. Capacité d'accueil maintenue à 4
                            enfants.
                          </p>
                        </div>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFDEE9]">
                          <User className="h-4 w-4 text-[#6A5ACD]" />
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium text-[#6A5ACD]">Nouvel enfant accueilli</h3>
                          <p className="text-sm text-gray-600">15/01/2023</p>
                          <p className="mt-2 text-sm">Début de l'accueil de Léa Dubois (2 ans) de la famille Dubois.</p>
                        </div>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#C7E9FB]">
                          <FileText className="h-4 w-4 text-[#6A5ACD]" />
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium text-[#6A5ACD]">Mise à jour de l'attestation d'assurance</h3>
                          <p className="text-sm text-gray-600">10/01/2023</p>
                          <p className="mt-2 text-sm">
                            Nouvelle attestation d'assurance professionnelle valable jusqu'au 31/12/2023.
                          </p>
                        </div>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFDEE9]">
                          <Users className="h-4 w-4 text-[#6A5ACD]" />
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium text-[#6A5ACD]">Nouveaux enfants accueillis</h3>
                          <p className="text-sm text-gray-600">01/09/2022</p>
                          <p className="mt-2 text-sm">
                            Début de l'accueil d'Emma Martin (3 ans) et Lucas Martin (1 an) de la famille Martin.
                          </p>
                        </div>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#D1F2EB]">
                          <Clock className="h-4 w-4 text-[#6A5ACD]" />
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium text-[#6A5ACD]">Formation continue</h3>
                          <p className="text-sm text-gray-600">15/06/2022</p>
                          <p className="mt-2 text-sm">
                            Participation à la formation "Éveil musical pour les tout-petits" (14h).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 rounded-xl bg-[#D1F2EB]/20 p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1F2EB]">
                <Calendar className="h-6 w-6 text-[#6A5ACD]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#6A5ACD]">Actions administratives</h3>
                <p className="text-gray-600">Gérez les informations administratives de cette assistante maternelle</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                <CheckCircle className="mr-2 h-4 w-4" />
                Renouveler l'agrément
              </Button>
              <Button variant="outline" className="rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                <Calendar className="mr-2 h-4 w-4" />
                Planifier une visite
              </Button>
              <Button variant="outline" className="rounded-full border-red-200 text-red-600 hover:bg-red-50">
                <X className="mr-2 h-4 w-4" />
                Suspendre l'agrément
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
