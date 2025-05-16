"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Save, User, Mail, Phone, Home, Shield, Bell, CreditCard, FileText } from "lucide-react"

export default function FamilySettingsPage() {
  const [profileData, setProfileData] = useState({
    firstName: "Sophie",
    lastName: "Martin",
    email: "sophie.martin@example.com",
    phone: "06 12 34 56 78",
    address: "15 rue des Lilas",
    city: "Lyon",
    postalCode: "69003",
    bio: "Maman de deux enfants, Emma et Lucas.",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailMessages: true,
    emailDeclarations: true,
    emailContracts: true,
    pushMessages: true,
    pushDeclarations: true,
    pushContracts: true,
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "Sophie Martin",
    cardNumber: "•••• •••• •••• 4242",
    expiryDate: "12/25",
    defaultPayment: true,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (key: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: checked }))
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une sauvegarde
    alert("Profil mis à jour avec succès !")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Paramètres du profil</h1>
        <p className="text-gray-600">Gérez vos informations personnelles et vos préférences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Paiement</TabsTrigger>
          <TabsTrigger value="tax">Attestations fiscales</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Informations personnelles</CardTitle>
              <CardDescription>Modifiez vos informations de profil</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-[#FFDEE9]/30">
                      <User className="h-full w-full p-6 text-[#6A5ACD]" />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-[#FFDEE9] p-0"
                    >
                      <span className="sr-only">Changer la photo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-[#6A5ACD]"
                      >
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.15-1.15A2 2 0 0011.76 2H8.24a2 2 0 00-1.59.85L5.5 4H4zm7 5a3 3 0 11-6 0 3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-[#6A5ACD]">
                      Prénom
                    </Label>
                    <div className="mt-1 flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-400" />
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#6A5ACD]">
                      Nom
                    </Label>
                    <div className="mt-1 flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-400" />
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleProfileChange}
                        className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#6A5ACD]">
                    Email
                  </Label>
                  <div className="mt-1 flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#6A5ACD]">
                    Téléphone
                  </Label>
                  <div className="mt-1 flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-[#6A5ACD]">
                    Adresse
                  </Label>
                  <div className="mt-1 flex items-center">
                    <Home className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleProfileChange}
                      className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="city" className="text-[#6A5ACD]">
                      Ville
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={profileData.city}
                      onChange={handleProfileChange}
                      className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-[#6A5ACD]">
                      Code postal
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={profileData.postalCode}
                      onChange={handleProfileChange}
                      className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio" className="text-[#6A5ACD]">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    className="mt-1 min-h-24 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Parlez-nous un peu de vous et de votre famille..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <Save className="h-4 w-4" />
                    Enregistrer les modifications
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Préférences de notifications</CardTitle>
              <CardDescription>Gérez comment et quand vous souhaitez être notifié</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-medium text-[#6A5ACD]">
                    <Mail className="mr-2 h-5 w-5" />
                    Notifications par email
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailMessages" className="text-base font-normal">
                          Messages
                        </Label>
                        <p className="text-sm text-gray-500">Recevoir un email quand vous avez un nouveau message</p>
                      </div>
                      <Switch
                        id="emailMessages"
                        checked={notificationSettings.emailMessages}
                        onCheckedChange={(checked) => handleNotificationChange("emailMessages", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailDeclarations" className="text-base font-normal">
                          Déclarations mensuelles
                        </Label>
                        <p className="text-sm text-gray-500">
                          Recevoir un email quand une déclaration mensuelle est disponible
                        </p>
                      </div>
                      <Switch
                        id="emailDeclarations"
                        checked={notificationSettings.emailDeclarations}
                        onCheckedChange={(checked) => handleNotificationChange("emailDeclarations", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailContracts" className="text-base font-normal">
                          Contrats
                        </Label>
                        <p className="text-sm text-gray-500">
                          Recevoir un email pour les mises à jour concernant vos contrats
                        </p>
                      </div>
                      <Switch
                        id="emailContracts"
                        checked={notificationSettings.emailContracts}
                        onCheckedChange={(checked) => handleNotificationChange("emailContracts", checked)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center text-lg font-medium text-[#6A5ACD]">
                    <Bell className="mr-2 h-5 w-5" />
                    Notifications push
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushMessages" className="text-base font-normal">
                          Messages
                        </Label>
                        <p className="text-sm text-gray-500">
                          Recevoir une notification push pour les nouveaux messages
                        </p>
                      </div>
                      <Switch
                        id="pushMessages"
                        checked={notificationSettings.pushMessages}
                        onCheckedChange={(checked) => handleNotificationChange("pushMessages", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushDeclarations" className="text-base font-normal">
                          Déclarations mensuelles
                        </Label>
                        <p className="text-sm text-gray-500">
                          Recevoir une notification push pour les nouvelles déclarations
                        </p>
                      </div>
                      <Switch
                        id="pushDeclarations"
                        checked={notificationSettings.pushDeclarations}
                        onCheckedChange={(checked) => handleNotificationChange("pushDeclarations", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pushContracts" className="text-base font-normal">
                          Contrats
                        </Label>
                        <p className="text-sm text-gray-500">
                          Recevoir une notification push pour les mises à jour de contrats
                        </p>
                      </div>
                      <Switch
                        id="pushContracts"
                        checked={notificationSettings.pushContracts}
                        onCheckedChange={(checked) => handleNotificationChange("pushContracts", checked)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <Save className="h-4 w-4" />
                    Enregistrer les préférences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Informations de paiement</CardTitle>
              <CardDescription>Gérez vos méthodes de paiement pour les transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-[#FFDEE9] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                        <CreditCard className="h-5 w-5 text-[#6A5ACD]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#6A5ACD]">{paymentInfo.cardName}</h3>
                        <p className="text-sm text-gray-600">
                          {paymentInfo.cardNumber} • Expire {paymentInfo.expiryDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {paymentInfo.defaultPayment && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Par défaut
                        </span>
                      )}
                      <Button variant="ghost" size="sm" className="h-8 text-[#6A5ACD]">
                        Modifier
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  Ajouter une carte
                </Button>

                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-blue-800">Paiements sécurisés</h3>
                      <p className="text-sm text-blue-700">
                        Toutes vos informations de paiement sont chiffrées et sécurisées. Nous ne stockons jamais les
                        données complètes de votre carte.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <Save className="h-4 w-4" />
                    Enregistrer les modifications
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Attestations fiscales</CardTitle>
              <CardDescription>Téléchargez vos attestations fiscales pour vos déclarations d'impôts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-blue-800">Attestations fiscales annuelles</h3>
                      <p className="text-sm text-blue-700">
                        Ces documents récapitulent les sommes versées à votre assistante maternelle et vous permettent
                        de bénéficier du crédit d'impôt pour frais de garde d'enfant.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-[#6A5ACD]">Attestations disponibles</h3>

                  <div className="rounded-lg border border-[#FFDEE9] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                          <FileText className="h-5 w-5 text-[#6A5ACD]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#6A5ACD]">Attestation fiscale 2023</h3>
                          <p className="text-sm text-gray-600">
                            Période: 01/01/2023 - 31/12/2023 • Généré le 31/01/2024
                          </p>
                        </div>
                      </div>
                      <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                        Télécharger
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#FFDEE9] p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                          <FileText className="h-5 w-5 text-[#6A5ACD]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#6A5ACD]">Attestation fiscale 2022</h3>
                          <p className="text-sm text-gray-600">
                            Période: 01/01/2022 - 31/12/2022 • Généré le 31/01/2023
                          </p>
                        </div>
                      </div>
                      <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <div>
                      <h3 className="font-medium text-amber-800">Information importante</h3>
                      <p className="text-sm text-amber-700">
                        Les attestations fiscales sont générées automatiquement à la fin de chaque année civile. Si vous
                        avez besoin d'une attestation pour une période spécifique, veuillez contacter notre service
                        client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
