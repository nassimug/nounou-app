"use client"

import { useState } from "react"
import { Bell, X, MessageSquare, Calendar, FileText, CreditCard, Info, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Notification = {
  id: string
  type: "message" | "calendar" | "document" | "payment" | "info" | "success"
  title: string
  description: string
  time: string
  read: boolean
  link?: string
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "notif-1",
      type: "message",
      title: "Nouveau message",
      description: "Famille Martin: Bonjour, comment va Emma aujourd'hui ?",
      time: "Il y a 10 minutes",
      read: false,
      link: "/nounou/messages",
    },
    {
      id: "notif-2",
      type: "calendar",
      title: "Rappel de rendez-vous",
      description: "Réunion avec le RAM-RAP demain à 14h00",
      time: "Il y a 1 heure",
      read: false,
      link: "/nounou/calendar",
    },
    {
      id: "notif-3",
      type: "document",
      title: "Nouveau document",
      description: "Attestation fiscale 2023 disponible",
      time: "Il y a 3 heures",
      read: false,
      link: "/family/tax-certificates",
    },
    {
      id: "notif-4",
      type: "payment",
      title: "Paiement reçu",
      description: "Paiement de 450€ reçu de la Famille Dubois",
      time: "Hier",
      read: true,
      link: "/nounou/payments",
    },
    {
      id: "notif-5",
      type: "info",
      title: "Mise à jour du système",
      description: "NounouConnect sera en maintenance le 20/05 de 2h à 4h",
      time: "Il y a 2 jours",
      read: true,
    },
    {
      id: "notif-6",
      type: "success",
      title: "Déclaration validée",
      description: "Votre déclaration d'avril a été validée",
      time: "Il y a 3 jours",
      read: true,
      link: "/nounou/declaration",
    },
  ])

  const [isOpen, setIsOpen] = useState(false)
  const unreadCount = notifications.filter((notif) => !notif.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })))
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "calendar":
        return <Calendar className="h-4 w-4 text-purple-500" />
      case "document":
        return <FileText className="h-4 w-4 text-amber-500" />
      case "payment":
        return <CreditCard className="h-4 w-4 text-green-500" />
      case "info":
        return <Info className="h-4 w-4 text-gray-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
          <Bell className="h-5 w-5 text-[#6A5ACD]" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 md:w-96" align="end">
        <div className="flex items-center justify-between border-b p-3">
          <h3 className="text-lg font-semibold text-[#6A5ACD]">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
              onClick={markAllAsRead}
            >
              Tout marquer comme lu
            </Button>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all" className="text-xs">
              Toutes
            </TabsTrigger>
            <TabsTrigger value="unread" className="text-xs">
              Non lues {unreadCount > 0 && `(${unreadCount})`}
            </TabsTrigger>
            <TabsTrigger value="read" className="text-xs">
              Lues
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="max-h-[300px] overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 p-3 transition-colors hover:bg-gray-50",
                      !notification.read && "bg-[#FFDEE9]/10",
                    )}
                    onClick={() => {
                      markAsRead(notification.id)
                      if (notification.link) {
                        // In a real app, we would use router.push here
                        console.log(`Navigating to ${notification.link}`)
                      }
                      setIsOpen(false)
                    }}
                  >
                    <div className="mt-1 flex-shrink-0">{getIconForType(notification.type)}</div>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h4
                          className={cn(
                            "text-sm",
                            !notification.read ? "font-semibold text-[#6A5ACD]" : "font-medium text-gray-700",
                          )}
                        >
                          {notification.title}
                        </h4>
                        <button
                          className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                          onClick={(e) => {
                            e.stopPropagation()
                            markAsRead(notification.id)
                          }}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Ignorer</span>
                        </button>
                      </div>
                      <p className="truncate text-xs text-gray-600">{notification.description}</p>
                      <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <Bell className="mb-2 h-8 w-8 text-gray-300" />
                <p className="text-sm text-gray-500">Aucune notification</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="unread" className="max-h-[300px] overflow-y-auto">
            {notifications.filter((n) => !n.read).length > 0 ? (
              <div className="divide-y">
                {notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className="flex cursor-pointer items-start gap-3 bg-[#FFDEE9]/10 p-3 transition-colors hover:bg-gray-50"
                      onClick={() => {
                        markAsRead(notification.id)
                        if (notification.link) {
                          // In a real app, we would use router.push here
                          console.log(`Navigating to ${notification.link}`)
                        }
                        setIsOpen(false)
                      }}
                    >
                      <div className="mt-1 flex-shrink-0">{getIconForType(notification.type)}</div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-[#6A5ACD]">{notification.title}</h4>
                          <button
                            className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                            onClick={(e) => {
                              e.stopPropagation()
                              markAsRead(notification.id)
                            }}
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Ignorer</span>
                          </button>
                        </div>
                        <p className="truncate text-xs text-gray-600">{notification.description}</p>
                        <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <CheckCircle className="mb-2 h-8 w-8 text-green-300" />
                <p className="text-sm text-gray-500">Aucune notification non lue</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="read" className="max-h-[300px] overflow-y-auto">
            {notifications.filter((n) => n.read).length > 0 ? (
              <div className="divide-y">
                {notifications
                  .filter((n) => n.read)
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className="flex cursor-pointer items-start gap-3 p-3 transition-colors hover:bg-gray-50"
                      onClick={() => {
                        if (notification.link) {
                          // In a real app, we would use router.push here
                          console.log(`Navigating to ${notification.link}`)
                        }
                        setIsOpen(false)
                      }}
                    >
                      <div className="mt-1 flex-shrink-0">{getIconForType(notification.type)}</div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-700">{notification.title}</h4>
                          <button
                            className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Remove notification logic would go here
                            }}
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Supprimer</span>
                          </button>
                        </div>
                        <p className="truncate text-xs text-gray-600">{notification.description}</p>
                        <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <Bell className="mb-2 h-8 w-8 text-gray-300" />
                <p className="text-sm text-gray-500">Aucune notification lue</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="border-t p-3 text-center">
          <Button
            variant="link"
            className="h-auto p-0 text-xs text-[#6A5ACD]"
            onClick={() => {
              // Navigate to notifications page
              console.log("Navigating to all notifications")
              setIsOpen(false)
            }}
          >
            Voir toutes les notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
