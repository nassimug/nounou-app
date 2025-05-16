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
  Search,
  Filter,
  Download,
  Plus,
  Calendar,
  FileText,
  Clock,
  CheckCircle,
  X,
  Eye,
} from "lucide-react"

export default function RamContractsPage() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      family: "Famille Martin",
      nounou: "Marie Dupont",
      child: "Emma Martin",
      startDate: "01/09/2022",
      endDate: "",
      type: "CDI - Temps plein",
      hours: "40h/semaine",
      status: "Actif",
      lastUpdate: "15/09/2022",
    },
    {
      id: 2,
      family: "Famille Martin",
      nounou: "Marie Dupont",
      child: "Lucas Martin",
      startDate: "01/09/2022",
      endDate: "",
      type: "CDI - Temps plein",
      hours: "40h/semaine",
      status: "Actif",
      lastUpdate: "15/09/2022",
    },
    {
      id: 3,
      family: "Famille Dubois",
      nounou: "Isabelle Laurent",
      child: "Léa Dubois",
      startDate: "15/01/2023",
      endDate: "",
      type: "CDI - Temps partiel",
      hours: "25h/semaine",
      status: "Actif",
      lastUpdate: "20/01/2023",
    },
    {
      id: 4,
      family: "Famille Petit",
      nounou: "Sophie Moreau",
      child: "Chloé Petit",
      startDate: "05/11/2022",
      endDate: "",
      type: "CDI - Temps plein",
      hours: "35h/semaine",
      status: "Actif",
      lastUpdate: "10/11/2022",
    },
    {
      id: 5,
      family: "Famille Bernard",
      nounou: "Isabelle Laurent",
      child: "Thomas Bernard",
      startDate: "15/05/2023",
      endDate: "",
      type: "CDI - Temps partiel",
      hours: "20h/semaine",
      status: "En attente",
      lastUpdate: "22/04/2023",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800"
      case "En attente":
        return "bg-yellow-100 text-yellow-800"
      case "Terminé":
        return "bg-gray-100 text-gray-800"
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
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Contrats</h1>
          <p className="text-gray-600">Gérez les contrats entre familles et assistantes maternelles</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
          >
            <Download className="h-4 w-4" />
            Exporter
          </Button>
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Plus className="h-4 w-4" />
            Nouveau contrat
          </Button>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-[#C7E9FB]/20 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-[#6A5ACD]" />
          <h2 className="text-xl font-semibold text-[#6A5ACD]">Recherche</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="family" className="text-[#6A5ACD]">
              Famille
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="family" className="mt-1">
                <SelectValue placeholder="Toutes les familles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les familles</SelectItem>
                <SelectItem value="martin">Famille Martin</SelectItem>
                <SelectItem value="dubois">Famille Dubois</SelectItem>
                <SelectItem value="petit">Famille Petit</SelectItem>
                <SelectItem value="bernard">Famille Bernard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="nounou" className="text-[#6A5ACD]">
              Assistante maternelle
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="nounou" className="mt-1">
                <SelectValue placeholder="Toutes les nounous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les nounous</SelectItem>
                <SelectItem value="dupont">Marie Dupont</SelectItem>
                <SelectItem value="laurent">Isabelle Laurent</SelectItem>
                <SelectItem value="moreau">Sophie Moreau</SelectItem>
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
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="waiting">En attente</SelectItem>
                <SelectItem value="ended">Terminé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="type" className="text-[#6A5ACD]">
              Type de contrat
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="type" className="mt-1">
                <SelectValue placeholder="Tous les types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="fulltime">Temps plein</SelectItem>
                <SelectItem value="parttime">Temps partiel</SelectItem>
                <SelectItem value="complete">Année complète</SelectItem>
                <SelectItem value="incomplete">Année incomplète</SelectItem>
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
              Contrats récents
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="filter2" />
            <label
              htmlFor="filter2"
              className="text-sm font-medium leading-none text-[#6A5ACD] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              En attente d'approbation
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
            className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
          >
            <Filter className="h-4 w-4" />
            Filtres avancés
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#6A5ACD]">{searchResults.length} contrats trouvés</h2>
      </div>

      <div className="grid gap-4">
        {searchResults.map((contract) => (
          <Card key={contract.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7E9FB] text-[#6A5ACD]">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#6A5ACD]">
                      {contract.family} - {contract.nounou}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Contrat pour {contract.child} - {contract.type}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Début: {contract.startDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {contract.hours}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Mis à jour: {contract.lastUpdate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                    >
                      <Eye className="h-4 w-4" />
                      <span className="ml-1 hidden md:inline">Voir</span>
                    </Button>
                    {contract.status === "En attente" && (
                      <>
                        <Button size="sm" className="rounded-full bg-green-600 text-white hover:bg-green-700">
                          <CheckCircle className="h-4 w-4" />
                          <span className="ml-1 hidden md:inline">Approuver</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                          <span className="ml-1 hidden md:inline">Refuser</span>
                        </Button>
                      </>
                    )}
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
