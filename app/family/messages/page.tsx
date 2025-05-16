"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Search, Send, Paperclip, CheckCheck, MessageCircle } from "lucide-react"

export default function FamilyMessagesPage() {
  const [selectedContact, setSelectedContact] = useState<string | null>("marie")
  const [messageText, setMessageText] = useState("")

  const contacts = [
    {
      id: "marie",
      name: "Marie Dupont",
      role: "Assistante maternelle",
      avatar: "/nounou1.png?height=40&width=40",
      lastMessage: "Bonjour, comment va Emma aujourd'hui ?",
      lastMessageTime: "10:30",
      unread: true,
      online: true,
    },
    {
      id: "sophie",
      name: "Sophie Moreau",
      role: "Assistante maternelle",
      avatar: "/nounou2.png?height=40&width=40",
      lastMessage: "Merci pour les informations !",
      lastMessageTime: "Hier",
      unread: false,
      online: false,
    },
    {
      id: "ram",
      name: "RAM-RAP Secteur 3",
      role: "Administration",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Votre contrat a été approuvé.",
      lastMessageTime: "Lun",
      unread: false,
      online: true,
    },
  ]

  const conversations = {
    marie: [
      {
        id: 1,
        sender: "marie",
        text: "Bonjour, comment va Emma aujourd'hui ?",
        time: "10:30",
        status: "read",
      },
      {
        id: 2,
        sender: "user",
        text: "Bonjour Marie ! Emma va très bien, elle est un peu fatiguée car elle s'est couchée tard hier.",
        time: "10:35",
        status: "read",
      },
      {
        id: 3,
        sender: "marie",
        text: "D'accord, je ferai attention à ce qu'elle se repose bien aujourd'hui. Est-ce qu'elle a bien mangé ce matin ?",
        time: "10:37",
        status: "read",
      },
      {
        id: 4,
        sender: "user",
        text: "Oui, elle a pris un bon petit déjeuner. Par contre, elle a son doudou dans le sac aujourd'hui, elle y tient beaucoup en ce moment.",
        time: "10:40",
        status: "read",
      },
     
    ],
    sophie: [
      {
        id: 1,
        sender: "user",
        text: "Bonjour Sophie, je vous envoie les informations concernant les allergies de Lucas comme demandé.",
        time: "Hier, 15:20",
        status: "read",
      },
      {
        id: 2,
        sender: "sophie",
        text: "Merci pour les informations !",
        time: "Hier, 16:45",
        status: "read",
      },
    ],
    ram: [
      {
        id: 1,
        sender: "ram",
        text: "Bonjour, nous vous informons que votre contrat avec Marie Dupont a été approuvé.",
        time: "Lundi, 09:15",
        status: "read",
      },
      {
        id: 2,
        sender: "user",
        text: "Merci beaucoup pour cette confirmation. Quand recevrai-je les documents officiels ?",
        time: "Lundi, 10:30",
        status: "read",
      },
      {
        id: 3,
        sender: "ram",
        text: "Les documents seront disponibles dans votre espace personnel d'ici 48h. Vous recevrez une notification par email.",
        time: "Lundi, 11:05",
        status: "read",
      },
    ],
  }

  const handleSendMessage = () => {
    if (messageText.trim() === "" || !selectedContact) return

    // En situation réelle, envoyer le message au serveur
    // Ici, on simule l'ajout du message à la conversation
    setMessageText("")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <div className="mb-6 flex items-center">
        <Link href="/family/dashboard" className="mr-4 flex items-center text-[#6A5ACD] hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour
        </Link>
        <h1 className="text-2xl font-bold text-[#6A5ACD]">Messages</h1>
      </div>

      <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="border-[#FFDEE9] md:col-span-1">
          <CardContent className="p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input placeholder="Rechercher..." className="pl-9 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]" />
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="nounous">Nounous</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0 space-y-2">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                      selectedContact === contact.id ? "bg-[#FFDEE9]/30" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                          {contact.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-[#6A5ACD] truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-600 truncate">{contact.lastMessage}</p>
                        {contact.unread && <span className="h-2 w-2 rounded-full bg-[#6A5ACD]"></span>}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="nounous" className="mt-0 space-y-2">
                {contacts
                  .filter((contact) => contact.role === "Assistante maternelle")
                  .map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                        selectedContact === contact.id ? "bg-[#FFDEE9]/30" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedContact(contact.id)}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                            {contact.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-[#6A5ACD] truncate">{contact.name}</h3>
                          <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-600 truncate">{contact.lastMessage}</p>
                          {contact.unread && <span className="h-2 w-2 rounded-full bg-[#6A5ACD]"></span>}
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="admin" className="mt-0 space-y-2">
                {contacts
                  .filter((contact) => contact.role === "Administration")
                  .map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                        selectedContact === contact.id ? "bg-[#FFDEE9]/30" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedContact(contact.id)}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                            {contact.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-[#6A5ACD] truncate">{contact.name}</h3>
                          <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-600 truncate">{contact.lastMessage}</p>
                          {contact.unread && <span className="h-2 w-2 rounded-full bg-[#6A5ACD]"></span>}
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-[#C7E9FB] md:col-span-2">
          {selectedContact ? (
            <>
              <div className="border-b border-[#C7E9FB] p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={contacts.find((c) => c.id === selectedContact)?.avatar || "/placeholder.svg"}
                      alt={contacts.find((c) => c.id === selectedContact)?.name}
                    />
                    <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                      {contacts.find((c) => c.id === selectedContact)?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-[#6A5ACD]">
                      {contacts.find((c) => c.id === selectedContact)?.name}
                    </h3>
                    <p className="text-xs text-gray-600">{contacts.find((c) => c.id === selectedContact)?.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversations[selectedContact as keyof typeof conversations].map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-[#6A5ACD] text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <div
                        className={`mt-1 flex items-center justify-end gap-1 text-xs ${
                          message.sender === "user" ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        <span>{message.time}</span>
                        {message.sender === "user" && (
                          <CheckCheck
                            className={`h-3 w-3 ${message.status === "read" ? "text-white/70" : "text-white/40"}`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#C7E9FB] p-3">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-[#C7E9FB]">
                    <Paperclip className="h-4 w-4 text-[#6A5ACD]" />
                    <span className="sr-only">Joindre un fichier</span>
                  </Button>
                  <Input
                    placeholder="Écrivez votre message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    className="border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={messageText.trim() === ""}
                    className="h-9 w-9 rounded-full bg-[#6A5ACD] p-0"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Envoyer</span>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]">
                <MessageCircle className="h-8 w-8 text-[#6A5ACD]" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Messagerie</h2>
              <p className="mb-4 text-gray-600">
                Sélectionnez une conversation pour commencer à échanger des messages.
              </p>
            </div>
          )}
        </Card>
      </div>
    </main>
  )
}
