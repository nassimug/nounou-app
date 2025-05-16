"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Save, Upload, Plus, Clock, Check, ChevronRight } from "lucide-react"

export default function AddNounouPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    birthdate: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",

    // Informations professionnelles
    agrementNumber: "",
    agrementDate: "",
    renewalDate: "",
    capacity: "4",
    experience: "",
    certifications: [] as string[],

    // Disponibilités et préférences
    availableSpots: "2",
    ageGroups: [] as string[],
    schedule: [
      { day: "Lundi", active: true, start: "07:30", end: "18:30" },
      { day: "Mardi", active: true, start: "07:30", end: "18:30" },
      { day: "Mercredi", active: true, start: "07:30", end: "18:30" },
      { day: "Jeudi", active: true, start: "07:30", end: "18:30" },
      { day: "Vendredi", active: true, start: "07:30", end: "18:00" },
      { day: "Samedi", active: false, start: "", end: "" },
      { day: "Dimanche", active: false, start: "", end: "" },
    ],
    specialties: [] as string[],
    languages: [] as string[],

    // Description et statut
    about: "",
    housingType: "",
    housingSize: "",
    outdoor: "",
    smokingStatus: "non-fumeur",
    pets: "",
    status: "pending",
  })

  const [newCertification, setNewCertification] = useState("")
  const [newSpecialty, setNewSpecialty] = useState("")
  const [newLanguage, setNewLanguage] = useState("")

  const updateSchedule = (index: number, field: string, value: string | boolean) => {
    const newSchedule = [...formData.schedule]
    newSchedule[index] = { ...newSchedule[index], [field]: value }
    setFormData({
      ...formData,
      schedule: newSchedule,
    })
  }

  const addCertification = () => {
    if (newCertification.trim()) {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, newCertification.trim()],
      })
      setNewCertification("")
    }
  }

  const removeCertification = (index: number) => {
    const newCertifications = [...formData.certifications]
    newCertifications.splice(index, 1)
    setFormData({
      ...formData,
      certifications: newCertifications,
    })
  }

  const addSpecialty = () => {
    if (newSpecialty.trim()) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, newSpecialty.trim()],
      })
      setNewSpecialty("")
    }
  }

  const removeSpecialty = (index: number) => {
    const newSpecialties = [...formData.specialties]
    newSpecialties.splice(index, 1)
    setFormData({
      ...formData,
      specialties: newSpecialties,
    })
  }

  const addLanguage = () => {
    if (newLanguage.trim()) {
      setFormData({
        ...formData,
        languages: [...formData.languages, newLanguage.trim()],
      })
      setNewLanguage("")
    }
  }

  const removeLanguage = (index: number) => {
    const newLanguages = [...formData.languages]
    newLanguages.splice(index, 1)
    setFormData({
      ...formData,
      languages: newLanguages,
    })
  }

  const toggleAgeGroup = (ageGroup: string) => {
    if (formData.ageGroups.includes(ageGroup)) {
      setFormData({
        ...formData,
        ageGroups: formData.ageGroups.filter((group) => group !== ageGroup),
      })
    } else {
      setFormData({
        ...formData,
        ageGroups: [...formData.ageGroups, ageGroup],
      })
    }
  }

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const handleSubmit = () => {
    // Ici, vous implémenteriez la logique pour sauvegarder la nouvelle nounou
    console.log("Nounou ajoutée:", formData)
    alert("La nounou a été ajoutée avec succès !")
    // Redirection vers la liste des nounous
    window.location.href = "/ram/nounous"
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/nounous" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des nounous
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#6A5ACD]">Ajouter une assistante maternelle</h1>
        <p className="text-gray-600">
          Remplissez les informations pour créer un nouveau profil d'assistante maternelle
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-1 items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  activeStep === step
                    ? "border-[#6A5ACD] bg-[#6A5ACD] text-white"
                    : activeStep > step
                      ? "border-[#6A5ACD] bg-white text-[#6A5ACD]"
                      : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {activeStep > step ? <Check className="h-5 w-5" /> : step}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 border-t-2 ${activeStep > step ? "border-[#6A5ACD]" : "border-gray-300"}`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <div className="w-1/4 text-center font-medium text-[#6A5ACD]">Informations personnelles</div>
          <div className={`w-1/4 text-center ${activeStep >= 2 ? "font-medium text-[#6A5ACD]" : "text-gray-500"}`}>
            Informations professionnelles
          </div>
          <div className={`w-1/4 text-center ${activeStep >= 3 ? "font-medium text-[#6A5ACD]" : "text-gray-500"}`}>
            Disponibilités et préférences
          </div>
          <div className={`w-1/4 text-center ${activeStep >= 4 ? "font-medium text-[#6A5ACD]" : "text-gray-500"}`}>
            Description et statut
          </div>
        </div>
      </div>

      {activeStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#6A5ACD]">Informations personnelles</CardTitle>
            <CardDescription>Informations de base sur l'assistante maternelle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Prénom"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Nom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="birthdate">Date de naissance</Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Numéro de téléphone"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Adresse email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Adresse"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Ville"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Code postal</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  placeholder="Code postal"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">Photo de profil</Label>
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                  {/* Placeholder pour la photo */}
                </div>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Upload className="h-4 w-4" />
                  Télécharger une photo
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={nextStep} className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                Étape suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#6A5ACD]">Informations professionnelles</CardTitle>
            <CardDescription>Détails sur l'agrément et l'expérience professionnelle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="agrementNumber">Numéro d'agrément</Label>
                <Input
                  id="agrementNumber"
                  value={formData.agrementNumber}
                  onChange={(e) => setFormData({ ...formData, agrementNumber: e.target.value })}
                  placeholder="Ex: 069-AM-2345"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacité d'accueil</Label>
                <Select
                  value={formData.capacity}
                  onValueChange={(value) => setFormData({ ...formData, capacity: value })}
                >
                  <SelectTrigger id="capacity">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 enfant</SelectItem>
                    <SelectItem value="2">2 enfants</SelectItem>
                    <SelectItem value="3">3 enfants</SelectItem>
                    <SelectItem value="4">4 enfants</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="agrementDate">Date d'obtention de l'agrément</Label>
                <Input
                  id="agrementDate"
                  type="date"
                  value={formData.agrementDate}
                  onChange={(e) => setFormData({ ...formData, agrementDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="renewalDate">Date de renouvellement</Label>
                <Input
                  id="renewalDate"
                  type="date"
                  value={formData.renewalDate}
                  onChange={(e) => setFormData({ ...formData, renewalDate: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Expérience professionnelle</Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="< 1 an">Moins d'1 an</SelectItem>
                  <SelectItem value="1-3 ans">1 à 3 ans</SelectItem>
                  <SelectItem value="3-5 ans">3 à 5 ans</SelectItem>
                  <SelectItem value="5-10 ans">5 à 10 ans</SelectItem>
                  <SelectItem value="10-15 ans">10 à 15 ans</SelectItem>
                  <SelectItem value="> 15 ans">Plus de 15 ans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Certifications et formations</Label>
              <div className="mb-3 flex flex-wrap gap-2">
                {formData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 rounded-full bg-[#D1F2EB] px-3 py-1 text-sm text-[#6A5ACD]"
                  >
                    <span>{cert}</span>
                    <button
                      className="ml-1 rounded-full p-1 hover:bg-[#D1F2EB]/80"
                      onClick={() => removeCertification(index)}
                    >
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ajouter une certification"
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addCertification()}
                />
                <Button
                  onClick={addCertification}
                  className="gap-1 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Documents</Label>
              <div className="rounded-lg border border-dashed p-4 text-center">
                <Button variant="outline" className="gap-2 rounded-full">
                  <Upload className="h-4 w-4" />
                  Télécharger des documents
                </Button>
                <p className="mt-2 text-xs text-gray-500">Formats acceptés: PDF, JPG, PNG (max 5MB)</p>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Étape précédente
              </Button>
              <Button onClick={nextStep} className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                Étape suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#6A5ACD]">Disponibilités et préférences</CardTitle>
            <CardDescription>Horaires, disponibilités et spécialités</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="availableSpots">Places disponibles actuellement</Label>
              <Select
                value={formData.availableSpots}
                onValueChange={(value) => setFormData({ ...formData, availableSpots: value })}
              >
                <SelectTrigger id="availableSpots">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 place (complet)</SelectItem>
                  <SelectItem value="1">1 place</SelectItem>
                  <SelectItem value="2">2 places</SelectItem>
                  <SelectItem value="3">3 places</SelectItem>
                  <SelectItem value="4">4 places</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tranches d'âge acceptées</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="age1"
                    checked={formData.ageGroups.includes("0-12 mois")}
                    onCheckedChange={() => toggleAgeGroup("0-12 mois")}
                  />
                  <label htmlFor="age1" className="text-sm">
                    0-12 mois
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="age2"
                    checked={formData.ageGroups.includes("1-2 ans")}
                    onCheckedChange={() => toggleAgeGroup("1-2 ans")}
                  />
                  <label htmlFor="age2" className="text-sm">
                    1-2 ans
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="age3"
                    checked={formData.ageGroups.includes("2-3 ans")}
                    onCheckedChange={() => toggleAgeGroup("2-3 ans")}
                  />
                  <label htmlFor="age3" className="text-sm">
                    2-3 ans
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="age4"
                    checked={formData.ageGroups.includes("3+ ans")}
                    onCheckedChange={() => toggleAgeGroup("3+ ans")}
                  />
                  <label htmlFor="age4" className="text-sm">
                    3+ ans
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Horaires d'accueil</Label>
              <div className="space-y-4">
                {formData.schedule.map((day, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-lg border p-3">
                    <div className="w-24 font-medium">{day.day}</div>
                    <div className="flex flex-1 items-center gap-3">
                      <Switch
                        checked={day.active}
                        onCheckedChange={(checked) => updateSchedule(index, "active", checked)}
                      />
                      {day.active ? (
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <Input
                              type="time"
                              value={day.start}
                              onChange={(e) => updateSchedule(index, "start", e.target.value)}
                              className="w-32"
                            />
                          </div>
                          <span>à</span>
                          <Input
                            type="time"
                            value={day.end}
                            onChange={(e) => updateSchedule(index, "end", e.target.value)}
                            className="w-32"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-500">Non disponible</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Spécialités et activités</Label>
                <div className="mb-3 flex flex-wrap gap-2">
                  {formData.specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 rounded-full bg-[#FFDEE9]/30 px-3 py-1 text-sm text-[#6A5ACD]"
                    >
                      <span>{specialty}</span>
                      <button
                        className="ml-1 rounded-full p-1 hover:bg-[#FFDEE9]/50"
                        onClick={() => removeSpecialty(index)}
                      >
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une spécialité"
                    value={newSpecialty}
                    onChange={(e) => setNewSpecialty(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSpecialty()}
                  />
                  <Button
                    onClick={addSpecialty}
                    className="gap-1 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Langues parlées</Label>
                <div className="mb-3 flex flex-wrap gap-2">
                  {formData.languages.map((language, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 rounded-full bg-[#C7E9FB]/30 px-3 py-1 text-sm text-[#6A5ACD]"
                    >
                      <span>{language}</span>
                      <button
                        className="ml-1 rounded-full p-1 hover:bg-[#C7E9FB]/50"
                        onClick={() => removeLanguage(index)}
                      >
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une langue"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addLanguage()}
                  />
                  <Button
                    onClick={addLanguage}
                    className="gap-1 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Étape précédente
              </Button>
              <Button onClick={nextStep} className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                Étape suivante
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#6A5ACD]">Description et statut</CardTitle>
            <CardDescription>Informations sur le logement et statut du profil</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="about">À propos</Label>
              <Textarea
                id="about"
                placeholder="Description de l'assistante maternelle, son approche pédagogique, etc."
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                rows={5}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="housingType">Type de logement</Label>
                <Select
                  value={formData.housingType}
                  onValueChange={(value) => setFormData({ ...formData, housingType: value })}
                >
                  <SelectTrigger id="housingType">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="housingSize">Surface</Label>
                <Input
                  id="housingSize"
                  placeholder="Ex: 90m²"
                  value={formData.housingSize}
                  onChange={(e) => setFormData({ ...formData, housingSize: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="outdoor">Espace extérieur</Label>
                <Input
                  id="outdoor"
                  placeholder="Ex: Balcon sécurisé, jardin, etc."
                  value={formData.outdoor}
                  onChange={(e) => setFormData({ ...formData, outdoor: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pets">Animaux</Label>
                <Input
                  id="pets"
                  placeholder="Ex: Chat, chien, etc. ou aucun"
                  value={formData.pets}
                  onChange={(e) => setFormData({ ...formData, pets: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="smokingStatus">Tabac</Label>
              <Select
                value={formData.smokingStatus}
                onValueChange={(value) => setFormData({ ...formData, smokingStatus: value })}
              >
                <SelectTrigger id="smokingStatus">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-fumeur">Non-fumeur</SelectItem>
                  <SelectItem value="fumeur-exterieur">Fumeur (à l'extérieur uniquement)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Statut du profil</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">En attente de validation</SelectItem>
                  <SelectItem value="active">Actif</SelectItem>
                  <SelectItem value="inactive">Inactif</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
              >
                <ChevronLeft className="h-4 w-4" />
                Étape précédente
              </Button>
              <Button
                onClick={handleSubmit}
                className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80"
              >
                <Save className="h-4 w-4" />
                Enregistrer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  )
}
