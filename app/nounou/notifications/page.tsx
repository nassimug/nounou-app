"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Clock, MessageCircle, FileText, Calendar, Bell, CheckCircle, X, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

type Notification = {
  id: number
  title: string
  message: string
  date: string
  time: string
  type: "message" | "document" | "calendar" | "system"
  read: boolean
  sender?: string
  link?: string
}

export default function NounouNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Nouveau message",
      message: "Sophie Martin vous a envoyé un message concernant Emma",
      date: "Aujourd'hui",
      time: "10:23",
      type: "message",
      read: false,
      sender: "Sophie Martin",
      link: "/nounou/messages",
    },
    {
      id: 2,
      title: "Nouvelle demande de garde",
      message: "La famille Bernard recherche une nounou pour leur enfant de 2 ans",
      date: "Aujourd'hui",
      time: "09:15",
      type: "document",
      read: false,
      sender: "Système",
      link: "/nounou/requests",
    },
    {
      id: 3,
      title: "Rappel de rendez-vous",
      message: "Rendez-vous avec la famille Martin demain à 18h00",
      date: "Hier",
      time: "14:30",
      type: "calendar",
      read: true,
      sender: "Système",
      link: "/nounou/calendar",
    },
    {
      id: 4,
      title: "Nouveau message",
      message: "Céline Dubois (RAM) vous a envoyé un message concernant votre agrément",
      date: "Hier",
      time: "11:45",
      type: "message",
      read: true,
      sender: "Céline Dubois",
      link: "/nounou/messages",
    },
    {
      id: 5,
      title: "Déclaration mensuelle",
      message: "N'oubliez pas de faire votre déclaration pour le mois d'avril",
      date: "Il y a 2 jours",
      time: "16:20",
      type: "document",
      read: true,
      sender: "Système",
      link: "/nounou/declaration",
    },
    {
      id: 6,
      title: "Modification de planning",
      message: "La famille Martin a modifié le planning d'Emma pour la semaine prochaine",
      date: "Il y a 3 jours",
      time: "09:10",
      type: "calendar",
      read: true,
      sender: "Sophie Martin",
      link: "/nounou/calendar",
    },
    {
      id: 7,
      title: "Bienvenue sur NounouConnect",
      message: "Merci de vous être inscrit sur notre plateforme. Découvrez toutes nos fonctionnalités !",
      date: "Il y a 1 semaine",
      time: "15:00",
      type: "system",
      read: true,
      sender: "Système",
      link: "/nounou/dashboard",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageCircle className="h-5 w-5" />
      case "document":
        return <FileText className="h-5 w-5" />
      case "calendar":
        return <Calendar className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "message":
        return "bg-[#C7E9FB]"
      case "document":
        return "bg-[#FFDEE9]"
      case "calendar":
        return "bg-[#D1F2EB]"
      default:
        return "bg-gray-200"
    }
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Notifications</h1>
          <p className="text-gray-600">
            {unreadCount > 0
              ? `Vous avez ${unreadCount} notification${unreadCount > 1 ? "s" : ""} non lue${
                  unreadCount > 1 ? "s" : ""
                }`
              : "Vous n'avez pas de nouvelles notifications"}
          </p>
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtrer
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Tous les types</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Messages</DropdownMenuItem>
              <DropdownMenuItem>Documents</DropdownMenuItem>
              <DropdownMenuItem>Rendez-vous</DropdownMenuItem>
              <DropdownMenuItem>Système</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="gap-2" onClick={markAllAsRead} disabled={unreadCount === 0}>
            <CheckCircle className="h-4 w-4" />
            Tout marquer comme lu
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="all" className="relative">
            Toutes
            {notifications.length > 0 && <Badge className="ml-2 bg-[#6A5ACD]">{notifications.length}</Badge>}
          </TabsTrigger>
          <TabsTrigger value="unread" className="relative">
            Non lues
            {unreadCount > 0 && <Badge className="ml-2 bg-[#6A5ACD]">{unreadCount}</Badge>}
          </TabsTrigger>
          <TabsTrigger value="read">Lues</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`transition-colors ${
                    notification.read ? "bg-white" : "border-[#6A5ACD]/30 bg-[#6A5ACD]/5"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${getNotificationColor(
                          notification.type,
                        )} text-[#6A5ACD]`}
                      >
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Clock className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-500">
                                {notification.date} à {notification.time}
                              </span>
                              {notification.sender && (
                                <span className="text-xs text-gray-500">• De: {notification.sender}</span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 rounded-full p-0"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="sr-only">Marquer comme lu</span>
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <X className="h-4 w-4 text-red-500" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                        </div>
                        {notification.link && (
                          <div className="mt-2">
                            <Link href={notification.link}>
                              <Button variant="link" className="h-auto p-0 text-[#6A5ACD]">
                                Voir les détails
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                <Bell className="mb-4 h-12 w-12 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900">Aucune notification</h3>
                <p className="mt-1 text-sm text-gray-500">Vous n'avez pas de notifications pour le moment.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="unread" className="mt-0">
          <div className="grid gap-4">
            {notifications.filter((n) => !n.read).length > 0 ? (
              notifications
                .filter((notification) => !notification.read)
                .map((notification) => (
                  <Card key={notification.id} className="border-[#6A5ACD]/30 bg-[#6A5ACD]/5">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${getNotificationColor(
                            notification.type,
                          )} text-[#6A5ACD]`}
                        >
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                              <p className="text-sm text-gray-600">{notification.message}</p>
                              <div className="mt-1 flex items-center gap-2">
                                <Clock className="h-3 w-3 text-gray-500" />
                                <span className="text-xs text-gray-500">
                                  {notification.date} à {notification.time}
                                </span>
                                {notification.sender && (
                                  <span className="text-xs text-gray-500">• De: {notification.sender}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 rounded-full p-0"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="sr-only">Marquer comme lu</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 rounded-full p-0"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4 text-red-500" />
                                <span className="sr-only">Supprimer</span>
                              </Button>
                            </div>
                          </div>
                          {notification.link && (
                            <div className="mt-2">
                              <Link href={notification.link}>
                                <Button variant="link" className="h-auto p-0 text-[#6A5ACD]">
                                  Voir les détails
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-green-300" />
                <h3 className="text-lg font-medium text-gray-900">Tout est à jour</h3>
                <p className="mt-1 text-sm text-gray-500">Vous n'avez pas de notifications non lues.</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="read" className="mt-0">
          <div className="grid gap-4">
            {notifications.filter((n) => n.read).length > 0 ? (
              notifications
                .filter((notification) => notification.read)
                .map((notification) => (
                  <Card key={notification.id} className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${getNotificationColor(
                            notification.type,
                          )}/50 text-[#6A5ACD]`}
                        >
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium text-[#6A5ACD]">{notification.title}</h3>
                              <p className="text-sm text-gray-600">{notification.message}</p>
                              <div className="mt-1 flex items-center gap-2">
                                <Clock className="h-3 w-3 text-gray-500" />
                                <span className="text-xs text-gray-500">
                                  {notification.date} à {notification.time}
                                </span>
                                {notification.sender && (
                                  <span className="text-xs text-gray-500">• De: {notification.sender}</span>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 rounded-full p-0"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <X className="h-4 w-4 text-red-500" />
                              <span className="sr-only">Supprimer</span>
                            </Button>
                          </div>
                          {notification.link && (
                            <div className="mt-2">
                              <Link href={notification.link}>
                                <Button variant="link" className="h-auto p-0 text-[#6A5ACD]">
                                  Voir les détails
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
                <Bell className="mb-4 h-12 w-12 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900">Aucune notification lue</h3>
                <p className="mt-1 text-sm text-gray-500">Vous n'avez pas encore lu de notifications.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
