"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Search, MapPin, Star, Calendar, Clock, Heart, X, SlidersHorizontal, Info } from "lucide-react"

export default function FamilySearchPage() {
  const [searchResults, setSearchResults] = useState([
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
      image: "/nounou1.png",
      skills: ["Premiers secours", "Activités créatives", "Sorties éducatives"],
      languages: ["Français", "Anglais"],
      isFavorite: false,
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
      image: "/nounou2.png",
      skills: ["Éveil musical", "Cuisine", "Activités motrices"],
      languages: ["Français", "Espagnol"],
      isFavorite: true,
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
      image: "/nounou3.png",
      skills: ["Aide aux devoirs", "Activités sportives", "Lecture"],
      languages: ["Français"],
      isFavorite: false,
    },
    {
      id: 4,
      name: "Françoise Blanc",
      age: 52,
      experience: "20 ans",
      rating: 4.6,
      reviews: 56,
      location: "Lyon 2ème",
      distance: "3.8 km",
      availability: "Temps plein",
      startDate: "Immédiate",
      hourlyRate: "6.25€ net/h",
      image: "/nounou4.png",
      skills: ["Premiers secours", "Activités manuelles", "Jeux éducatifs"],
      languages: ["Français", "Italien"],
      isFavorite: false,
    },
    {
      id: 5,
      name: "Nathalie Rousseau",
      age: 35,
      experience: "5 ans",
      rating: 4.5,
      reviews: 18,
      location: "Lyon 8ème",
      distance: "4.2 km",
      availability: "Temps partiel",
      startDate: "Novembre 2023",
      hourlyRate: "5.25€ net/h",
      image: "/nounou5.png",
      skills: ["Éveil musical", "Arts plastiques", "Jeux de plein air"],
      languages: ["Français"],
      isFavorite: false,
    },
    {
      id: 6,
      name: "Catherine Leroy",
      age: 48,
      experience: "12 ans",
      rating: 4.9,
      reviews: 37,
      location: "Lyon 4ème",
      distance: "2.9 km",
      availability: "Temps plein",
      startDate: "Janvier 2024",
      hourlyRate: "5.90€ net/h",
      image: "/nounou6.png",
      skills: ["Premiers secours", "Cuisine", "Lecture"],
      languages: ["Français", "Allemand"],
      isFavorite: false,
    },
  ])

  type SearchFilters = {
    location: string
    distance: number[]
    availability: string
    experience: string
    languages: string[]
    skills: string[]
    minRating: number
    maxRate: number
    immediateStart: boolean
    withReviews: boolean
  }

  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    distance: [5],
    availability: "all",
    experience: "all",
    languages: [],
    skills: [],
    minRating: 4,
    maxRate: 7,
    immediateStart: false,
    withReviews: false,
  })

  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  const handleFilterChange = (field: string, value: any) => {
    setSearchFilters((prev) => ({ ...prev, [field]: value }))

    // Update active filters
    if (field === "distance" && value[0] !== 5) {
      if (!activeFilters.includes("distance")) {
        setActiveFilters([...activeFilters, "distance"])
      }
    } else if (field === "distance" && value[0] === 5) {
      setActiveFilters(activeFilters.filter((f) => f !== "distance"))
    } else if (value && value !== "all" && value !== false && value.length !== 0) {
      if (!activeFilters.includes(field)) {
        setActiveFilters([...activeFilters, field])
      }
    } else {
      setActiveFilters(activeFilters.filter((f) => f !== field))
    }
  }

  const removeFilter = (filter: string) => {
    if (filter === "distance") {
      handleFilterChange("distance", [5])
    } else if (filter === "languages" || filter === "skills") {
      handleFilterChange(filter, [])
    } else if (filter === "minRating") {
      handleFilterChange(filter, 4)
    } else if (filter === "maxRate") {
      handleFilterChange(filter, 7)
    } else if (filter === "immediateStart" || filter === "withReviews") {
      handleFilterChange(filter, false)
    } else {
      handleFilterChange(filter, "all")
    }
  }

  const clearAllFilters = () => {
    setSearchFilters({
      location: "",
      distance: [5],
      availability: "all",
      experience: "all",
      languages: [],
      skills: [],
      minRating: 4,
      maxRate: 7,
      immediateStart: false,
      withReviews: false,
    })
    setActiveFilters([])
  }

  const toggleFavorite = (id: number) => {
    setSearchResults(
      searchResults.map((result) => (result.id === id ? { ...result, isFavorite: !result.isFavorite } : result)),
    )
  }

  const skills = [
    "Premiers secours",
    "Activités créatives",
    "Sorties éducatives",
    "Éveil musical",
    "Cuisine",
    "Activités motrices",
    "Aide aux devoirs",
    "Activités sportives",
    "Lecture",
    "Arts plastiques",
    "Jeux de plein air",
  ]

  const languages = ["Français", "Anglais", "Espagnol", "Allemand", "Italien", "Arabe", "Portugais", "Russe"]

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Rechercher une nounou</h1>
        <p className="text-gray-600">Trouvez l'assistante maternelle idéale pour vos enfants</p>
      </div>

      <div className="mb-8 rounded-xl bg-[#FFDEE9]/20 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-[#6A5ACD]" />
          <h2 className="text-xl font-semibold text-[#6A5ACD]">Recherche</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Label htmlFor="location" className="text-[#6A5ACD]">
              Localisation
            </Label>
            <Input
              id="location"
              placeholder="Adresse, ville ou code postal"
              value={searchFilters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="distance" className="text-[#6A5ACD]">
                Distance maximale: {searchFilters.distance[0]} km
              </Label>
            </div>
            <Slider
              id="distance"
              min={1}
              max={10}
              step={1}
              value={searchFilters.distance}
              onValueChange={(value) => handleFilterChange("distance", value)}
              className="mt-3"
            />
          </div>
          <div>
            <Label htmlFor="availability" className="text-[#6A5ACD]">
              Disponibilité
            </Label>
            <Select
              value={searchFilters.availability}
              onValueChange={(value) => handleFilterChange("availability", value)}
            >
              <SelectTrigger id="availability" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Toutes les disponibilités" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les disponibilités</SelectItem>
                <SelectItem value="full-time">Temps plein</SelectItem>
                <SelectItem value="part-time">Temps partiel</SelectItem>
                <SelectItem value="occasional">Occasionnel</SelectItem>
                <SelectItem value="evening">Soirées</SelectItem>
                <SelectItem value="weekend">Week-ends</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20 ${
              showAdvancedFilters ? "bg-[#FFDEE9]/20" : ""
            }`}
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtres avancés
          </Button>

          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 rounded-full text-xs text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
              onClick={clearAllFilters}
            >
              <X className="h-3 w-3" />
              Effacer tous les filtres
            </Button>
          )}

          {activeFilters.map((filter) => (
            <Badge key={filter} variant="outline" className="gap-1 rounded-full bg-[#FFDEE9]/30 text-[#6A5ACD]">
              {filter === "location"
                ? `Lieu: ${searchFilters.location}`
                : filter === "distance"
                  ? `Distance: ${searchFilters.distance[0]} km`
                  : filter === "availability"
                    ? `Disponibilité: ${
                        searchFilters.availability === "full-time"
                          ? "Temps plein"
                          : searchFilters.availability === "part-time"
                            ? "Temps partiel"
                            : searchFilters.availability === "occasional"
                              ? "Occasionnel"
                              : searchFilters.availability === "evening"
                                ? "Soirées"
                                : "Week-ends"
                      }`
                    : filter === "experience"
                      ? `Expérience: ${
                          searchFilters.experience === "0-2"
                            ? "0-2 ans"
                            : searchFilters.experience === "3-5"
                              ? "3-5 ans"
                              : searchFilters.experience === "5-10"
                                ? "5-10 ans"
                                : "10+ ans"
                        }`
                      : filter === "languages"
                        ? `Langues: ${searchFilters.languages.length} sélectionnées`
                        : filter === "skills"
                          ? `Compétences: ${searchFilters.skills.length} sélectionnées`
                          : filter === "minRating"
                            ? `Note min: ${searchFilters.minRating}★`
                            : filter === "maxRate"
                              ? `Tarif max: ${searchFilters.maxRate}€/h`
                              : filter === "immediateStart"
                                ? "Disponible immédiatement"
                                : "Avec avis"}
              <button className="ml-1 rounded-full hover:bg-[#FFDEE9]/50" onClick={() => removeFilter(filter)}>
                <X className="h-3 w-3" />
                <span className="sr-only">Supprimer le filtre</span>
              </button>
            </Badge>
          ))}
        </div>

        {showAdvancedFilters && (
          <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <Label htmlFor="experience" className="text-[#6A5ACD]">
                  Expérience
                </Label>
                <Select
                  value={searchFilters.experience}
                  onValueChange={(value) => handleFilterChange("experience", value)}
                >
                  <SelectTrigger id="experience" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                    <SelectValue placeholder="Toutes les expériences" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les expériences</SelectItem>
                    <SelectItem value="0-2">0-2 ans</SelectItem>
                    <SelectItem value="3-5">3-5 ans</SelectItem>
                    <SelectItem value="5-10">5-10 ans</SelectItem>
                    <SelectItem value="10+">Plus de 10 ans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="minRating" className="text-[#6A5ACD]">
                    Note minimale: {searchFilters.minRating} ★
                  </Label>
                </div>
                <Slider
                  id="minRating"
                  min={1}
                  max={5}
                  step={0.5}
                  value={[searchFilters.minRating]}
                  onValueChange={(value) => handleFilterChange("minRating", value[0])}
                  className="mt-3"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="maxRate" className="text-[#6A5ACD]">
                    Tarif horaire max: {searchFilters.maxRate}€
                  </Label>
                </div>
                <Slider
                  id="maxRate"
                  min={4}
                  max={10}
                  step={0.25}
                  value={[searchFilters.maxRate]}
                  onValueChange={(value) => handleFilterChange("maxRate", value[0])}
                  className="mt-3"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <Label className="mb-2 block text-[#6A5ACD]">Compétences</Label>
                <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto rounded-md border border-[#FFDEE9] p-2">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={`skill-${skill}`}
                        checked={searchFilters.skills.includes(skill)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("skills", [...searchFilters.skills, skill])
                          } else {
                            handleFilterChange(
                              "skills",
                              searchFilters.skills.filter((s) => s !== skill),
                            )
                          }
                        }}
                      />
                      <label
                        htmlFor={`skill-${skill}`}
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-[#6A5ACD]">Langues parlées</Label>
                <div className="flex max-h-32 flex-wrap gap-2 overflow-y-auto rounded-md border border-[#FFDEE9] p-2">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox
                        id={`language-${language}`}
                        checked={searchFilters.languages.includes(language)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            handleFilterChange("languages", [...searchFilters.languages, language])
                          } else {
                            handleFilterChange(
                              "languages",
                              searchFilters.languages.filter((l) => l !== language),
                            )
                          }
                        }}
                      />
                      <label
                        htmlFor={`language-${language}`}
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="immediateStart"
                  checked={searchFilters.immediateStart}
                  onCheckedChange={(checked) => handleFilterChange("immediateStart", checked)}
                />
                <Label htmlFor="immediateStart" className="text-[#6A5ACD]">
                  Disponible immédiatement
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="withReviews"
                  checked={searchFilters.withReviews}
                  onCheckedChange={(checked) => handleFilterChange("withReviews", checked)}
                />
                <Label htmlFor="withReviews" className="text-[#6A5ACD]">
                  Avec avis
                </Label>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Search className="h-4 w-4" />
            Rechercher
          </Button>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#6A5ACD]">{searchResults.length} nounous trouvées</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Trier par:</span>
          <Select defaultValue="distance">
            <SelectTrigger className="h-8 w-[180px] border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Note</SelectItem>
              <SelectItem value="experience">Expérience</SelectItem>
              <SelectItem value="price-asc">Prix (croissant)</SelectItem>
              <SelectItem value="price-desc">Prix (décroissant)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="mb-6 w-auto">
          <TabsTrigger value="grid" className="data-[state=active]:bg-[#6A5ACD] data-[state=active]:text-white">
            Grille
          </TabsTrigger>
          <TabsTrigger value="list" className="data-[state=active]:bg-[#6A5ACD] data-[state=active]:text-white">
            Liste
          </TabsTrigger>
          <TabsTrigger value="map" className="data-[state=active]:bg-[#6A5ACD] data-[state=active]:text-white">
            Carte
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((nounou) => (
              <Card key={nounou.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute right-2 top-2 z-10">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 rounded-full ${
                          nounou.isFavorite
                            ? "bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                            : "bg-white/80 text-gray-400 hover:bg-white hover:text-red-500"
                        }`}
                        onClick={() => toggleFavorite(nounou.id)}
                      >
                        <Heart className={`h-5 w-5 ${nounou.isFavorite ? "fill-current" : ""}`} />
                        <span className="sr-only">
                          {nounou.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                        </span>
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
        </TabsContent>

        <TabsContent value="list">
          <div className="space-y-4">
            {searchResults.map((nounou) => (
              <Card key={nounou.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row min-h-[250px]">
                    <div className="relative md:w-1/4">
                      <div className="absolute right-2 top-2 z-10">
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`h-8 w-8 rounded-full ${
                            nounou.isFavorite
                              ? "bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                              : "bg-white/80 text-gray-400 hover:bg-white hover:text-red-500"
                          }`}
                          onClick={() => toggleFavorite(nounou.id)}
                        >
                          <Heart className={`h-5 w-5 ${nounou.isFavorite ? "fill-current" : ""}`} />
                          <span className="sr-only">
                            {nounou.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                          </span>
                        </Button>
                      </div>
                      <div className="h-[250px] w-full overflow-hidden">
                        <Image
                          src={nounou.image || "/placeholder.svg"}
                          alt={nounou.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-[#6A5ACD]">{nounou.name}</h3>
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">
                            {nounou.rating} ({nounou.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="mb-3 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-2">
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
                        <div className="flex items-center">
                          <Info className="mr-1 h-4 w-4 text-gray-400" />
                          <span>
                            {nounou.age} ans • {nounou.experience} d'expérience
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700">Tarif: {nounou.hourlyRate}</p>
                      </div>

                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                          {nounou.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-[#FFDEE9]/30 text-[#6A5ACD]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                        >
                          Contacter
                        </Button>
                        <Link href={`/family/nounou/${nounou.id}`}>
                          <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                            Voir le profil
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

        <TabsContent value="map">
          <div className="rounded-lg border border-[#FFDEE9] p-0 text-center">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              {/* Simulation de carte */}
              <div className="absolute inset-0 bg-gray-100">
                <div className="h-full w-full">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    {/* Fond de carte */}
                    <rect width="100%" height="100%" fill="#f0f0f0" />

                    {/* Routes principales */}
                    <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#d1d5db" strokeWidth="8" />
                    <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#d1d5db" strokeWidth="8" />
                    <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="#d1d5db" strokeWidth="8" />
                    <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="#d1d5db" strokeWidth="8" />
                    <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#d1d5db" strokeWidth="8" />
                    <line x1="80%" y1="10%" x2="80%" y2="90%" stroke="#d1d5db" strokeWidth="8" />

                    {/* Routes secondaires */}
                    <line x1="10%" y1="35%" x2="90%" y2="35%" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="35%" y1="10%" x2="35%" y2="90%" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="65%" y1="10%" x2="65%" y2="90%" stroke="#e5e7eb" strokeWidth="4" />

                    {/* Zones vertes (parcs) */}
                    <rect x="25%" y="25%" width="15%" height="15%" fill="#d1fae5" rx="5" />
                    <rect x="60%" y="60%" width="15%" height="15%" fill="#d1fae5" rx="5" />
                    <rect x="70%" y="25%" width="10%" height="10%" fill="#d1fae5" rx="5" />

                    {/* Zones bleues (eau) */}
                    <rect x="10%" y="70%" width="20%" height="10%" fill="#dbeafe" rx="5" />

                    {/* Marqueurs des nounous */}
                    <circle cx="30%" cy="40%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />
                    <circle cx="45%" cy="25%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />
                    <circle cx="60%" cy="45%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />
                    <circle cx="75%" cy="30%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />
                    <circle cx="55%" cy="70%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />
                    <circle cx="25%" cy="65%" r="10" fill="#6A5ACD" stroke="white" strokeWidth="2" />

                    {/* Marqueur de position actuelle */}
                    <circle cx="50%" cy="50%" r="12" fill="#FFDEE9" stroke="white" strokeWidth="3" />
                    <circle cx="50%" cy="50%" r="4" fill="white" />
                  </svg>

                  {/* Légende de la carte */}
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 shadow-md">
                    <div className="mb-2 text-left text-sm font-semibold text-[#6A5ACD]">Légende</div>
                    <div className="flex items-center space-x-2 text-left text-xs">
                      <div className="h-3 w-3 rounded-full bg-[#FFDEE9]"></div>
                      <span>Votre position</span>
                    </div>
                    <div className="flex items-center space-x-2 text-left text-xs">
                      <div className="h-3 w-3 rounded-full bg-[#6A5ACD]"></div>
                      <span>Nounous disponibles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contrôles de la carte */}
              <div className="absolute right-4 top-4 flex flex-col space-y-2">
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white text-[#6A5ACD] shadow-md hover:bg-gray-100"
                >
                  +
                </Button>
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white text-[#6A5ACD] shadow-md hover:bg-gray-100"
                >
                  -
                </Button>
              </div>

              {/* Popup d'information */}
              <div className="absolute left-[28%] top-[32%] w-64 rounded-lg bg-white p-3 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-[#6A5ACD]">Marie Dupont</h4>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-xs">4.8</span>
                  </div>
                </div>
                <p className="mb-1 text-xs text-gray-600">Lyon 3ème • 1.2 km</p>
                <p className="mb-2 text-xs text-gray-600">Disponibilité: Temps plein</p>
                <div className="flex justify-end">
                  <Button size="sm" className="h-7 rounded-full bg-[#6A5ACD] px-3 py-1 text-xs text-white">
                    Voir profil
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-[#6A5ACD]">Carte interactive</h3>
              <p className="mb-4 text-gray-600">
                Visualisez les nounous disponibles autour de votre localisation sur une carte interactive.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                  Activer la géolocalisation
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                >
                  Filtrer sur la carte
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          Précédent
        </Button>
        <Button className="mx-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">1</Button>
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          2
        </Button>
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          3
        </Button>
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          Suivant
        </Button>
      </div>
    </main>
  )
}
