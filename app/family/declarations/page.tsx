"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, CheckCircle, XCircle, Download, FileText, Calendar, AlertCircle } from "lucide-react"

export default function FamilyDeclarationsPage() {
  const [declarations, setDeclarations] = useState([
    {
      id: 1,
      nounou: "Marie Dupont",
      month: "Avril 2023",
      status: "pending",
      submittedDate: "02/05/2023",
      children: [
        {
          name: "Emma Martin",
          regularHours: 160,
          overtimeHours: 4,
          absenceHours: 0,
          mealCount: 20,
        },
        {
          name: "Lucas Martin",
          regularHours: 160,
          overtimeHours: 4,
          absenceHours: 0,
          mealCount: 20,
        },
      ],
      totalAmount: 1250.75,
    },
    {
      id: 2,
      nounou: "Marie Dupont",
      month: "Mars 2023",
      status: "approved",
      submittedDate: "02/04/2023",
      approvedDate: "05/04/2023",
      children: [
        {
          name: "Emma Martin",
          regularHours: 168,
          overtimeHours: 0,
          absenceHours: 8,
          mealCount: 21,
        },
        {
          name: "Lucas Martin",
          regularHours: 168,
          overtimeHours: 0,
          absenceHours: 8,
          mealCount: 21,
        },
      ],
      totalAmount: 1180.5,
    },
    {
      id: 3,
      nounou: "Marie Dupont",
      month: "Février 2023",
      status: "approved",
      submittedDate: "02/03/2023",
      approvedDate: "04/03/2023",
      children: [
        {
          name: "Emma Martin",
          regularHours: 152,
          overtimeHours: 0,
          absenceHours: 0,
          mealCount: 19,
        },
        {
          name: "Lucas Martin",
          regularHours: 152,
          overtimeHours: 0,
          absenceHours: 0,
          mealCount: 19,
        },
      ],
      totalAmount: 1120.25,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="mr-1 h-3 w-3" />
            En attente
          </Badge>
        )
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="mr-1 h-3 w-3" />
            Validée
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="mr-1 h-3 w-3" />
            Refusée
          </Badge>
        )
      default:
        return <Badge>Inconnu</Badge>
    }
  }

  const handleApproveDeclaration = (id: number) => {
    setDeclarations((prev) =>
      prev.map((declaration) =>
        declaration.id === id
          ? {
              ...declaration,
              status: "approved",
              approvedDate: new Date().toLocaleDateString("fr-FR"),
            }
          : declaration,
      ),
    )
    alert("Déclaration validée avec succès ! Une fiche de paie a été générée.")
  }

  const handleRejectDeclaration = (id: number) => {
    setDeclarations((prev) =>
      prev.map((declaration) =>
        declaration.id === id
          ? {
              ...declaration,
              status: "rejected",
            }
          : declaration,
      ),
    )
    alert("Déclaration refusée. Un message a été envoyé à la nounou.")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Déclarations mensuelles</h1>
        <p className="text-gray-600">Validez les déclarations mensuelles de vos assistantes maternelles</p>
      </div>

      <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <h3 className="font-medium text-blue-800">Pourquoi valider les déclarations ?</h3>
            <p className="text-sm text-blue-700">
              La validation des déclarations mensuelles permet de confirmer les heures travaillées par votre assistante
              maternelle et de générer automatiquement la fiche de paie correspondante. Vérifiez bien les informations
              avant de valider.
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="approved">Validées</TabsTrigger>
          <TabsTrigger value="all">Toutes</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <div className="grid gap-6">
            {declarations.filter((d) => d.status === "pending").length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]/30">
                    <CheckCircle className="h-8 w-8 text-[#6A5ACD]" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Aucune déclaration en attente</h2>
                  <p className="text-gray-600">Toutes les déclarations ont été traitées.</p>
                </CardContent>
              </Card>
            ) : (
              declarations
                .filter((d) => d.status === "pending")
                .map((declaration) => (
                  <Card key={declaration.id} className="overflow-hidden">
                    <CardHeader className="bg-[#FFDEE9]/10 pb-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg text-[#6A5ACD]">
                            Déclaration {declaration.month} - {declaration.nounou}
                          </CardTitle>
                          <CardDescription>
                            Soumise le {declaration.submittedDate} • {getStatusBadge(declaration.status)}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#6A5ACD]">{declaration.totalAmount.toFixed(2)} €</div>
                          <div className="text-xs text-gray-500">Montant total</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="mb-2 font-medium text-[#6A5ACD]">Détails des heures</h3>
                          <div className="space-y-3">
                            {declaration.children.map((child, index) => (
                              <div key={index} className="rounded-lg bg-gray-50 p-3">
                                <div className="mb-2 font-medium">{child.name}</div>
                                <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                                  <div>
                                    <span className="text-gray-500">Heures normales:</span>
                                    <span className="ml-1 font-medium">{child.regularHours}h</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Heures supplémentaires:</span>
                                    <span className="ml-1 font-medium">{child.overtimeHours}h</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Absences:</span>
                                    <span className="ml-1 font-medium">{child.absenceHours}h</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Repas:</span>
                                    <span className="ml-1 font-medium">{child.mealCount}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-between gap-2 border-t bg-gray-50 px-6 py-4">
                      <Button
                        variant="outline"
                        className="gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() => handleRejectDeclaration(declaration.id)}
                      >
                        <XCircle className="h-4 w-4" />
                        Refuser
                      </Button>
                      <Button
                        className="gap-2 bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                        onClick={() => handleApproveDeclaration(declaration.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Valider et générer la fiche de paie
                      </Button>
                    </CardFooter>
                  </Card>
                ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="approved">
          <div className="grid gap-6">
            {declarations
              .filter((d) => d.status === "approved")
              .map((declaration) => (
                <Card key={declaration.id} className="overflow-hidden">
                  <CardHeader className="bg-[#D1F2EB]/10 pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg text-[#6A5ACD]">
                          Déclaration {declaration.month} - {declaration.nounou}
                        </CardTitle>
                        <CardDescription>
                          Validée le {declaration.approvedDate} • {getStatusBadge(declaration.status)}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#6A5ACD]">{declaration.totalAmount.toFixed(2)} €</div>
                        <div className="text-xs text-gray-500">Montant total</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 font-medium text-[#6A5ACD]">Détails des heures</h3>
                        <div className="space-y-3">
                          {declaration.children.map((child, index) => (
                            <div key={index} className="rounded-lg bg-gray-50 p-3">
                              <div className="mb-2 font-medium">{child.name}</div>
                              <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                                <div>
                                  <span className="text-gray-500">Heures normales:</span>
                                  <span className="ml-1 font-medium">{child.regularHours}h</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Heures supplémentaires:</span>
                                  <span className="ml-1 font-medium">{child.overtimeHours}h</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Absences:</span>
                                  <span className="ml-1 font-medium">{child.absenceHours}h</span>
                                </div>
                                <div>
                                  <span className="text-gray-500">Repas:</span>
                                  <span className="ml-1 font-medium">{child.mealCount}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2 border-t bg-gray-50 px-6 py-4">
                    <Button variant="outline" className="gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                      <Calendar className="h-4 w-4" />
                      Historique
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                        <FileText className="h-4 w-4" />
                        Voir la fiche de paie
                      </Button>
                      <Button className="gap-2 bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="grid gap-6">
            {declarations.map((declaration) => (
              <Card key={declaration.id} className="overflow-hidden">
                <CardHeader
                  className={`${declaration.status === "approved" ? "bg-[#D1F2EB]/10" : "bg-[#FFDEE9]/10"} pb-3`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg text-[#6A5ACD]">
                        Déclaration {declaration.month} - {declaration.nounou}
                      </CardTitle>
                      <CardDescription>
                        {declaration.status === "approved"
                          ? `Validée le ${declaration.approvedDate}`
                          : `Soumise le ${declaration.submittedDate}`}{" "}
                        • {getStatusBadge(declaration.status)}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#6A5ACD]">{declaration.totalAmount.toFixed(2)} €</div>
                      <div className="text-xs text-gray-500">Montant total</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-medium text-[#6A5ACD]">Détails des heures</h3>
                      <div className="space-y-3">
                        {declaration.children.map((child, index) => (
                          <div key={index} className="rounded-lg bg-gray-50 p-3">
                            <div className="mb-2 font-medium">{child.name}</div>
                            <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                              <div>
                                <span className="text-gray-500">Heures normales:</span>
                                <span className="ml-1 font-medium">{child.regularHours}h</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Heures supplémentaires:</span>
                                <span className="ml-1 font-medium">{child.overtimeHours}h</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Absences:</span>
                                <span className="ml-1 font-medium">{child.absenceHours}h</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Repas:</span>
                                <span className="ml-1 font-medium">{child.mealCount}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap justify-between gap-2 border-t bg-gray-50 px-6 py-4">
                  {declaration.status === "pending" ? (
                    <>
                      <Button
                        variant="outline"
                        className="gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                        onClick={() => handleRejectDeclaration(declaration.id)}
                      >
                        <XCircle className="h-4 w-4" />
                        Refuser
                      </Button>
                      <Button
                        className="gap-2 bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                        onClick={() => handleApproveDeclaration(declaration.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Valider et générer la fiche de paie
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                        <Calendar className="h-4 w-4" />
                        Historique
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                        >
                          <FileText className="h-4 w-4" />
                          Voir la fiche de paie
                        </Button>
                        <Button className="gap-2 bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                          <Download className="h-4 w-4" />
                          Télécharger
                        </Button>
                      </div>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
