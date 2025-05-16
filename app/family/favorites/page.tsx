"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Heart, Star, MapPin, Calendar, Clock, Trash2 } from "lucide-react"

export default function FamilyFavoritesPage() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Marie Dupont",
      age: 42,
      experience: "10 ans",
      rating: 4.8,
      reviews: 24,
      location: "Lyon 3ème",
      distance: "1.2 km",
      availability: "Temps plein",
      startDate: "Immédiate",
      hourlyRate: "5.50€ net/h",
      image: "/professional-woman-portrait.png",
      skills: ["Premiers secours", "Activités créatives", "Sorties éducatives"],
      languages: ["Français", "Anglais"],
    },
    {
      id: 2,
      name: "Sophie Moreau",
      age: 38,
      experience: "7 ans",
      rating: 4.9,
      reviews: 31,
      location: "Lyon 7ème",
      distance: "2.5 km",
      availability: "Temps partiel",
      startDate: "Septembre 2023",
      hourlyRate: "5.75€ net/h",
      image: "/woman-portrait.png",
      skills: ["Éveil musical", "Cuisine", "Activités motrices"],
      languages: ["Français", "Espagnol"],
    },
    {
      id: 3,
      name: "Isabelle Laurent",
      age: 45,
      experience: "15 ans",
      rating: 4.7,
      reviews: 42,
      location: "Lyon 6ème",
      distance: "3.1 km",
      availability: "Temps plein",
      startDate: "Octobre 2023",
      hourlyRate: "6.00€ net/h",
      image: "/woman-portrait.png",
      skills: ["Aide aux devoirs", "Activités sportives", "Lecture"],
      languages: ["Français"],
    },
  ])

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id))
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Mes nounous favorites</h1>
        <p className="text-gray-600">Retrouvez les assistantes maternelles que vous avez ajoutées à vos favoris</p>
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-12 text-center">
          <Heart className="mb-4 h-16 w-16 text-gray-300" />
          <h2 className="mb-2 text-xl font-semibold text-gray-700">Aucune nounou favorite pour le moment</h2>
          <p className="mb-6 text-gray-500">Vous n'avez pas encore ajouté d'assistantes maternelles à vos favoris.</p>
          <Link href="/family/search">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              Rechercher une nounou
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((nounou) => (
            <Card key={nounou.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute right-2 top-2 z-10">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                      onClick={() => removeFromFavorites(nounou.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Retirer des favoris</span>
                    </Button>
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={nounou.image || "/placeholder.svg"}
                      alt={nounou.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#6A5ACD]">{nounou.name}</h3>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">
                        {nounou.rating} ({nounou.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                      <span>
                        {nounou.location} • {nounou.distance}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-gray-400" />
                      <span>Disponibilité: {nounou.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-gray-400" />
                      <span>Début: {nounou.startDate}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700">Expérience: {nounou.experience}</p>
                    <p className="text-sm font-medium text-gray-700">Tarif: {nounou.hourlyRate}</p>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {nounou.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-[#FFDEE9]/30 text-[#6A5ACD]">
                          {skill}
                        </Badge>
                      ))}
                      {nounou.skills.length > 2 && (
                        <Badge variant="outline" className="bg-[#FFDEE9]/30 text-[#6A5ACD]">
                          +{nounou.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link href={`/family/nounou/${nounou.id}`}>
                      <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                        Voir le profil
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  )
}
