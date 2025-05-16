"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  FileText,
  MessageCircle,
  Plus,
  User,
  Users,
  CheckCircle,
  Bell,
  FileCheck,
  Search,
  UserCheck,
  FileSpreadsheet,
} from "lucide-react"

export default function RamDashboardPage() {
  const pendingApprovals = [
    {
      id: 1,
      type: "nounou",
      name: "Sophie Moreau",
      date: "15/04/2023",
      status: "En attente",
    },
    {
      id: 2,
      type: "contract",
      family: "Famille Martin",
      nounou: "Marie Dupont",
      date: "18/04/2023",
      status: "En attente",
    },
    {
      id: 3,
      type: "declaration",
      nounou: "Isabelle Laurent",
      month: "Avril 2023",
      date: "02/05/2023",
      status: "En attente",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "nounou",
      name: "Nathalie Bernard",
      action: "Inscription approuvée",
      date: "Hier",
      time: "14:30",
    },
    {
      id: 2,
      type: "contract",
      family: "Famille Dubois",
      nounou: "Isabelle Laurent",
      action: "Contrat validé",
      date: "Il y a 2 jours",
      time: "10:15",
    },
    {
      id: 3,
      type: "message",
      from: "Marie Dupont",
      to: "Famille Martin",
      action: "Message envoyé",
      date: "Il y a 3 jours",
      time: "16:45",
    },
  ]

  const getApprovalIcon = (type: string) => {
    switch (type) {
      case "nounou":
        return <User className="h-4 w-4" />
      case "contract":
        return <FileText className="h-4 w-4" />
      case "declaration":
        return <FileCheck className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "nounou":
        return <UserCheck className="h-4 w-4" />
      case "contract":
        return <FileText className="h-4 w-4" />
      case "message":
        return <MessageCircle className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-[#6A5ACD]">Tableau de bord RAM-RAP</h1>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-[#D1F2EB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Assistantes maternelles</CardTitle>
            <CardDescription>Gestion des nounous</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">42</div>
            <p className="text-sm text-gray-600">nounous dans votre secteur</p>
          </CardContent>
          <CardFooter>
            <Link href="/ram/nounous">
              <Button variant="outline" className="w-full gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                <Users className="h-4 w-4" />
                Voir les nounous
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFDEE9]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Familles</CardTitle>
            <CardDescription>Gestion des familles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">78</div>
            <p className="text-sm text-gray-600">familles inscrites</p>
          </CardContent>
          <CardFooter>
            <Link href="/ram/families">
              <Button variant="outline" className="w-full gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
                <User className="h-4 w-4" />
                Voir les familles
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#C7E9FB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Contrats</CardTitle>
            <CardDescription>Gestion des contrats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">65</div>
            <p className="text-sm text-gray-600">contrats actifs</p>
          </CardContent>
          <CardFooter>
            <Link href="/ram/contracts">
              <Button variant="outline" className="w-full gap-2 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20">
                <FileText className="h-4 w-4" />
                Voir les contrats
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#6A5ACD]">Approbations en attente</h2>
            <Link href="/ram/approvals">
              <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                Voir toutes
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {pendingApprovals.map((approval) => (
              <Card key={approval.id} className="border-[#D1F2EB]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D1F2EB] text-[#6A5ACD]">
                      {getApprovalIcon(approval.type)}
                    </div>
                    <div className="flex-1">
                      {approval.type === "nounou" && (
                        <>
                          <h3 className="font-medium text-[#6A5ACD]">Nouvelle assistante maternelle</h3>
                          <p className="text-sm text-gray-600">{approval.name}</p>
                        </>
                      )}
                      {approval.type === "contract" && (
                        <>
                          <h3 className="font-medium text-[#6A5ACD]">Nouveau contrat</h3>
                          <p className="text-sm text-gray-600">
                            {approval.family} - {approval.nounou}
                          </p>
                        </>
                      )}
                      {approval.type === "declaration" && (
                        <>
                          <h3 className="font-medium text-[#6A5ACD]">Déclaration mensuelle</h3>
                          <p className="text-sm text-gray-600">
                            {approval.nounou} - {approval.month}
                          </p>
                        </>
                      )}
                      <div className="mt-1 flex items-center gap-2">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">Reçu le {approval.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                      >
                        Voir
                      </Button>
                      <Button size="sm" className="h-8 rounded-full bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {pendingApprovals.length === 0 && (
              <Card className="border-[#D1F2EB]">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <CheckCircle className="mb-2 h-10 w-10 text-[#D1F2EB]" />
                  <h3 className="font-medium text-[#6A5ACD]">Aucune approbation en attente</h3>
                  <p className="text-sm text-gray-600">Toutes les demandes ont été traitées.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#6A5ACD]">Activités récentes</h2>
            <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
              Voir toutes
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="nounous">Nounous</TabsTrigger>
              <TabsTrigger value="contracts">Contrats</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-3">
                {recentActivities.map((activity) => (
                  <Card key={activity.id} className="border-[#FFDEE9]/50">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]/30 text-[#6A5ACD]">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-[#6A5ACD]">{activity.action}</h3>
                          {activity.type === "nounou" && <p className="text-sm text-gray-600">{activity.name}</p>}
                          {activity.type === "contract" && (
                            <p className="text-sm text-gray-600">
                              {activity.family} - {activity.nounou}
                            </p>
                          )}
                          {activity.type === "message" && (
                            <p className="text-sm text-gray-600">
                              {activity.from} → {activity.to}
                            </p>
                          )}
                          <div className="mt-1 flex items-center gap-2">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-600">
                              {activity.date} à {activity.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nounous" className="mt-0">
              <div className="grid gap-3">
                {recentActivities
                  .filter((activity) => activity.type === "nounou")
                  .map((activity) => (
                    <Card key={activity.id} className="border-[#FFDEE9]/50">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]/30 text-[#6A5ACD]">
                            <UserCheck className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{activity.action}</h3>
                            <p className="text-sm text-gray-600">{activity.name}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">
                                {activity.date} à {activity.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="contracts" className="mt-0">
              <div className="grid gap-3">
                {recentActivities
                  .filter((activity) => activity.type === "contract")
                  .map((activity) => (
                    <Card key={activity.id} className="border-[#FFDEE9]/50">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]/30 text-[#6A5ACD]">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{activity.action}</h3>
                            <p className="text-sm text-gray-600">
                              {activity.family} - {activity.nounou}
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">
                                {activity.date} à {activity.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center rounded-lg bg-[#D1F2EB]/20 p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1F2EB]">
            <Calendar className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Prochains événements</h2>
          <p className="mb-4 text-gray-600">Réunion d'information pour les nouvelles nounous le 25 mai à 14h00</p>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
          >
            <Plus className="h-4 w-4" />
            Ajouter un événement
          </Button>
        </div>

        <div className="flex flex-col items-center rounded-lg bg-[#FFDEE9]/20 p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]">
            <FileSpreadsheet className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Rapports et statistiques</h2>
          <p className="mb-4 text-gray-600">Consultez les statistiques de votre secteur</p>
          <Link href="/ram/statistics">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Search className="h-4 w-4" />
              Voir les statistiques
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/ram/messages">
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <MessageCircle className="h-4 w-4" />
            Accéder à la messagerie
          </Button>
        </Link>
      </div>
    </main>
  )
}
