"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Save, Upload, MapPin, Phone, Mail, Building, Users, FileText } from "lucide-react"

export default function RamProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: "Céline",
    lastName: "Dubois",
    email: "celine.dubois@ram-rap.fr",
    phone: "06 78 90 12 34",
    address: "22 rue de la République",
    city: "Lyon",
    zipCode: "69002",
    bio: "Coordinatrice RAM-RAP depuis 5 ans, je suis à votre disposition pour toute question concernant l'accueil des jeunes enfants et l'accompagnement des assistantes maternelles.",
    department: "Rhône",
    sector: "Lyon Centre et 2ème arrondissement",
    organization: "Mairie de Lyon",
    position: "Coordinatrice RAM-RAP",
    notificationsEmail: true,
    notificationsSMS: true,
    notificationsApprovals: true,
    notificationsMessages: true,
    notificationsEvents: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setProfileData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une sauvegarde
    alert("Profil mis à jour avec succès !")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-4 flex flex-col items-center md:mb-0 md:flex-row md:items-center">
          <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-[#D1F2EB] md:mb-0 md:mr-4">
            <img src="/professional-woman-portrait.png" alt="Photo de profil" className="h-full w-full object-cover" />
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#6A5ACD] text-white">
              <Upload className="h-4 w-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#6A5ACD]">Mon profil RAM-RAP</h1>
            <p className="text-gray-600">Gérez vos informations personnelles et professionnelles</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
          <TabsTrigger value="professional">Informations professionnelles</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="personal" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations personnelles</CardTitle>
                <CardDescription>Modifiez vos informations personnelles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-[#6A5ACD]">
                      Prénom
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#6A5ACD]">
                      Nom
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="text-[#6A5ACD]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#6A5ACD]">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-[#6A5ACD]">
                    Adresse
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                  />
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
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-[#6A5ACD]">
                      Code postal
                    </Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={profileData.zipCode}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio" className="text-[#6A5ACD]">
                    Biographie
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    className="mt-1 min-h-32 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Cette description sera visible par les familles et les assistantes maternelles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professional" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations professionnelles</CardTitle>
                <CardDescription>Modifiez vos informations professionnelles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="department" className="text-[#6A5ACD]">
                      Département
                    </Label>
                    <Input
                      id="department"
                      name="department"
                      value={profileData.department}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sector" className="text-[#6A5ACD]">
                      Secteur géographique
                    </Label>
                    <Input
                      id="sector"
                      name="sector"
                      value={profileData.sector}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="organization" className="text-[#6A5ACD]">
                      Organisation
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={profileData.organization}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position" className="text-[#6A5ACD]">
                      Poste
                    </Label>
                    <Input
                      id="position"
                      name="position"
                      value={profileData.position}
                      onChange={handleChange}
                      className="mt-1 border-[#D1F2EB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-[#D1F2EB] bg-[#D1F2EB]/10 p-4">
                  <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Informations du RAM-RAP</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Building className="mt-0.5 h-5 w-5 text-[#6A5ACD]" />
                        <div>
                          <p className="font-medium text-gray-700">RAM-RAP Lyon Centre</p>
                          <p className="text-sm text-gray-600">22 rue de la République, 69002 Lyon</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-5 w-5 text-[#6A5ACD]" />
                        <div>
                          <p className="font-medium text-gray-700">Capacité du secteur</p>
                          <p className="text-sm text-gray-600">42 assistantes maternelles</p>
                          <p className="text-sm text-gray-600">78 familles inscrites</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-[#6A5ACD]" />
                        <div>
                          <p className="font-medium text-gray-700">Zone de couverture</p>
                          <p className="text-sm text-gray-600">Lyon 1er et 2ème arrondissements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-5 w-5 text-[#6A5ACD]" />
                        <div>
                          <p className="font-medium text-gray-700">Contrats actifs</p>
                          <p className="text-sm text-gray-600">65 contrats en cours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#6A5ACD]" />
                      <span className="text-sm text-gray-600">04 72 40 12 34</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#6A5ACD]" />
                      <span className="text-sm text-gray-600">contact@ram-rap-lyon.fr</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Paramètres de notifications</CardTitle>
                <CardDescription>Gérez vos préférences de notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-[#6A5ACD]">Canaux de notification</h3>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Notifications par email</div>
                      <div className="text-sm text-gray-500">Recevoir des notifications par email</div>
                    </div>
                    <Switch
                      checked={profileData.notificationsEmail}
                      onCheckedChange={(checked) => handleSwitchChange("notificationsEmail", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Notifications par SMS</div>
                      <div className="text-sm text-gray-500">Recevoir des notifications par SMS</div>
                    </div>
                    <Switch
                      checked={profileData.notificationsSMS}
                      onCheckedChange={(checked) => handleSwitchChange("notificationsSMS", checked)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-[#6A5ACD]">Types de notifications</h3>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Demandes d'approbation</div>
                      <div className="text-sm text-gray-500">
                        Notifications pour les nouvelles demandes d'approbation (nounous, contrats, etc.)
                      </div>
                    </div>
                    <Switch
                      checked={profileData.notificationsApprovals}
                      onCheckedChange={(checked) => handleSwitchChange("notificationsApprovals", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Messages</div>
                      <div className="text-sm text-gray-500">Notifications pour les nouveaux messages</div>
                    </div>
                    <Switch
                      checked={profileData.notificationsMessages}
                      onCheckedChange={(checked) => handleSwitchChange("notificationsMessages", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Événements</div>
                      <div className="text-sm text-gray-500">
                        Notifications pour les événements à venir (réunions, formations, etc.)
                      </div>
                    </div>
                    <Switch
                      checked={profileData.notificationsEvents}
                      onCheckedChange={(checked) => handleSwitchChange("notificationsEvents", checked)}
                    />
                  </div>
                </div>

                <div className="rounded-lg bg-[#D1F2EB]/10 p-4">
                  <h3 className="mb-3 font-medium text-[#6A5ACD]">Fréquence des notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="immediate"
                        name="frequency"
                        className="h-4 w-4 border-gray-300 text-[#6A5ACD] focus:ring-[#6A5ACD]"
                        defaultChecked
                      />
                      <label htmlFor="immediate" className="text-sm font-medium text-gray-700">
                        Immédiate
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="daily"
                        name="frequency"
                        className="h-4 w-4 border-gray-300 text-[#6A5ACD] focus:ring-[#6A5ACD]"
                      />
                      <label htmlFor="daily" className="text-sm font-medium text-gray-700">
                        Résumé quotidien
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="weekly"
                        name="frequency"
                        className="h-4 w-4 border-gray-300 text-[#6A5ACD] focus:ring-[#6A5ACD]"
                      />
                      <label htmlFor="weekly" className="text-sm font-medium text-gray-700">
                        Résumé hebdomadaire
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <div className="mt-6 flex justify-end">
            <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <Save className="h-4 w-4" />
              Enregistrer les modifications
            </Button>
          </div>
        </form>
      </Tabs>
    </main>
  )
}
