"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  MessageCircle,
  Plus,
  Search,
  User,
  CheckCircle,
  Bell,
  FileCheck,
  Baby,
  AlertTriangle,
} from "lucide-react"

export default function FamilyDashboardPage() {
  const children = [
    {
      id: 1,
      name: "Emma",
      age: "3 ans",
      image: "/placeholder.svg?height=100&width=100",
      nounou: "Marie Dupont",
    },
    {
      id: 2,
      name: "Lucas",
      age: "1 an",
      image: "/placeholder.svg?height=100&width=100",
      nounou: "Marie Dupont",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Nouvelle déclaration",
      message: "Marie Dupont a soumis sa déclaration mensuelle",
      date: "Aujourd'hui",
      type: "declaration",
      read: false,
    },
    {
      id: 2,
      title: "Nouveau message",
      message: "Vous avez reçu un message de Marie Dupont",
      date: "Hier",
      type: "message",
      read: true,
    },
    {
      id: 3,
      title: "Rappel de rendez-vous",
      message: "Rendez-vous avec Marie Dupont demain à 18h00",
      date: "Il y a 2 jours",
      type: "calendar",
      read: true,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "declaration":
        return <FileCheck className="h-4 w-4" />
      case "message":
        return <MessageCircle className="h-4 w-4" />
      case "calendar":
        return <Calendar className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-[#6A5ACD]">Tableau de bord Famille</h1>

      {/* Alerte pour la déclaration à valider */}
      <div className="mb-8 flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center">
          <AlertTriangle className="mr-3 h-6 w-6 text-amber-500" />
          <div>
            <h3 className="font-medium text-amber-800">Déclaration mensuelle à valider</h3>
            <p className="text-sm text-amber-700">
              Marie Dupont a soumis sa déclaration pour le mois d'avril. Veuillez la valider avant le 05/05/2023.
            </p>
          </div>
        </div>
        <Link href="/family/declarations">
          <Button className="gap-2 rounded-full bg-amber-500 text-white hover:bg-amber-600">
            <CheckCircle className="h-4 w-4" />
            Valider maintenant
          </Button>
        </Link>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-[#C7E9FB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Mes enfants</CardTitle>
            <CardDescription>Gérez les informations de vos enfants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">{children.length}</div>
            <p className="text-sm text-gray-600">enfants enregistrés</p>
          </CardContent>
          <CardFooter>
            <Link href="/family/children">
              <Button variant="outline" className="w-full gap-2 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20">
                <Baby className="h-4 w-4" />
                Voir mes enfants
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFDEE9]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Trouver une nounou</CardTitle>
            <CardDescription>Recherchez une assistante maternelle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">42</div>
            <p className="text-sm text-gray-600">nounous disponibles</p>
          </CardContent>
          <CardFooter>
            <Link href="/family/search">
              <Button variant="outline" className="w-full gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
                <Search className="h-4 w-4" />
                Rechercher
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#D1F2EB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Messagerie</CardTitle>
            <CardDescription>Échangez avec les nounous</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">1</div>
            <p className="text-sm text-gray-600">message(s) non lu(s)</p>
          </CardContent>
          <CardFooter>
            <Link href="/family/messages">
              <Button variant="outline" className="w-full gap-2 border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20">
                <MessageCircle className="h-4 w-4" />
                Voir les messages
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#6A5ACD]">Mes enfants</h2>
            <Link href="/family/add-child">
              <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD] hover:bg-[#C7E9FB]/20">
                <Plus className="h-4 w-4" />
                Ajouter
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {children.map((child) => (
              <Card key={child.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <img
                        src={child.image || "/placeholder.svg"}
                        alt={child.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-[#6A5ACD]">{child.name}</h3>
                      <p className="text-sm text-gray-600">{child.age}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <User className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">Nounou: {child.nounou}</span>
                      </div>
                    </div>
                    <Link href={`/family/children`}>
                      <Button variant="ghost" size="sm" className="gap-1 rounded-full text-[#6A5ACD]">
                        Voir
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#6A5ACD]">Notifications</h2>
            <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
              Tout marquer comme lu
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="unread">Non lues</TabsTrigger>
              <TabsTrigger value="important">Importantes</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-3">
                {notifications.map((notification) => (
                  <Card
                    key={notification.id}
                    className={notification.read ? "bg-white" : "border-[#6A5ACD]/30 bg-[#6A5ACD]/5"}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            notification.read ? "bg-[#FFDEE9]/30" : "bg-[#FFDEE9]"
                          } text-[#6A5ACD]`}
                        >
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <Clock className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{notification.date}</span>
                          </div>
                        </div>
                        {!notification.read && (
                          <div className="h-2 w-2 rounded-full bg-[#6A5ACD]" aria-label="Non lu"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="mt-0">
              <div className="grid gap-3">
                {notifications
                  .filter((notification) => !notification.read)
                  .map((notification) => (
                    <Card key={notification.id} className="border-[#6A5ACD]/30 bg-[#6A5ACD]/5">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9] text-[#6A5ACD]">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">{notification.date}</span>
                            </div>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-[#6A5ACD]" aria-label="Non lu"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="important" className="mt-0">
              <div className="grid gap-3">
                {notifications
                  .filter((notification) => notification.type === "declaration")
                  .map((notification) => (
                    <Card
                      key={notification.id}
                      className={notification.read ? "bg-white" : "border-[#6A5ACD]/30 bg-[#6A5ACD]/5"}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              notification.read ? "bg-[#FFDEE9]/30" : "bg-[#FFDEE9]"
                            } text-[#6A5ACD]`}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-600">{notification.date}</span>
                            </div>
                          </div>
                          {!notification.read && (
                            <div className="h-2 w-2 rounded-full bg-[#6A5ACD]" aria-label="Non lu"></div>
                          )}
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
        <div className="flex flex-col items-center rounded-lg bg-[#C7E9FB]/20 p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#C7E9FB]">
            <Calendar className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Prochains rendez-vous</h2>
          <p className="mb-4 text-gray-600">Rendez-vous avec Marie Dupont le 15 mai à 18h00</p>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
          >
            <Plus className="h-4 w-4" />
            Ajouter un rendez-vous
          </Button>
        </div>

        <div className="flex flex-col items-center rounded-lg bg-[#FFDEE9]/20 p-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]">
            <FileCheck className="h-8 w-8 text-[#6A5ACD]" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Déclarations à valider</h2>
          <p className="mb-4 text-gray-600">Vous avez 1 déclaration mensuelle à valider</p>
          <Link href="/family/declarations">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <CheckCircle className="h-4 w-4" />
              Voir les déclarations
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
