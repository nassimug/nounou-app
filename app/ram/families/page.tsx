"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  MapPin,
  User,
  Search,
  Filter,
  Download,
  Plus,
  Calendar,
  Baby,
  Mail,
  Phone,
  FileText,
  Clock,
  Heart,
} from "lucide-react"

export default function RamFamiliesPage() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Famille Martin",
      parents: "Thomas et Sophie Martin",
      address: "15 rue des Lilas, 69003 Lyon",
      email: "martin@example.com",
      phone: "06 12 34 56 78",
      children: [
        { name: "Emma Martin", age: "3 ans", nounou: "Marie Dupont" },
        { name: "Lucas Martin", age: "1 an", nounou: "Marie Dupont" },
      ],
      status: "Actif",
      registrationDate: "01/09/2022",
      lastContact: "15/05/2023",
      notes: "Famille avec deux enfants, bien intégrée dans le système",
      priority: "Normal",
    },
    {
      id: 2,
      name: "Famille Dubois",
      parents: "Pierre et Julie Dubois",
      address: "8 avenue Jean Jaurès, 69007 Lyon",
      email: "dubois@example.com",
      phone: "06 23 45 67 89",
      children: [{ name: "Léa Dubois", age: "2 ans", nounou: "Isabelle Laurent" }],
      status: "Actif",
      registrationDate: "15/01/2023",
      lastContact: "10/05/2023",
      notes: "Premier enfant, parents demandeurs de conseils",
      priority: "Normal",
    },
    {
      id: 3,
      name: "Famille Bernard",
      parents: "Nicolas et Marie Bernard",
      address: "25 rue Garibaldi, 69003 Lyon",
      email: "bernard@example.com",
      phone: "06 34 56 78 90",
      children: [{ name: "Thomas Bernard", age: "2 ans", nounou: "En recherche" }],
      status: "En recherche",
      registrationDate: "10/03/2023",
      lastContact: "18/05/2023",
      notes: "Recherche active d'une nounou, horaires atypiques",
      priority: "Élevé",
    },
    {
      id: 4,
      name: "Famille Petit",
      parents: "Laurent et Céline Petit",
      address: "12 rue de la République, 69002 Lyon",
      email: "petit@example.com",
      phone: "06 45 67 89 01",
      children: [
        { name: "Chloé Petit", age: "3 ans", nounou: "Sophie Moreau" },
        { name: "Hugo Petit", age: "1 an", nounou: "Sophie Moreau" },
      ],
      status: "Actif",
      registrationDate: "05/11/2022",
      lastContact: "02/05/2023",
      notes: "Famille avec deux enfants, situation stable",
      priority: "Normal",
    },
    {
      id: 5,
      name: "Famille Moreau",
      parents: "Julien et Aurélie Moreau",
      address: "5 rue Paul Bert, 69003 Lyon",
      email: "moreau@example.com",
      phone: "06 56 78 90 12",
      children: [{ name: "Zoé Moreau", age: "2 ans", nounou: "En attente" }],
      status: "En attente",
      registrationDate: "20/04/2023",
      lastContact: "12/05/2023",
      notes: "Dossier en cours de traitement, besoin urgent",
      priority: "Élevé",
    },
    {
      id: 6,
      name: "Famille Leroy",
      parents: "Antoine et Clara Leroy",
      address: "18 rue Vendôme, 69006 Lyon",
      email: "leroy@example.com",
      phone: "06 67 89 01 23",
      children: [
        { name: "Mathis Leroy", age: "4 ans", nounou: "Françoise Blanc" },
        { name: "Jade Leroy", age: "2 ans", nounou: "Françoise Blanc" },
        { name: "Noah Leroy", age: "6 mois", nounou: "Françoise Blanc" },
      ],
      status: "Actif",
      registrationDate: "10/10/2021",
      lastContact: "05/05/2023",
      notes: "Famille nombreuse, bien organisée",
      priority: "Normal",
    },
  ])

  const [searchFilters, setSearchFilters] = useState({
    city: "all",
    district: "all",
    status: "all",
    childAge: "all",
    newRegistrations: false,
    withoutNounou: false,
  })

  const handleFilterChange = (field: string, value: any) => {
    setSearchFilters((prev) => ({ ...prev, [field]: value }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800"
      case "En recherche":
        return "bg-yellow-100 text-yellow-800"
      case "En attente":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Élevé":
        return "bg-red-100 text-red-800"
      case "Normal":
        return "bg-blue-100 text-blue-800"
      case "Faible":
        return "bg-green-100 text-green-800"
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
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Familles</h1>
          <p className="text-gray-600">Gérez les familles de votre secteur</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
          >
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Link href="/ram/add-family">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Plus className="h-4 w-4" />
              Ajouter une famille
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-[#FFDEE9]/20 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-[#6A5ACD]" />
          <h2 className="text-xl font-semibold text-[#6A5ACD]">Recherche</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="search" className="text-[#6A5ACD]">
              Recherche par nom
            </Label>
            <Input
              id="search"
              placeholder="Nom de famille"
              className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
            />
          </div>
          <div>
            <Label htmlFor="city" className="text-[#6A5ACD]">
              Ville
            </Label>
            <Select value={searchFilters.city} onValueChange={(value) => handleFilterChange("city", value)}>
              <SelectTrigger id="city" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
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
            <Select value={searchFilters.district} onValueChange={(value) => handleFilterChange("district", value)}>
              <SelectTrigger id="district" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
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
            <Select value={searchFilters.status} onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger id="status" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Tous les statuts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="searching">En recherche</SelectItem>
                <SelectItem value="waiting">En attente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="childAge" className="text-[#6A5ACD]">
              Âge des enfants
            </Label>
            <Select value={searchFilters.childAge} onValueChange={(value) => handleFilterChange("childAge", value)}>
              <SelectTrigger id="childAge" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Tous les âges" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="0-1">0-1 an</SelectItem>
                <SelectItem value="1-2">1-2 ans</SelectItem>
                <SelectItem value="2-3">2-3 ans</SelectItem>
                <SelectItem value="3+">3 ans et plus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="priority" className="text-[#6A5ACD]">
              Priorité
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="priority" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Toutes les priorités" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="high">Élevée</SelectItem>
                <SelectItem value="normal">Normale</SelectItem>
                <SelectItem value="low">Faible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="lastContact" className="text-[#6A5ACD]">
              Dernier contact
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="lastContact" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Toutes les périodes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les périodes</SelectItem>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois-ci</SelectItem>
                <SelectItem value="quarter">Ce trimestre</SelectItem>
                <SelectItem value="old">Plus de 3 mois</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="sortBy" className="text-[#6A5ACD]">
              Trier par
            </Label>
            <Select defaultValue="name">
              <SelectTrigger id="sortBy" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                <SelectValue placeholder="Nom" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom</SelectItem>
                <SelectItem value="date">Date d'inscription</SelectItem>
                <SelectItem value="status">Statut</SelectItem>
                <SelectItem value="priority">Priorité</SelectItem>
                <SelectItem value="lastContact">Dernier contact</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newRegistrations"
              checked={searchFilters.newRegistrations}
              onCheckedChange={(checked) => handleFilterChange("newRegistrations", checked === true)}
            />
            <label
              htmlFor="newRegistrations"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Nouvelles inscriptions
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="withoutNounou"
              checked={searchFilters.withoutNounou}
              onCheckedChange={(checked) => handleFilterChange("withoutNounou", checked === true)}
            />
            <label
              htmlFor="withoutNounou"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sans nounou
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="multipleChildren" />
            <label
              htmlFor="multipleChildren"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Plusieurs enfants
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="specialNeeds" />
            <label
              htmlFor="specialNeeds"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Besoins spécifiques
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="atypicalHours" />
            <label
              htmlFor="atypicalHours"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Horaires atypiques
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
            className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
          >
            <Filter className="h-4 w-4" />
            Filtres avancés
          </Button>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#6A5ACD]">{searchResults.length} familles trouvées</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Afficher:</span>
          <Select defaultValue="card">
            <SelectTrigger className="h-8 w-[130px] border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
              <SelectValue placeholder="Vue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Cartes</SelectItem>
              <SelectItem value="list">Liste détaillée</SelectItem>
              <SelectItem value="compact">Liste compacte</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {searchResults.map((family) => (
          <Card key={family.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-[#6A5ACD]">{family.name}</h3>
                      <Badge className={getStatusColor(family.status)}>{family.status}</Badge>
                      <Badge className={getPriorityColor(family.priority)}>{family.priority}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Inscrit le {family.registrationDate}</span>
                    </div>
                  </div>

                  <div className="mb-3 flex flex-col gap-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>{family.parents}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{family.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{family.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{family.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Baby className="h-4 w-4 text-[#6A5ACD]" />
                      <span className="font-medium text-[#6A5ACD]">Enfants</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {family.children.map((child, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 rounded-full bg-[#FFDEE9]/30 px-2 py-1 text-xs text-[#6A5ACD]"
                        >
                          <span>
                            {child.name} ({child.age}) - {child.nounou}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-1 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#6A5ACD]" />
                      <span className="font-medium text-[#6A5ACD]">Notes</span>
                    </div>
                    <p className="text-sm text-gray-600">{family.notes}</p>
                  </div>

                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>Dernier contact: {family.lastContact}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-end gap-2">
                    <Link href={`/ram/family/${family.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                      >
                        Voir profil
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="ml-1 hidden md:inline">Contacter</span>
                    </Button>
                    {family.status === "En recherche" && (
                      <Button size="sm" className="rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                        <Heart className="h-4 w-4" />
                        <span className="ml-1 hidden md:inline">Proposer des nounous</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          Précédent
        </Button>
        <Button variant="outline" className="mx-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
          1
        </Button>
        <Button className="mx-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">2</Button>
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
