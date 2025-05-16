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
import { ChevronLeft, Save, Upload, X, Plus, CheckCircle } from "lucide-react"

export default function NounouProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: "Marie",
    lastName: "Dupont",
    email: "marie.dupont@example.com",
    phone: "06 12 34 56 78",
    address: "15 rue des Lilas",
    city: "Lyon",
    zipCode: "69003",
    bio: "Assistante maternelle agréée depuis 10 ans, je propose un accueil chaleureux et bienveillant pour vos enfants. Diplômée du CAP Petite Enfance, je suis passionnée par l'éveil des tout-petits et la mise en place d'activités ludiques et éducatives adaptées à chaque âge.",
    experience: "10 ans",
    maxCapacity: 4,
    currentCapacity: 3,
    languages: ["Français", "Anglais"],
    specialties: ["Éveil musical", "Activités manuelles", "Sorties ludiques"],
    housingType: "Appartement",
    housingSize: "90m²",
    outdoor: "Balcon sécurisé",
    smokingStatus: "Non-fumeur",
    pets: "Chat",
    certifications: ["CAP Petite Enfance", "Formation premiers secours", "Formation Montessori"],
    profilePublic: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setProfileData((prev) => ({ ...prev, profilePublic: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler une sauvegarde
    alert("Profil mis à jour avec succès !")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-4 flex flex-col items-center md:mb-0 md:flex-row md:items-center">
          <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-[#C7E9FB] md:mb-0 md:mr-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Photo de profil"
              className="h-full w-full object-cover"
            />
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#6A5ACD] text-white">
              <Upload className="h-4 w-4" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#6A5ACD]">Mon profil</h1>
            <p className="text-gray-600">Gérez vos informations personnelles et professionnelles</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Profil public</span>
          <Switch checked={profileData.profilePublic} onCheckedChange={handleSwitchChange} />
        </div>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="personal">Informations personnelles</TabsTrigger>
          <TabsTrigger value="professional">Informations professionnelles</TabsTrigger>
          <TabsTrigger value="housing">Logement</TabsTrigger>
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
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
                    className="mt-1 min-h-32 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Cette description sera visible par les familles qui consultent votre profil.
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
                    <Label htmlFor="experience" className="text-[#6A5ACD]">
                      Expérience
                    </Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={profileData.experience}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxCapacity" className="text-[#6A5ACD]">
                      Capacité d'accueil maximale
                    </Label>
                    <Input
                      id="maxCapacity"
                      name="maxCapacity"
                      type="number"
                      value={profileData.maxCapacity}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[#6A5ACD]">Langues parlées</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profileData.languages.map((language, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 rounded-full bg-[#C7E9FB]/30 px-3 py-1.5 text-sm text-[#6A5ACD]"
                      >
                        <span>{language}</span>
                        <button type="button" className="ml-1 rounded-full p-0.5 hover:bg-[#C7E9FB]/50">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full border border-dashed border-[#C7E9FB] px-3 py-1.5 text-sm text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>

                <div>
                  <Label className="text-[#6A5ACD]">Spécialités</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profileData.specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 rounded-full bg-[#FFDEE9]/30 px-3 py-1.5 text-sm text-[#6A5ACD]"
                      >
                        <span>{specialty}</span>
                        <button type="button" className="ml-1 rounded-full p-0.5 hover:bg-[#FFDEE9]/50">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full border border-dashed border-[#FFDEE9] px-3 py-1.5 text-sm text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>

                <div>
                  <Label className="text-[#6A5ACD]">Certifications et formations</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profileData.certifications.map((certification, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 rounded-full bg-[#D1F2EB]/30 px-3 py-1.5 text-sm text-[#6A5ACD]"
                      >
                        <span>{certification}</span>
                        <button type="button" className="ml-1 rounded-full p-0.5 hover:bg-[#D1F2EB]/50">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full border border-dashed border-[#D1F2EB] px-3 py-1.5 text-sm text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border border-[#C7E9FB] bg-[#C7E9FB]/10 p-4">
                  <h3 className="mb-3 text-lg font-medium text-[#6A5ACD]">Agrément</h3>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7E9FB]">
                      <CheckCircle className="h-5 w-5 text-[#6A5ACD]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Agréée par le conseil départemental du Rhône</p>
                      <p className="text-sm text-gray-600">Numéro d'agrément: 069-AM-2345 • Renouvelé en 2022</p>
                      <p className="mt-2 text-sm text-gray-600">Capacité d'accueil maximale: 4 enfants</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2 gap-1 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                      >
                        <Upload className="h-3 w-3" />
                        Mettre à jour mon agrément
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="housing" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations sur le logement</CardTitle>
                <CardDescription>Modifiez les informations concernant votre logement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="housingType" className="text-[#6A5ACD]">
                      Type de logement
                    </Label>
                    <Input
                      id="housingType"
                      name="housingType"
                      value={profileData.housingType}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="housingSize" className="text-[#6A5ACD]">
                      Surface
                    </Label>
                    <Input
                      id="housingSize"
                      name="housingSize"
                      value={profileData.housingSize}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="outdoor" className="text-[#6A5ACD]">
                    Espace extérieur
                  </Label>
                  <Input
                    id="outdoor"
                    name="outdoor"
                    value={profileData.outdoor}
                    onChange={handleChange}
                    className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="smokingStatus" className="text-[#6A5ACD]">
                      Statut tabac
                    </Label>
                    <Input
                      id="smokingStatus"
                      name="smokingStatus"
                      value={profileData.smokingStatus}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pets" className="text-[#6A5ACD]">
                      Animaux
                    </Label>
                    <Input
                      id="pets"
                      name="pets"
                      value={profileData.pets}
                      onChange={handleChange}
                      className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-[#6A5ACD]">Photos du logement</Label>
                  <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-dashed border-[#C7E9FB] bg-[#C7E9FB]/5">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Photo du logement"
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-sm hover:bg-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-dashed border-[#C7E9FB] bg-[#C7E9FB]/5">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Photo du logement"
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-sm hover:bg-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg border border-dashed border-[#C7E9FB] bg-[#C7E9FB]/5">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Photo du logement"
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-red-500 backdrop-blur-sm hover:bg-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-[#C7E9FB] bg-[#C7E9FB]/5 hover:bg-[#C7E9FB]/10"
                    >
                      <Plus className="h-8 w-8 text-[#6A5ACD]/50" />
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Ajoutez des photos de votre logement pour montrer l'environnement d'accueil aux familles.
                  </p>
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
