"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  Clock,
  MessageCircle,
  FileText,
  Calendar,
  Bell,
  CheckCircle,
  X,
  Filter,
  UserCheck,
} from "lucide-react"
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
  type: "message" | "document" | "calendar" | "system" | "approval"
  read: boolean
  sender?: string
  link?: string
}

export default function RamNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Nouvelle inscription nounou",
      message: "Nathalie Bernard a soumis une demande d'inscription en tant qu'assistante maternelle",
      date: "Aujourd'hui",
      time: "10:23",
      type: "approval",
      read: false,
      sender: "Système",
      link: "/ram/approvals",
    },
    {
      id: 2,
      title: "Nouveau contrat à valider",
      message: "La famille Martin a soumis un nouveau contrat avec Marie Dupont",
      date: "Aujourd'hui",
      time: "09:15",
      type: "document",
      read: false,
      sender: "Système",
      link: "/ram/contracts",
    },
    {
      id: 3,
      title: "Rappel de réunion",
      message: "Réunion d'information pour les nouvelles nounous demain à 14h00",
      date: "Hier",
      time: "14:30",
      type: "calendar",
      read: true,
      sender: "Système",
      link: "/ram/calendar",
    },
    {
      id: 4,
      title: "Nouveau message",
      message: "Marie Dupont vous a envoyé un message concernant son agrément",
      date: "Hier",
      time: "11:45",
      type: "message",
      read: true,
      sender: "Marie Dupont",
      link: "/ram/messages",
    },
    {
      id: 5,
      title: "Déclaration mensuelle à vérifier",
      message: "Marie Dupont a soumis sa déclaration pour le mois d'avril",
      date: "Il y a 2 jours",
      time: "16:20",
      type: "document",
      read: true,
      sender: "Marie Dupont",
      link: "/ram/declarations",
    },
    {
      id: 6,
      title: "Nouvelle famille inscrite",
      message: "La famille Bernard s'est inscrite sur la plateforme",
      date: "Il y a 3 jours",
      time: "09:10",
      type: "approval",
      read: true,
      sender: "Système",
      link: "/ram/families",
    },
    {
      id: 7,
      title: "Mise à jour du système",
      message: "De nouvelles fonctionnalités ont été ajoutées à votre espace RAM",
      date: "Il y a 1 semaine",
      time: "15:00",
      type: "system",
      read: true,
      sender: "Système",
      link: "/ram/dashboard",
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
      case "approval":
        return <UserCheck className="h-5 w-5" />
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
      case "approval":
        return "bg-[#D8BFD8]"
      default:
        return "bg-gray-200"
    }
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
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
              <DropdownMenuItem>Approbations</DropdownMenuItem>
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
