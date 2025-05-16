"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, FileText, Download, Calendar, Search, Printer, Mail, AlertCircle } from "lucide-react"

export default function FamilyTaxCertificatesPage() {
  const [selectedYear, setSelectedYear] = useState("2023")

  const certificates = {
    "2023": [
      {
        id: "cert-2023-annual",
        title: "Attestation fiscale annuelle 2023",
        period: "01/01/2023 - 31/12/2023",
        generatedDate: "31/01/2024",
        amount: "12 480,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2023-q4",
        title: "Attestation fiscale T4 2023",
        period: "01/10/2023 - 31/12/2023",
        generatedDate: "15/01/2024",
        amount: "3 120,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2023-q3",
        title: "Attestation fiscale T3 2023",
        period: "01/07/2023 - 30/09/2023",
        generatedDate: "15/10/2023",
        amount: "3 120,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2023-q2",
        title: "Attestation fiscale T2 2023",
        period: "01/04/2023 - 30/06/2023",
        generatedDate: "15/07/2023",
        amount: "3 120,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2023-q1",
        title: "Attestation fiscale T1 2023",
        period: "01/01/2023 - 31/03/2023",
        generatedDate: "15/04/2023",
        amount: "3 120,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
    ],
    "2022": [
      {
        id: "cert-2022-annual",
        title: "Attestation fiscale annuelle 2022",
        period: "01/01/2022 - 31/12/2022",
        generatedDate: "31/01/2023",
        amount: "11 520,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2022-q4",
        title: "Attestation fiscale T4 2022",
        period: "01/10/2022 - 31/12/2022",
        generatedDate: "15/01/2023",
        amount: "2 880,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2022-q3",
        title: "Attestation fiscale T3 2022",
        period: "01/07/2022 - 30/09/2022",
        generatedDate: "15/10/2022",
        amount: "2 880,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2022-q2",
        title: "Attestation fiscale T2 2022",
        period: "01/04/2022 - 30/06/2022",
        generatedDate: "15/07/2022",
        amount: "2 880,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
      {
        id: "cert-2022-q1",
        title: "Attestation fiscale T1 2022",
        period: "01/01/2022 - 31/03/2022",
        generatedDate: "15/04/2022",
        amount: "2 880,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
    ],
    "2021": [
      {
        id: "cert-2021-annual",
        title: "Attestation fiscale annuelle 2021",
        period: "01/01/2021 - 31/12/2021",
        generatedDate: "31/01/2022",
        amount: "10 800,00 €",
        status: "available",
        nounou: "Marie Dupont",
      },
    ],
  }

  const currentYearCertificates = certificates[selectedYear as keyof typeof certificates] || []

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Attestations fiscales</h1>
        <p className="text-gray-600">
          Consultez et téléchargez vos attestations fiscales pour vos déclarations d'impôts
        </p>
      </div>

      <div className="mb-8 rounded-lg bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <h3 className="font-medium text-blue-800">Information importante</h3>
            <p className="text-sm text-blue-700">
              Les attestations fiscales vous permettent de bénéficier du crédit d'impôt pour frais de garde d'enfant.
              Elles récapitulent les sommes versées à votre assistante maternelle. Conservez-les précieusement pour
              votre déclaration de revenus.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px] border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
              <SelectValue placeholder="Sélectionner une année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
          >
            <Search className="h-4 w-4" />
            Rechercher
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
          >
            <Mail className="h-4 w-4" />
            Recevoir par email
          </Button>
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Download className="h-4 w-4" />
            Tout télécharger
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="all">Toutes les attestations</TabsTrigger>
          <TabsTrigger value="annual">Attestations annuelles</TabsTrigger>
          <TabsTrigger value="quarterly">Attestations trimestrielles</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-4">
            {currentYearCertificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-[#FFDEE9]/30 p-6 md:w-16">
                      <FileText className="h-8 w-8 text-[#6A5ACD]" />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-[#6A5ACD]">{certificate.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>Généré le {certificate.generatedDate}</span>
                        </div>
                      </div>

                      <div className="mb-3 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-3">
                        <div>
                          <span className="font-medium">Période:</span> {certificate.period}
                        </div>
                        <div>
                          <span className="font-medium">Montant:</span>{" "}
                          <span className="font-semibold text-[#6A5ACD]">{certificate.amount}</span>
                        </div>
                        <div>
                          <span className="font-medium">Nounou:</span> {certificate.nounou}
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                        >
                          <Printer className="mr-1 h-4 w-4" />
                          Imprimer
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                        >
                          <Mail className="mr-1 h-4 w-4" />
                          Envoyer par email
                        </Button>
                        <Button size="sm" className="rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                          <Download className="mr-1 h-4 w-4" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="annual">
          <div className="grid gap-4">
            {currentYearCertificates
              .filter((cert) => cert.title.includes("annuelle"))
              .map((certificate) => (
                <Card key={certificate.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-center justify-center bg-[#FFDEE9]/30 p-6 md:w-16">
                        <FileText className="h-8 w-8 text-[#6A5ACD]" />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-[#6A5ACD]">{certificate.title}</h3>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>Généré le {certificate.generatedDate}</span>
                          </div>
                        </div>

                        <div className="mb-3 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-3">
                          <div>
                            <span className="font-medium">Période:</span> {certificate.period}
                          </div>
                          <div>
                            <span className="font-medium">Montant:</span>{" "}
                            <span className="font-semibold text-[#6A5ACD]">{certificate.amount}</span>
                          </div>
                          <div>
                            <span className="font-medium">Nounou:</span> {certificate.nounou}
                          </div>
                        </div>

                        <div className="mt-auto flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                          >
                            <Printer className="mr-1 h-4 w-4" />
                            Imprimer
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                          >
                            <Mail className="mr-1 h-4 w-4" />
                            Envoyer par email
                          </Button>
                          <Button size="sm" className="rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                            <Download className="mr-1 h-4 w-4" />
                            Télécharger
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="quarterly">
          <div className="grid gap-4">
            {currentYearCertificates
              .filter(
                (cert) =>
                  cert.title.includes("T1") ||
                  cert.title.includes("T2") ||
                  cert.title.includes("T3") ||
                  cert.title.includes("T4"),
              )
              .map((certificate) => (
                <Card key={certificate.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-center justify-center bg-[#FFDEE9]/30 p-6 md:w-16">
                        <FileText className="h-8 w-8 text-[#6A5ACD]" />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-[#6A5ACD]">{certificate.title}</h3>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>Généré le {certificate.generatedDate}</span>
                          </div>
                        </div>

                        <div className="mb-3 grid grid-cols-1 gap-2 text-sm text-gray-600 md:grid-cols-3">
                          <div>
                            <span className="font-medium">Période:</span> {certificate.period}
                          </div>
                          <div>
                            <span className="font-medium">Montant:</span>{" "}
                            <span className="font-semibold text-[#6A5ACD]">{certificate.amount}</span>
                          </div>
                          <div>
                            <span className="font-medium">Nounou:</span> {certificate.nounou}
                          </div>
                        </div>

                        <div className="mt-auto flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                          >
                            <Printer className="mr-1 h-4 w-4" />
                            Imprimer
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                          >
                            <Mail className="mr-1 h-4 w-4" />
                            Envoyer par email
                          </Button>
                          <Button size="sm" className="rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                            <Download className="mr-1 h-4 w-4" />
                            Télécharger
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

      <div className="mt-8 rounded-lg bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <h3 className="font-medium text-amber-800">Besoin d'une attestation spécifique ?</h3>
            <p className="text-sm text-amber-700">
              Si vous avez besoin d'une attestation pour une période spécifique ou si vous rencontrez des problèmes avec
              vos attestations, veuillez contacter notre service client. Nous vous aiderons à obtenir les documents
              nécessaires pour votre déclaration d'impôts.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
