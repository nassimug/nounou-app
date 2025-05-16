"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Save, Trash, Plus, X, Calendar, AlertCircle, Phone, User } from "lucide-react"

export default function EditChildPage() {
  const params = useParams()
  const router = useRouter()
  const childId = params.id

  // Données simulées pour l'enfant
  const [childData, setChildData] = useState({
    id: childId,
    name: childId === "1" ? "Emma" : "Lucas",
    lastName: "Martin",
    birthdate: childId === "1" ? "2020-05-12" : "2022-11-23",
    gender: childId === "1" ? "female" : "male",
    image: childId === "1" ? "/child-portrait.png" : "/placeholder-8rop1.png",
    allergies: childId === "1" ? ["Arachides", "Fraises"] : [],
    particularites: childId === "1" ? "Doudou nécessaire pour la sieste" : "Tétine pour dormir",
    address: "15 rue des Lilas, 69003 Lyon",
    emergency: [
      { name: "Sophie Martin (Maman)", phone: "06 12 34 56 78" },
      { name: "Thomas Martin (Papa)", phone: "06 98 76 54 32" },
      { name: "Dr. Petit (Pédiatre)", phone: "04 72 00 00 00" },
    ],
    schedule: [
      { day: "Lundi", hours: "8h30 - 18h00", active: true },
      { day: "Mardi", hours: "8h30 - 18h00", active: true },
      { day: "Mercredi", hours: "8h30 - 12h30", active: true },
      { day: "Jeudi", hours: "8h30 - 18h00", active: true },
      { day: "Vendredi", hours: "8h30 - 17h00", active: true },
      { day: "Samedi", hours: "", active: false },
      { day: "Dimanche", hours: "", active: false },
    ],
    meals:
      childId === "1"
        ? "Emma mange de tout mais préfère les pâtes. Elle boit environ 500ml d'eau par jour."
        : "Lucas mange des petits morceaux et a besoin d'aide pour boire au verre.",
    nap:
      childId === "1"
        ? "Une sieste l'après-midi d'environ 1h30 (13h-14h30). A besoin de son doudou."
        : "Deux siestes par jour : 10h-11h et 14h-16h. Utilise une tétine pour s'endormir.",
    activities:
      childId === "1" ? "Dessin, lecture d'histoires, jeux de construction." : "Jeux d'éveil, musique, cubes.",
    medicalInfo: "",
    doctorName: "Dr. Petit",
    doctorPhone: "04 72 00 00 00",
  })

  const [newAllergy, setNewAllergy] = useState("")
  const [newEmergencyContact, setNewEmergencyContact] = useState({ name: "", phone: "" })
  const [activeTab, setActiveTab] = useState("general")

  const addAllergy = () => {
    if (newAllergy.trim()) {
      setChildData({
        ...childData,
        allergies: [...childData.allergies, newAllergy.trim()],
      })
      setNewAllergy("")
    }
  }

  const removeAllergy = (index: number) => {
    const newAllergies = [...childData.allergies]
    newAllergies.splice(index, 1)
    setChildData({
      ...childData,
      allergies: newAllergies,
    })
  }

  const addEmergencyContact = () => {
    if (newEmergencyContact.name.trim() && newEmergencyContact.phone.trim()) {
      setChildData({
        ...childData,
        emergency: [...childData.emergency, { ...newEmergencyContact }],
      })
      setNewEmergencyContact({ name: "", phone: "" })
    }
  }

  const removeEmergencyContact = (index: number) => {
    const newContacts = [...childData.emergency]
    newContacts.splice(index, 1)
    setChildData({
      ...childData,
      emergency: newContacts,
    })
  }

  const updateSchedule = (index: number, field: string, value: string | boolean) => {
    const newSchedule = [...childData.schedule]
    newSchedule[index] = { ...newSchedule[index], [field]: value }
    setChildData({
      ...childData,
      schedule: newSchedule,
    })
  }

  const handleSave = () => {
    // Ici, vous implémenteriez la logique pour sauvegarder les modifications
    // Pour l'instant, nous simulons juste une sauvegarde réussie
    alert("Les modifications ont été enregistrées avec succès !")
    router.push(`/family/child/${childId}`)
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href={`/family/child/${childId}`} className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au profil de {childData.name}
      </Link>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Modifier le profil de {childData.name}</h1>
        <Button onClick={handleSave} className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
          <Save className="h-4 w-4" />
          Enregistrer
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="general">Informations générales</TabsTrigger>
          <TabsTrigger value="medical">Santé</TabsTrigger>
          <TabsTrigger value="schedule">Planning</TabsTrigger>
          <TabsTrigger value="daily">Quotidien</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Informations personnelles</CardTitle>
                <CardDescription>Informations de base sur l'enfant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={childData.name}
                      onChange={(e) => setChildData({ ...childData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={childData.lastName}
                      onChange={(e) => setChildData({ ...childData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Date de naissance</Label>
                    <Input
                      id="birthdate"
                      type="date"
                      value={childData.birthdate}
                      onChange={(e) => setChildData({ ...childData, birthdate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Genre</Label>
                    <Select
                      value={childData.gender}
                      onValueChange={(value) => setChildData({ ...childData, gender: value })}
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Fille</SelectItem>
                        <SelectItem value="male">Garçon</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={childData.address}
                    onChange={(e) => setChildData({ ...childData, address: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Photo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 overflow-hidden rounded-full">
                      <img
                        src={childData.image || "/placeholder.svg"}
                        alt={childData.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button variant="outline" className="rounded-full">
                      Changer la photo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Contacts d'urgence</CardTitle>
                <CardDescription>Personnes à contacter en cas d'urgence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {childData.emergency.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDEE9]">
                          <User className="h-5 w-5 text-[#6A5ACD]" />
                        </div>
                        <div>
                          <p className="font-medium text-[#6A5ACD]">{contact.name}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Phone className="h-3 w-3" />
                            <span>{contact.phone}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() => removeEmergencyContact(index)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <div className="rounded-lg border p-3">
                    <div className="mb-3 grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="contactName" className="text-xs">
                          Nom
                        </Label>
                        <Input
                          id="contactName"
                          placeholder="Nom et relation"
                          value={newEmergencyContact.name}
                          onChange={(e) => setNewEmergencyContact({ ...newEmergencyContact, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="contactPhone" className="text-xs">
                          Téléphone
                        </Label>
                        <Input
                          id="contactPhone"
                          placeholder="Numéro de téléphone"
                          value={newEmergencyContact.phone}
                          onChange={(e) => setNewEmergencyContact({ ...newEmergencyContact, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <Button
                      onClick={addEmergencyContact}
                      className="w-full gap-2 rounded-full bg-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/80"
                    >
                      <Plus className="h-4 w-4" />
                      Ajouter un contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="medical">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Allergies et particularités</CardTitle>
                <CardDescription>Informations médicales importantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Allergies</Label>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {childData.allergies.map((allergie, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm text-red-800"
                        >
                          <AlertCircle className="h-3 w-3" />
                          <span>{allergie}</span>
                          <button
                            className="ml-1 rounded-full p-1 hover:bg-red-200"
                            onClick={() => removeAllergy(index)}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ajouter une allergie"
                        value={newAllergy}
                        onChange={(e) => setNewAllergy(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addAllergy()}
                      />
                      <Button
                        onClick={addAllergy}
                        className="gap-1 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="particularites">Particularités</Label>
                    <Textarea
                      id="particularites"
                      placeholder="Particularités médicales ou comportementales"
                      value={childData.particularites}
                      onChange={(e) => setChildData({ ...childData, particularites: e.target.value })}
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Informations médicales</CardTitle>
                <CardDescription>Médecin traitant et informations de santé</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctorName">Médecin traitant</Label>
                      <Input
                        id="doctorName"
                        value={childData.doctorName}
                        onChange={(e) => setChildData({ ...childData, doctorName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctorPhone">Téléphone du médecin</Label>
                      <Input
                        id="doctorPhone"
                        value={childData.doctorPhone}
                        onChange={(e) => setChildData({ ...childData, doctorPhone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalInfo">Informations médicales supplémentaires</Label>
                    <Textarea
                      id="medicalInfo"
                      placeholder="Traitements en cours, antécédents médicaux, etc."
                      value={childData.medicalInfo}
                      onChange={(e) => setChildData({ ...childData, medicalInfo: e.target.value })}
                      rows={6}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#6A5ACD]">Planning hebdomadaire</CardTitle>
              <CardDescription>Horaires de garde habituels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {childData.schedule.map((day, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-lg border p-3">
                    <div className="w-24 font-medium">{day.day}</div>
                    <div className="flex flex-1 items-center gap-3">
                      <Switch
                        checked={day.active}
                        onCheckedChange={(checked) => updateSchedule(index, "active", checked)}
                      />
                      {day.active ? (
                        <Input
                          placeholder="Horaires (ex: 8h30 - 18h00)"
                          value={day.hours}
                          onChange={(e) => updateSchedule(index, "hours", e.target.value)}
                          className="max-w-xs"
                        />
                      ) : (
                        <span className="text-gray-500">Non prévu</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-6 flex justify-end">
                  <Link href={`/family/child/${childId}/planning`}>
                    <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                      <Calendar className="h-4 w-4" />
                      Planning détaillé
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Habitudes alimentaires</CardTitle>
                <CardDescription>Préférences et habitudes alimentaires</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="meals">Repas et alimentation</Label>
                  <Textarea
                    id="meals"
                    placeholder="Habitudes alimentaires, préférences, quantités..."
                    value={childData.meals}
                    onChange={(e) => setChildData({ ...childData, meals: e.target.value })}
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Sommeil</CardTitle>
                <CardDescription>Habitudes de sieste et de sommeil</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="nap">Sieste et sommeil</Label>
                  <Textarea
                    id="nap"
                    placeholder="Horaires de sieste, rituels d'endormissement..."
                    value={childData.nap}
                    onChange={(e) => setChildData({ ...childData, nap: e.target.value })}
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-[#6A5ACD]">Activités préférées</CardTitle>
                <CardDescription>Jeux et activités appréciés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="activities">Activités et jeux</Label>
                  <Textarea
                    id="activities"
                    placeholder="Activités préférées, jeux, centres d'intérêt..."
                    value={childData.activities}
                    onChange={(e) => setChildData({ ...childData, activities: e.target.value })}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" className="gap-2 rounded-full border-red-200 text-red-600 hover:bg-red-50">
          <Trash className="h-4 w-4" />
          Supprimer le profil
        </Button>
        <Button onClick={handleSave} className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
          <Save className="h-4 w-4" />
          Enregistrer les modifications
        </Button>
      </div>
    </main>
  )
}
