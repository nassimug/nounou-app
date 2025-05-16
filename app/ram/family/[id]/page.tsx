"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Baby,
  FileText,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Heart,
  Info,
  Edit,
  Download,
} from "lucide-react"

export default function RamFamilyDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("profile")

  // Données simulées pour la famille
  const family = {
    id: Number.parseInt(params.id),
    name: "Famille Martin",
    parents: "Thomas et Sophie Martin",
    address: "15 rue des Lilas, 69003 Lyon",
    email: "martin@example.com",
    phone: "06 12 34 56 78",
    registrationDate: "01/09/2022",
    status: "Actif",
    children: [
      {
        id: 1,
        name: "Emma Martin",
        age: "3 ans",
        birthdate: "15/05/2020",
        image: "/placeholder.svg?height=100&width=100",
        nounou: {
          name: "Marie Dupont",
          id: 1,
        },
        allergies: ["Arachides", "Fraises"],
        medicalInfo: "Asthme léger",
      },
      {
        id: 2,
        name: "Lucas Martin",
        age: "1 an",
        birthdate: "10/11/2022",
        image: "/placeholder.svg?height=100&width=100",
        nounou: {
          name: "Marie Dupont",
          id: 1,
        },
        allergies: [],
        medicalInfo: "",
      },
    ],
    contracts: [
      {
        id: 1,
        nounou: "Marie Dupont",
        startDate: "01/09/2022",
        endDate: "",
        status: "Actif",
        children: ["Emma Martin", "Lucas Martin"],
        hourlyRate: "4.50€",
        hoursPerWeek: 40,
        lastUpdated: "15/01/2023",
      },
    ],
    declarations: [
      {
        id: 1,
        month: "Avril 2023",
        nounou: "Marie Dupont",
        status: "Validée",
        submittedDate: "02/05/2023",
        approvedDate: "05/05/2023",
        totalAmount: 1250.75,
      },
      {
        id: 2,
        month: "Mars 2023",
        nounou: "Marie Dupont",
        status: "Validée",
        submittedDate: "02/04/2023",
        approvedDate: "05/04/2023",
        totalAmount: 1180.5,
      },
    ],
    notes: [
      {
        id: 1,
        date: "15/03/2023",
        author: "Céline Dubois",
        content:
          "Entretien téléphonique avec Mme Martin concernant les horaires atypiques. La famille a besoin d'une garde tôt le matin (6h30) deux jours par semaine.",
      },
      {
        id: 2,
        date: "10/01/2023",
        author: "Céline Dubois",
        content:
          "Visite à domicile pour évaluer les besoins de la famille. Deux enfants en bas âge, parents travaillant tous les deux à temps plein.",
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Actif":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "En recherche":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "En attente":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Clock className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Validée":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      case "Refusée":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="mr-1 h-3 w-3" />
            {status}
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/families" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des familles
      </Link>

      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#6A5ACD]">{family.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Inscrit le {family.registrationDate}</span>
            </div>
            <span className="text-gray-400">•</span>
            {getStatusBadge(family.status)}
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={`/ram/messages?contact=${family.name.toLowerCase().replace(" ", "-")}`}>
            <Button
              variant="outline"
              className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
            >
              <MessageCircle className="h-4 w-4" />
              Contacter
            </Button>
          </Link>
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Edit className="h-4 w-4" />
            Modifier
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profile" onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="children">Enfants</TabsTrigger>
          <TabsTrigger value="contracts">Contrats</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-0">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Informations de la famille</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                        <User className="h-4 w-4" />
                        Parents
                      </h3>
                      <p className="text-gray-700">{family.parents}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                        <Calendar className="h-4 w-4" />
                        Date d'inscription
                      </h3>
                      <p className="text-gray-700">{family.registrationDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                      <MapPin className="h-4 w-4" />
                      Adresse
                    </h3>
                    <p className="text-gray-700">{family.address}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                        <Phone className="h-4 w-4" />
                        Téléphone
                      </h3>
                      <p className="text-gray-700">{family.phone}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                        <Mail className="h-4 w-4" />
                        Email
                      </h3>
                      <p className="text-gray-700">{family.email}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                      <Baby className="h-4 w-4" />
                      Enfants
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {family.children.map((child) => (
                        <div
                          key={child.id}
                          className="flex items-center gap-1 rounded-full bg-[#FFDEE9]/30 px-3 py-1 text-sm text-[#6A5ACD]"
                        >
                          <span>
                            {child.name} ({child.age})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Résumé</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-gray-500">Nombre d'enfants</h3>
                    <p className="text-2xl font-bold text-[#6A5ACD]">{family.children.length}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-gray-500">Contrats actifs</h3>
                    <p className="text-2xl font-bold text-[#6A5ACD]">
                      {family.contracts.filter((c) => c.status === "Actif").length}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-gray-500">Dernière déclaration</h3>
                    <p className="text-lg font-semibold text-[#6A5ACD]">{family.declarations[0].month}</p>
                    <p className="text-sm text-gray-600">{family.declarations[0].totalAmount.toFixed(2)} €</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl text-[#6A5ACD]">Actions rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <FileText className="h-4 w-4" />
                    Générer un rapport
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <Download className="h-4 w-4" />
                    Exporter les données
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <Edit className="h-4 w-4" />
                    Ajouter une note
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="children" className="mt-0">
          <div className="grid gap-6">
            {family.children.map((child) => (
              <Card key={child.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex h-48 w-full items-center justify-center bg-[#FFDEE9]/20 p-4 md:h-auto md:w-48">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full">
                        <img
                          src={"/emma.png"}
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
                            Assistante maternelle
                          </h3>
                          <div className="space-y-1 text-sm">
                            {child.nounou ? (
                              <Link
                                href={`/ram/nounou/${child.nounou.id}`}
                                className="font-medium text-[#6A5ACD] hover:underline"
                              >
                                {child.nounou.name}
                              </Link>
                            ) : (
                              <p className="italic text-gray-500">Aucune nounou assignée</p>
                            )}
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

                      <div className="mt-auto flex justify-end gap-2">
                        <Button
                          variant="outline"
                          className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                        >
                          <Edit className="h-4 w-4" />
                          Modifier
                        </Button>
                        <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                          <FileText className="h-4 w-4" />
                          Voir le dossier complet
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contracts" className="mt-0">
          <div className="grid gap-6">
            {family.contracts.map((contract) => (
              <Card key={contract.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-xl text-[#6A5ACD]">Contrat avec {contract.nounou}</CardTitle>
                    {getStatusBadge(contract.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <h3 className="mb-1 text-sm font-medium text-gray-500">Date de début</h3>
                      <p className="font-medium text-gray-700">{contract.startDate}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-medium text-gray-500">Date de fin</h3>
                      <p className="font-medium text-gray-700">{contract.endDate || "En cours"}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-medium text-gray-500">Dernière mise à jour</h3>
                      <p className="font-medium text-gray-700">{contract.lastUpdated}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-500">Enfants concernés</h3>
                    <div className="flex flex-wrap gap-2">
                      {contract.children.map((childName, index) => (
                        <div key={index} className="rounded-full bg-[#FFDEE9]/30 px-3 py-1 text-sm text-[#6A5ACD]">
                          {childName}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-1 text-sm font-medium text-gray-500">Tarif horaire</h3>
                      <p className="font-medium text-gray-700">{contract.hourlyRate}</p>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-medium text-gray-500">Heures par semaine</h3>
                      <p className="font-medium text-gray-700">{contract.hoursPerWeek}h</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                    >
                      <Download className="h-4 w-4" />
                      Télécharger
                    </Button>
                    <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                      <FileText className="h-4 w-4" />
                      Voir les détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notes" className="mt-0">
          <div className="mb-6 flex justify-end">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Edit className="h-4 w-4" />
              Ajouter une note
            </Button>
          </div>

          <div className="space-y-6">
            {family.notes.map((note) => (
              <Card key={note.id}>
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D1F2EB]">
                        <User className="h-4 w-4 text-[#6A5ACD]" />
                      </div>
                      <span className="font-medium text-[#6A5ACD]">{note.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{note.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{note.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
