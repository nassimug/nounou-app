"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Search, Send, Paperclip, CheckCheck, MessageCircle, Filter } from "lucide-react"

export default function RamMessagesPage() {
  const [selectedContact, setSelectedContact] = useState<string | null>("marie")
  const [messageText, setMessageText] = useState("")

  const contacts = [
    {
      id: "marie",
      name: "Marie Dupont",
      role: "Assistante maternelle",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Merci pour la validation de ma déclaration",
      lastMessageTime: "Hier",
      unread: false,
      online: true,
    },
    {
      id: "martin",
      name: "Famille Martin",
      role: "Parents",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Quand recevrai-je les documents officiels ?",
      lastMessageTime: "Lun",
      unread: false,
      online: false,
    },
    {
      id: "sophie",
      name: "Sophie Moreau",
      role: "Assistante maternelle",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "J'ai une question concernant mon agrément",
      lastMessageTime: "10:15",
      unread: true,
      online: true,
    },
    {
      id: "dubois",
      name: "Famille Dubois",
      role: "Parents",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Bonjour, je cherche une nounou disponible",
      lastMessageTime: "09:30",
      unread: true,
      online: true,
    },
  ]

  const conversations = {
    marie: [
      {
        id: 1,
        sender: "marie",
        text: "Bonjour, j'ai une question concernant ma déclaration du mois d'avril.",
        time: "Hier, 14:00",
        status: "read",
      },
      {
        id: 2,
        sender: "user",
        text: "Bonjour Marie, votre déclaration a été validée. Le versement sera effectué sous 5 jours ouvrés.",
        time: "Hier, 14:30",
        status: "read",
      },
      {
        id: 3,
        sender: "marie",
        text: "Merci pour la validation de ma déclaration.",
        time: "Hier, 14:45",
        status: "read",
      },
    ],
    martin: [
      {
        id: 1,
        sender: "user",
        text: "Bonjour, nous vous informons que votre contrat avec Marie Dupont a été approuvé.",
        time: "Lundi, 09:15",
        status: "read",
      },
      {
        id: 2,
        sender: "martin",
        text: "Merci beaucoup pour cette confirmation. Quand recevrai-je les documents officiels ?",
        time: "Lundi, 10:30",
        status: "read",
      },
      {
        id: 3,
        sender: "user",
        text: "Les documents seront disponibles dans votre espace personnel d'ici 48h. Vous recevrez une notification par email.",
        time: "Lundi, 11:05",
        status: "read",
      },
    ],
    sophie: [
      {
        id: 1,
        sender: "sophie",
        text: "Bonjour, j'ai une question concernant mon agrément qui expire dans 3 mois. Quelle est la procédure pour le renouvellement ?",
        time: "10:15",
        status: "unread",
      },
    ],
    dubois: [
      {
        id: 1,
        sender: "dubois",
        text: "Bonjour, je cherche une nounou disponible dans le secteur de Montpellier pour ma fille de 2 ans. Pouvez-vous m'aider ?",
        time: "09:30",
        status: "unread",
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
        <Link href="/ram/dashboard" className="mr-4 flex items-center text-[#6A5ACD] hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour
        </Link>
        <h1 className="text-2xl font-bold text-[#6A5ACD]">Messages</h1>
      </div>

      <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="border-[#D1F2EB] md:col-span-1">
          <CardContent className="p-4">
            <div className="mb-4 space-y-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input placeholder="Rechercher..." className="pl-9 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]" />
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" className="gap-1 border-[#D1F2EB] text-[#6A5ACD]">
                  <Filter className="h-3 w-3" />
                  Filtrer
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="nounous">Nounous</TabsTrigger>
                <TabsTrigger value="families">Familles</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0 space-y-2">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                      selectedContact === contact.id ? "bg-[#D1F2EB]/30" : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                        <AvatarFallback className="bg-[#D1F2EB] text-[#6A5ACD]">
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
                        selectedContact === contact.id ? "bg-[#D1F2EB]/30" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedContact(contact.id)}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback className="bg-[#D1F2EB] text-[#6A5ACD]">
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

              <TabsContent value="families" className="mt-0 space-y-2">
                {contacts
                  .filter((contact) => contact.role === "Parents")
                  .map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                        selectedContact === contact.id ? "bg-[#D1F2EB]/30" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedContact(contact.id)}
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                          <AvatarFallback className="bg-[#D1F2EB] text-[#6A5ACD]">
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

        <Card className="flex flex-col border-[#D1F2EB] md:col-span-2">
          {selectedContact ? (
            <>
              <div className="border-b border-[#D1F2EB] p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={contacts.find((c) => c.id === selectedContact)?.avatar || "/placeholder.svg"}
                      alt={contacts.find((c) => c.id === selectedContact)?.name}
                    />
                    <AvatarFallback className="bg-[#D1F2EB] text-[#6A5ACD]">
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

              <div className="border-t border-[#D1F2EB] p-3">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full border-[#D1F2EB]">
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
                    className="border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
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
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1F2EB]">
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
