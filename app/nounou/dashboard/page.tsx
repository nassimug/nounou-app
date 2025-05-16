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
  AlertTriangle,
} from "lucide-react"

export default function NounouDashboardPage() {
  const children = [
    {
      id: 1,
      name: "Emma Martin",
      age: "3 ans",
      image: "/emma.png?height=100&width=100",
      family: "Famille Martin",
    },
    {
      id: 2,
      name: "Lucas Martin",
      age: "1 an",
      image: "/lucas.png?height=100&width=100",
      family: "Famille Martin",
    },
    {
      id: 3,
      name: "Léa Dubois",
      age: "2 ans",
      image: "/lea.png?height=100&width=100",
      family: "Famille Dubois",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Nouveau contrat",
      message: "La famille Bernard vous propose un nouveau contrat",
      date: "Aujourd'hui",
      type: "contract",
      read: false,
    },
    {
      id: 2,
      title: "Déclaration mensuelle",
      message: "N'oubliez pas de faire votre déclaration pour le mois d'avril",
      date: "Hier",
      type: "declaration",
      read: true,
    },
    {
      id: 3,
      title: "Nouveau message",
      message: "Vous avez reçu un message de la famille Martin",
      date: "Il y a 2 jours",
      type: "message",
      read: true,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "contract":
        return <FileText className="h-4 w-4" />
      case "declaration":
        return <FileCheck className="h-4 w-4" />
      case "message":
        return <MessageCircle className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-[#6A5ACD]">Tableau de bord Nounou</h1>

      {/* Alerte pour la déclaration mensuelle */}
      <div className="mb-8 flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-center">
          <AlertTriangle className="mr-3 h-6 w-6 text-amber-500" />
          <div>
            <h3 className="font-medium text-amber-800">Déclaration mensuelle à soumettre</h3>
            <p className="text-sm text-amber-700">
              Vous n'avez pas encore soumis votre déclaration pour le mois d'avril. La date limite est le 05/05/2023.
            </p>
          </div>
        </div>
        <Link href="/nounou/declaration">
          <Button className="gap-2 rounded-full bg-amber-500 text-white hover:bg-amber-600">
            <FileCheck className="h-4 w-4" />
            Soumettre maintenant
          </Button>
        </Link>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-[#C7E9FB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Enfants</CardTitle>
            <CardDescription>Enfants dont vous vous occupez</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">{children.length}</div>
            <p className="text-sm text-gray-600">enfants actuellement</p>
          </CardContent>
          <CardFooter>
            <Link href="/nounou/children">
              <Button variant="outline" className="w-full gap-2 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20">
                <Users className="h-4 w-4" />
                Voir les enfants
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFDEE9]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Disponibilités</CardTitle>
            <CardDescription>Gérez vos places disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">1</div>
            <p className="text-sm text-gray-600">place disponible</p>
          </CardContent>
          <CardFooter>
            <Link href="/nounou/availability">
              <Button variant="outline" className="w-full gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20">
                <Calendar className="h-4 w-4" />
                Gérer mes disponibilités
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-[#D1F2EB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Messagerie</CardTitle>
            <CardDescription>Échangez avec les familles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">2</div>
            <p className="text-sm text-gray-600">message(s) non lu(s)</p>
          </CardContent>
          <CardFooter>
            <Link href="/nounou/messages">
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
            <h2 className="text-xl font-semibold text-[#6A5ACD]">Enfants dont je m'occupe</h2>
            <Link href="/nounou/children">
              <Button variant="ghost" size="sm" className="gap-1 text-[#6A5ACD] hover:bg-[#C7E9FB]/20">
                Voir tous
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
                        <span className="text-xs text-gray-600">{child.family}</span>
                      </div>
                    </div>
                    <Link href={`/nounou/child/${child.id}`}>
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
                  .filter((notification) => notification.type === "contract" || notification.type === "declaration")
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
          <p className="mb-4 text-gray-600">Réunion avec la famille Martin le 20 mai à 10h00</p>
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
          <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Déclaration mensuelle</h2>
          <p className="mb-4 text-gray-600">N'oubliez pas de faire votre déclaration pour le mois d'avril</p>
          <Link href="/nounou/declaration">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <CheckCircle className="h-4 w-4" />
              Faire ma déclaration
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
