"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, CheckCircle, X, FileText, User, Clock, Eye, FileCheck } from "lucide-react"

export default function RamApprovalsPage() {
  const [pendingApprovals, setPendingApprovals] = useState({
    nounous: [
      {
        id: 1,
        name: "Sophie Moreau",
        address: "15 rue des Fleurs, 69007 Lyon",
        date: "15/04/2023",
        status: "En attente",
        experience: "15 ans",
        agrementNumber: "Demande #069-2023-0125",
      },
      {
        id: 2,
        name: "Claire Petit",
        address: "8 avenue Jean Jaurès, 69008 Lyon",
        date: "20/04/2023",
        status: "En attente",
        experience: "5 ans",
        agrementNumber: "Demande #069-2023-0136",
      },
    ],
    contracts: [
      {
        id: 1,
        family: "Famille Martin",
        nounou: "Marie Dupont",
        child: "Emma Martin",
        date: "18/04/2023",
        status: "En attente",
        startDate: "01/06/2023",
        contractType: "CDI - Temps plein",
      },
      {
        id: 2,
        family: "Famille Bernard",
        nounou: "Isabelle Laurent",
        child: "Thomas Bernard",
        date: "22/04/2023",
        status: "En attente",
        startDate: "15/05/2023",
        contractType: "CDI - Temps partiel",
      },
    ],
    declarations: [
      {
        id: 1,
        nounou: "Isabelle Laurent",
        month: "Avril 2023",
        date: "02/05/2023",
        status: "En attente",
        childrenCount: 3,
        totalHours: 480,
      },
      {
        id: 2,
        nounou: "Marie Dupont",
        month: "Avril 2023",
        date: "03/05/2023",
        status: "En attente",
        childrenCount: 2,
        totalHours: 320,
      },
    ],
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En attente":
        return "bg-yellow-100 text-yellow-800"
      case "Approuvé":
        return "bg-green-100 text-green-800"
      case "Refusé":
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

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Approbations en attente</h1>
        <p className="text-gray-600">Gérez les demandes d'approbation pour les nounous, contrats et déclarations</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="all">
            Toutes (
            {pendingApprovals.nounous.length + pendingApprovals.contracts.length + pendingApprovals.declarations.length}
            )
          </TabsTrigger>
          <TabsTrigger value="nounous">Nounous ({pendingApprovals.nounous.length})</TabsTrigger>
          <TabsTrigger value="contracts">Contrats ({pendingApprovals.contracts.length})</TabsTrigger>
          <TabsTrigger value="declarations">Déclarations ({pendingApprovals.declarations.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {pendingApprovals.nounous.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-[#6A5ACD]">Assistantes maternelles</h2>
              <div className="grid gap-4">
                {pendingApprovals.nounous.map((nounou) => (
                  <Card key={nounou.id} className="border-[#D1F2EB]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1F2EB] text-[#6A5ACD]">
                            <User className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium text-[#6A5ACD]">{nounou.name}</h3>
                            <p className="text-sm text-gray-600">{nounou.address}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Reçu le {nounou.date}
                              </span>
                              <span>{nounou.experience} d'expérience</span>
                              <span>{nounou.agrementNumber}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(nounou.status)}>{nounou.status}</Badge>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="ml-1 hidden md:inline">Voir</span>
                            </Button>
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
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pendingApprovals.contracts.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-[#6A5ACD]">Contrats</h2>
              <div className="grid gap-4">
                {pendingApprovals.contracts.map((contract) => (
                  <Card key={contract.id} className="border-[#FFDEE9]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFDEE9] text-[#6A5ACD]">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium text-[#6A5ACD]">
                              {contract.family} - {contract.nounou}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Contrat pour {contract.child} - Début: {contract.startDate}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Reçu le {contract.date}
                              </span>
                              <span>{contract.contractType}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="ml-1 hidden md:inline">Voir</span>
                            </Button>
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
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pendingApprovals.declarations.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-semibold text-[#6A5ACD]">Déclarations mensuelles</h2>
              <div className="grid gap-4">
                {pendingApprovals.declarations.map((declaration) => (
                  <Card key={declaration.id} className="border-[#C7E9FB]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7E9FB] text-[#6A5ACD]">
                            <FileCheck className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium text-[#6A5ACD]">
                              {declaration.nounou} - {declaration.month}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {declaration.childrenCount} enfant{declaration.childrenCount > 1 ? "s" : ""} -{" "}
                              {declaration.totalHours} heures
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Reçu le {declaration.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(declaration.status)}>{declaration.status}</Badge>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="ml-1 hidden md:inline">Voir</span>
                            </Button>
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
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="nounous" className="mt-0">
          <div className="grid gap-4">
            {pendingApprovals.nounous.map((nounou) => (
              <Card key={nounou.id} className="border-[#D1F2EB]">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1F2EB] text-[#6A5ACD]">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6A5ACD]">{nounou.name}</h3>
                        <p className="text-sm text-gray-600">{nounou.address}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Reçu le {nounou.date}
                          </span>
                          <span>{nounou.experience} d'expérience</span>
                          <span>{nounou.agrementNumber}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(nounou.status)}>{nounou.status}</Badge>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="ml-1 hidden md:inline">Voir</span>
                        </Button>
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
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contracts" className="mt-0">
          <div className="grid gap-4">
            {pendingApprovals.contracts.map((contract) => (
              <Card key={contract.id} className="border-[#FFDEE9]">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFDEE9] text-[#6A5ACD]">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6A5ACD]">
                          {contract.family} - {contract.nounou}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Contrat pour {contract.child} - Début: {contract.startDate}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Reçu le {contract.date}
                          </span>
                          <span>{contract.contractType}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="ml-1 hidden md:inline">Voir</span>
                        </Button>
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
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="declarations" className="mt-0">
          <div className="grid gap-4">
            {pendingApprovals.declarations.map((declaration) => (
              <Card key={declaration.id} className="border-[#C7E9FB]">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7E9FB] text-[#6A5ACD]">
                        <FileCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6A5ACD]">
                          {declaration.nounou} - {declaration.month}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {declaration.childrenCount} enfant{declaration.childrenCount > 1 ? "s" : ""} -{" "}
                          {declaration.totalHours} heures
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Reçu le {declaration.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(declaration.status)}>{declaration.status}</Badge>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                        >
                          <Eye className="h-4 w-4" />
                          <span className="ml-1 hidden md:inline">Voir</span>
                        </Button>
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
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
