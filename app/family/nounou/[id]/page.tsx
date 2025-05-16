"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, ChevronLeft, Clock, Heart, MapPin, MessageCircle, Star, Users } from "lucide-react"

export default function NounouProfilePage({ params }: { params: { id: string } }) {
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
    image: "/placeholder.svg?height=300&width=300",
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
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/search" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la recherche
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

                <h1 className="mb-1 text-center text-2xl font-bold text-[#6A5ACD]">{nounou.name}</h1>

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
                    className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <Heart className="h-4 w-4" />
                    Favori
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#6A5ACD]">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Lundi</span>
                  <span>{nounou.schedule.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mardi</span>
                  <span>{nounou.schedule.tuesday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mercredi</span>
                  <span>{nounou.schedule.wednesday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Jeudi</span>
                  <span>{nounou.schedule.thursday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Vendredi</span>
                  <span>{nounou.schedule.friday}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span className="font-medium">Samedi</span>
                  <span>{nounou.schedule.saturday}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span className="font-medium">Dimanche</span>
                  <span>{nounou.schedule.sunday}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#6A5ACD]">Logement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Type</span>
                  <span>{nounou.housingInfo.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Surface</span>
                  <span>{nounou.housingInfo.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Extérieur</span>
                  <span>{nounou.housingInfo.outdoor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tabac</span>
                  <span>{nounou.housingInfo.smokingStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Animaux</span>
                  <span>{nounou.housingInfo.pets}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-4 w-full grid-cols-5">
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="certifications">Formations</TabsTrigger>
              <TabsTrigger value="gallery">Photos</TabsTrigger>
              <TabsTrigger value="reviews">Avis</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">À propos de moi</CardTitle>
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
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Expérience</h3>
                    <div className="rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7E9FB]">
                          <Clock className="h-6 w-6 text-[#6A5ACD]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#6A5ACD]">{nounou.experience}</h4>
                          <p className="text-sm text-gray-600">d'expérience professionnelle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Services proposés</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {nounou.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Planning type</h3>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-white p-3 shadow-sm">
                        <h4 className="mb-2 font-medium text-[#6A5ACD]">Matin</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C7E9FB] text-xs font-medium">
                              1
                            </span>
                            <span>Accueil échelonné des enfants</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C7E9FB] text-xs font-medium">
                              2
                            </span>
                            <span>Petit-déjeuner équilibré</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C7E9FB] text-xs font-medium">
                              3
                            </span>
                            <span>Activités d'éveil adaptées à l'âge</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-white p-3 shadow-sm">
                        <h4 className="mb-2 font-medium text-[#6A5ACD]">Après-midi</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFDEE9] text-xs font-medium">
                              1
                            </span>
                            <span>Sieste adaptée aux besoins de chaque enfant</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFDEE9] text-xs font-medium">
                              2
                            </span>
                            <span>Goûter maison et équilibré</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFDEE9] text-xs font-medium">
                              3
                            </span>
                            <span>Jeux libres et sortie au parc</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Formations et diplômes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nounou.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-[#D1F2EB] bg-[#D1F2EB]/10 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D1F2EB]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6A5ACD"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#6A5ACD]">{cert}</h3>
                          {index === 0 && <p className="text-sm text-gray-600">Diplôme d'État obtenu en 2012</p>}
                          {index === 1 && (
                            <p className="text-sm text-gray-600">
                              Formation récente (2022) pour garantir la sécurité des enfants
                            </p>
                          )}
                          {index === 2 && (
                            <p className="text-sm text-gray-600">
                              Formation continue pour enrichir mes pratiques éducatives
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Agrément</h3>
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                        <CheckCircle className="h-5 w-5 text-[#6A5ACD]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Agréée par le conseil départemental du Rhône</p>
                        <p className="text-sm text-gray-600">Numéro d'agrément: 069-AM-2345 • Renouvelé en 2022</p>
                        <p className="mt-2 text-sm text-gray-600">Capacité d'accueil maximale: 4 enfants</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {nounou.galleryImages.map((img, index) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Espace de vie ${index + 1}`}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                    <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Espace dédié aux enfants</h3>
                    <p className="text-gray-700">
                      Mon appartement dispose d'un espace entièrement dédié et sécurisé pour l'accueil des enfants. Avec
                      une zone de jeux, un coin lecture et un espace repas adapté, tout est pensé pour le confort et
                      l'épanouissement des tout-petits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Avis des parents ({nounou.reviewCount})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium">Sophie Martin</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Mars 2023</p>
                      <p className="mt-2 text-gray-700">
                        Marie est une assistante maternelle exceptionnelle ! Notre fille est ravie d'aller chez elle
                        chaque jour. Les activités sont variées et adaptées à son âge. Nous recommandons vivement !
                      </p>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium">Thomas Durand</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Janvier 2023</p>
                      <p className="mt-2 text-gray-700">
                        Nous sommes très satisfaits de la prise en charge de notre fils par Marie. Elle est
                        attentionnée, professionnelle et très à l'écoute. Notre fils a fait d'énormes progrès grâce à
                        elle!
                      </p>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium">Camille Petit</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Novembre 2022</p>
                      <p className="mt-2 text-gray-700">
                        Marie est une nounou très compétente et attentionnée. Les repas sont variés et équilibrés. Seul
                        petit bémol, nous aurions aimé plus de sorties extérieures en hiver.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                    >
                      Voir plus d'avis
                    </Button>
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
                <h3 className="text-xl font-semibold text-[#6A5ACD]">Intéressé(e) par cette assistante maternelle ?</h3>
                <p className="text-gray-600">Planifiez une première rencontre pour discuter de vos besoins</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contacter Marie
              </Button>
              <Link href="/family/contract">
                <Button
                  variant="outline"
                  className="rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Établir un contrat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
