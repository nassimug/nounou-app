"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Save, Plus, Trash2, User, Mail, Phone, Home, Baby, FileText, AlertCircle } from "lucide-react"

export default function RamAddFamilyPage() {
  const [familyData, setFamilyData] = useState({
    familyName: "",
    parent1FirstName: "",
    parent1LastName: "",
    parent1Email: "",
    parent1Phone: "",
    parent2FirstName: "",
    parent2LastName: "",
    parent2Email: "",
    parent2Phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
    priority: "normal",
    status: "active",
    specialNeeds: false,
    atypicalHours: false,
  })

  const [children, setChildren] = useState([
    { id: 1, firstName: "", lastName: "", birthDate: "", specialNeeds: false, notes: "" },
  ])

  const handleFamilyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFamilyData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFamilyData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSwitchChange = (field: string, checked: boolean) => {
    setFamilyData((prev) => ({ ...prev, [field]: checked }))
  }

  const handleChildChange = (id: number, field: string, value: any) => {
    setChildren((prev) => prev.map((child) => (child.id === id ? { ...child, [field]: value } : child)))
  }

  const addChild = () => {
    const newId = children.length > 0 ? Math.max(...children.map((child) => child.id)) + 1 : 1
    setChildren([
      ...children,
      { id: newId, firstName: "", lastName: "", birthDate: "", specialNeeds: false, notes: "" },
    ])
  }

  const removeChild = (id: number) => {
    if (children.length > 1) {
      setChildren(children.filter((child) => child.id !== id))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi des données au serveur
    console.log("Données de la famille:", familyData)
    console.log("Enfants:", children)
    alert("Famille ajoutée avec succès !")
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/families" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des familles
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Ajouter une nouvelle famille</h1>
        <p className="text-gray-600">Remplissez les informations pour créer un nouveau dossier famille</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="family" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger value="family">Informations famille</TabsTrigger>
            <TabsTrigger value="children">Enfants</TabsTrigger>
            <TabsTrigger value="additional">Informations complémentaires</TabsTrigger>
          </TabsList>

          <TabsContent value="family">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations de la famille</CardTitle>
                <CardDescription>Renseignez les coordonnées et informations principales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="familyName" className="text-[#6A5ACD]">
                    Nom de la famille
                  </Label>
                  <Input
                    id="familyName"
                    name="familyName"
                    value={familyData.familyName}
                    onChange={handleFamilyChange}
                    placeholder="Ex: Famille Martin"
                    className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    required
                  />
                </div>

                <div className="rounded-lg bg-[#FFDEE9]/20 p-4">
                  <h3 className="mb-4 flex items-center text-lg font-medium text-[#6A5ACD]">
                    <User className="mr-2 h-5 w-5" />
                    Parent 1
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parent1FirstName" className="text-[#6A5ACD]">
                        Prénom
                      </Label>
                      <Input
                        id="parent1FirstName"
                        name="parent1FirstName"
                        value={familyData.parent1FirstName}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parent1LastName" className="text-[#6A5ACD]">
                        Nom
                      </Label>
                      <Input
                        id="parent1LastName"
                        name="parent1LastName"
                        value={familyData.parent1LastName}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parent1Email" className="text-[#6A5ACD]">
                        Email
                      </Label>
                      <div className="mt-1 flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="parent1Email"
                          name="parent1Email"
                          type="email"
                          value={familyData.parent1Email}
                          onChange={handleFamilyChange}
                          className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="parent1Phone" className="text-[#6A5ACD]">
                        Téléphone
                      </Label>
                      <div className="mt-1 flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="parent1Phone"
                          name="parent1Phone"
                          value={familyData.parent1Phone}
                          onChange={handleFamilyChange}
                          className="border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#C7E9FB]/20 p-4">
                  <h3 className="mb-4 flex items-center text-lg font-medium text-[#6A5ACD]">
                    <User className="mr-2 h-5 w-5" />
                    Parent 2 (optionnel)
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parent2FirstName" className="text-[#6A5ACD]">
                        Prénom
                      </Label>
                      <Input
                        id="parent2FirstName"
                        name="parent2FirstName"
                        value={familyData.parent2FirstName}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parent2LastName" className="text-[#6A5ACD]">
                        Nom
                      </Label>
                      <Input
                        id="parent2LastName"
                        name="parent2LastName"
                        value={familyData.parent2LastName}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="parent2Email" className="text-[#6A5ACD]">
                        Email
                      </Label>
                      <div className="mt-1 flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="parent2Email"
                          name="parent2Email"
                          type="email"
                          value={familyData.parent2Email}
                          onChange={handleFamilyChange}
                          className="border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="parent2Phone" className="text-[#6A5ACD]">
                        Téléphone
                      </Label>
                      <div className="mt-1 flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-gray-400" />
                        <Input
                          id="parent2Phone"
                          name="parent2Phone"
                          value={familyData.parent2Phone}
                          onChange={handleFamilyChange}
                          className="border-[#C7E9FB] focus-visible:ring-[#6A5ACD]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-4 flex items-center text-lg font-medium text-[#6A5ACD]">
                    <Home className="mr-2 h-5 w-5" />
                    Adresse
                  </h3>
                  <div>
                    <Label htmlFor="address" className="text-[#6A5ACD]">
                      Adresse complète
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={familyData.address}
                      onChange={handleFamilyChange}
                      className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                      required
                    />
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="city" className="text-[#6A5ACD]">
                        Ville
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={familyData.city}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode" className="text-[#6A5ACD]">
                        Code postal
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={familyData.postalCode}
                        onChange={handleFamilyChange}
                        className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                    onClick={() => (document.querySelector('[data-value="children"]') as HTMLElement | null)?.click()}
                  >
                    Continuer vers les enfants
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="children">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations des enfants</CardTitle>
                <CardDescription>Ajoutez les informations pour chaque enfant de la famille</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {children.map((child, index) => (
                  <div key={child.id} className="rounded-lg bg-[#FFDEE9]/20 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="flex items-center text-lg font-medium text-[#6A5ACD]">
                        <Baby className="mr-2 h-5 w-5" />
                        Enfant {index + 1}
                      </h3>
                      {children.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 rounded-full p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                          onClick={() => removeChild(child.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Supprimer</span>
                        </Button>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor={`child-${child.id}-firstName`} className="text-[#6A5ACD]">
                          Prénom
                        </Label>
                        <Input
                          id={`child-${child.id}-firstName`}
                          value={child.firstName}
                          onChange={(e) => handleChildChange(child.id, "firstName", e.target.value)}
                          className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`child-${child.id}-lastName`} className="text-[#6A5ACD]">
                          Nom
                        </Label>
                        <Input
                          id={`child-${child.id}-lastName`}
                          value={child.lastName}
                          onChange={(e) => handleChildChange(child.id, "lastName", e.target.value)}
                          className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor={`child-${child.id}-birthDate`} className="text-[#6A5ACD]">
                        Date de naissance
                      </Label>
                      <Input
                        id={`child-${child.id}-birthDate`}
                        type="date"
                        value={child.birthDate}
                        onChange={(e) => handleChildChange(child.id, "birthDate", e.target.value)}
                        className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        required
                      />
                    </div>

                    <div className="mt-4 flex items-center space-x-2">
                      <Switch
                        id={`child-${child.id}-specialNeeds`}
                        checked={child.specialNeeds}
                        onCheckedChange={(checked) => handleChildChange(child.id, "specialNeeds", checked)}
                      />
                      <Label htmlFor={`child-${child.id}-specialNeeds`} className="text-[#6A5ACD]">
                        Besoins spécifiques ou situation particulière
                      </Label>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor={`child-${child.id}-notes`} className="text-[#6A5ACD]">
                        Notes spécifiques
                      </Label>
                      <Textarea
                        id={`child-${child.id}-notes`}
                        value={child.notes}
                        onChange={(e) => handleChildChange(child.id, "notes", e.target.value)}
                        className="mt-1 min-h-20 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                        placeholder="Informations complémentaires sur l'enfant..."
                      />
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  onClick={addChild}
                >
                  <Plus className="h-4 w-4" />
                  Ajouter un enfant
                </Button>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                    onClick={() => (document.querySelector('[data-value="family"]') as HTMLElement | null)?.click()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Retour aux informations famille
                  </Button>
                  <Button
                    type="button"
                    className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                    onClick={() => (document.querySelector('[data-value="additional"]') as HTMLElement | null)?.click()}
                  >
                    Continuer vers les informations complémentaires
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="additional">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations complémentaires</CardTitle>
                <CardDescription>Ajoutez des détails supplémentaires sur la famille</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="status" className="text-[#6A5ACD]">
                      Statut
                    </Label>
                    <Select value={familyData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                      <SelectTrigger id="status" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                        <SelectValue placeholder="Sélectionnez un statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Actif</SelectItem>
                        <SelectItem value="searching">En recherche</SelectItem>
                        <SelectItem value="waiting">En attente</SelectItem>
                        <SelectItem value="inactive">Inactif</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority" className="text-[#6A5ACD]">
                      Priorité
                    </Label>
                    <Select
                      value={familyData.priority}
                      onValueChange={(value) => handleSelectChange("priority", value)}
                    >
                      <SelectTrigger id="priority" className="mt-1 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]">
                        <SelectValue placeholder="Sélectionnez une priorité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">Élevée</SelectItem>
                        <SelectItem value="normal">Normale</SelectItem>
                        <SelectItem value="low">Faible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg bg-gray-50 p-4">
                  <h3 className="flex items-center text-lg font-medium text-[#6A5ACD]">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Situations particulières
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="specialNeeds"
                      checked={familyData.specialNeeds}
                      onCheckedChange={(checked) => handleSwitchChange("specialNeeds", checked)}
                    />
                    <Label htmlFor="specialNeeds" className="text-[#6A5ACD]">
                      Besoins spécifiques ou situation particulière
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="atypicalHours"
                      checked={familyData.atypicalHours}
                      onCheckedChange={(checked) => handleSwitchChange("atypicalHours", checked)}
                    />
                    <Label htmlFor="atypicalHours" className="text-[#6A5ACD]">
                      Horaires atypiques
                    </Label>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-[#6A5ACD]" />
                    <Label htmlFor="notes" className="text-lg font-medium text-[#6A5ACD]">
                      Notes et observations
                    </Label>
                  </div>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={familyData.notes}
                    onChange={handleFamilyChange}
                    className="min-h-32 border-[#FFDEE9] focus-visible:ring-[#6A5ACD]"
                    placeholder="Ajoutez des notes ou observations concernant cette famille..."
                  />
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                    onClick={() => (document.querySelector('[data-value="children"]') as HTMLElement | null)?.click()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Retour aux enfants
                  </Button>
                  <Button type="submit" className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <Save className="h-4 w-4" />
                    Enregistrer la famille
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </main>
  )
}
