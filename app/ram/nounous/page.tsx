"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  CheckCircle,
  MapPin,
  Star,
  User,
  Search,
  Filter,
  Download,
  Plus,
  Clock,
  Calendar,
  Users,
} from "lucide-react"

export default function RamNounousPage() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Marie Dupont",
      rating: 4.8,
      experience: "10 ans",
      city: "Lyon",
      address: "69003 Lyon",
      languages: ["Français", "Anglais"],
      availability: true,
      availableSpots: 2,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Éveil musical", "Activités manuelles"],
      status: "Agréée",
      lastRenewal: "2022",
      childrenCount: 2,
    },
    {
      id: 2,
      name: "Sophie Moreau",
      rating: 4.9,
      experience: "15 ans",
      city: "Lyon",
      address: "69007 Lyon",
      languages: ["Français", "Espagnol"],
      availability: true,
      availableSpots: 1,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Motricité", "Sorties nature"],
      status: "Agréée",
      lastRenewal: "2021",
      childrenCount: 3,
    },
    {
      id: 3,
      name: "Isabelle Laurent",
      rating: 4.7,
      experience: "8 ans",
      city: "Villeurbanne",
      address: "69100 Villeurbanne",
      languages: ["Français"],
      availability: true,
      availableSpots: 3,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Apprentissage précoce", "Jardinage"],
      status: "Agréée",
      lastRenewal: "2023",
      childrenCount: 1,
    },
    {
      id: 4,
      name: "Nathalie Bernard",
      rating: 4.6,
      experience: "12 ans",
      city: "Caluire",
      address: "69300 Caluire",
      languages: ["Français", "Allemand"],
      availability: false,
      availableSpots: 0,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Arts plastiques", "Cuisine"],
      status: "Agréée",
      lastRenewal: "2020",
      childrenCount: 4,
    },
    {
      id: 5,
      name: "Claire Petit",
      rating: 4.5,
      experience: "5 ans",
      city: "Lyon",
      address: "69008 Lyon",
      languages: ["Français", "Italien"],
      availability: true,
      availableSpots: 2,
      image: "/placeholder.svg?height=120&width=120",
      specialties: ["Éveil musical", "Lecture"],
      status: "En attente",
      lastRenewal: "",
      childrenCount: 0,
    },
  ])

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
      <Link href="/ram/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Assistantes maternelles</h1>
          <p className="text-gray-600">Gérez les assistantes maternelles de votre secteur</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
          >
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Link href="/ram/add-nounou">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Plus className="h-4 w-4" />
              Ajouter une nounou
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-[#D1F2EB]/20 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-[#6A5ACD]" />
          <h2 className="text-xl font-semibold text-[#6A5ACD]">Recherche</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="city" className="text-[#6A5ACD]">
              Ville
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="city" className="mt-1">
                <SelectValue placeholder="Toutes les villes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les villes</SelectItem>
                <SelectItem value="lyon">Lyon</SelectItem>
                <SelectItem value="villeurbanne">Villeurbanne</SelectItem>
                <SelectItem value="caluire">Caluire</SelectItem>
                <SelectItem value="bron">Bron</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="district" className="text-[#6A5ACD]">
              Arrondissement / Quartier
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="district" className="mt-1">
                <SelectValue placeholder="Tous les quartiers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="69001">Lyon 1er</SelectItem>
                <SelectItem value="69002">Lyon 2ème</SelectItem>
                <SelectItem value="69003">Lyon 3ème</SelectItem>
                <SelectItem value="69007">Lyon 7ème</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="status" className="text-[#6A5ACD]">
              Statut
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="status" className="mt-1">
                <SelectValue placeholder="Tous les statuts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="approved">Agréée</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="suspended">Suspendue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="availability" className="text-[#6A5ACD]">
              Disponibilité
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="availability" className="mt-1">
                <SelectValue placeholder="Toutes les disponibilités" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="available">Places disponibles</SelectItem>
                <SelectItem value="full">Complet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="filter1" />
            <label
              htmlFor="filter1"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Renouvellement à venir
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="filter2" />
            <label
              htmlFor="filter2"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nouvelles inscriptions
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="filter3" />
            <label
              htmlFor="filter3"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Spécialité éveil musical
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="filter4" />
            <label
              htmlFor="filter4"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Parle anglais
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Search className="h-4 w-4" />
            Rechercher
          </Button>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
          >
            <Filter className="h-4 w-4" />
            Filtres avancés
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#6A5ACD]">
          {searchResults.length} assistantes maternelles trouvées
        </h2>
      </div>

      <div className="grid gap-4">
        {searchResults.map((nounou) => (
          <Card key={nounou.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-40 w-full md:h-auto md:w-40">
                  <img
                    src={nounou.image || "/placeholder.svg"}
                    alt={nounou.name}
                    className="h-full w-full object-cover"
                  />
                  {nounou.status === "En attente" && (
                    <div className="absolute left-2 top-2 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>En attente</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#6A5ACD]">{nounou.name}</h3>
                    <Badge className={getStatusColor(nounou.status)}>{nounou.status}</Badge>
                  </div>

                  <div className="mb-3 flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{nounou.address}</span>
                  </div>

                  <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">Expérience: {nounou.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-600">Note: {nounou.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">
                        {nounou.lastRenewal ? `Renouv.: ${nounou.lastRenewal}` : "Nouvelle inscription"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">
                        {nounou.childrenCount} enfant{nounou.childrenCount > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 flex flex-wrap gap-1">
                    {nounou.specialties.map((specialty, index) => (
                      <span key={index} className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      {nounou.availability ? (
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          <CheckCircle className="h-3 w-3" />
                          {nounou.availableSpots} place{nounou.availableSpots > 1 ? "s" : ""} disponible
                          {nounou.availableSpots > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                          Complet
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/ram/nounou/${nounou.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                        >
                          Voir profil
                        </Button>
                      </Link>
                      {nounou.status === "En attente" && (
                        <Button size="sm" className="rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                          Valider
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
