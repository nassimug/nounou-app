"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  Baby,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertCircle,
  Info,
  Clock,
  FileText,
  Utensils,
  Moon,
  Sun,
  Activity,
  BookOpen,
  MessageCircle,
  Download,
  Upload,
} from "lucide-react"

export default function ChildDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("info")

  // Données simulées pour un enfant
  const child = {
    id: Number.parseInt(params.id),
    name: "Emma Martin",
    age: "3 ans",
    birthdate: "15/05/2020",
    image: "/child-portrait.png",
    family: {
      name: "Famille Martin",
      parents: "Thomas et Sophie Martin",
      address: "15 rue des Lilas, 69003 Lyon",
      phone: "06 12 34 56 78",
      email: "martin@example.com",
    },
    allergies: ["Arachides", "Fraises"],
    medicalInfo: "Asthme léger, utilisation d'un inhalateur si nécessaire",
    schedule: "Lundi au vendredi, 8h-18h",
    startDate: "01/09/2022",
    status: "active",
    emergencyContacts: [
      {
        name: "Marie Martin (Grand-mère)",
        phone: "06 23 45 67 89",
        relation: "Grand-mère maternelle",
      },
      {
        name: "Jean Dupont (Oncle)",
        phone: "06 34 56 78 90",
        relation: "Oncle paternel",
      },
    ],
    medicalAuthorizations: true,
    doctor: {
      name: "Dr. Petit",
      phone: "04 78 12 34 56",
      address: "22 avenue Jean Jaurès, 69007 Lyon",
    },
    dietaryRestrictions: ["Sans arachides", "Limiter le sucre"],
    sleepHabits: "Sieste de 13h à 15h, doudou nécessaire",
    activities: ["Dessin", "Lecture", "Jeux d'extérieur"],
    development: [
      {
        date: "15/10/2022",
        milestone: "Premiers mots complets",
        notes: "Emma commence à former des phrases simples de 2-3 mots",
      },
      {
        date: "22/01/2023",
        milestone: "Propreté diurne",
        notes: "Emma est propre pendant la journée, quelques accidents occasionnels",
      },
      {
        date: "10/04/2023",
        milestone: "Reconnaissance des couleurs",
        notes: "Emma peut identifier et nommer les couleurs primaires",
      },
    ],
    documents: [
      {
        name: "Carnet de santé (copie)",
        date: "01/09/2022",
        type: "medical",
      },
      {
        name: "Autorisation parentale",
        date: "01/09/2022",
        type: "authorization",
      },
      {
        name: "Ordonnance médicale - Inhalateur",
        date: "15/11/2022",
        type: "medical",
      },
    ],
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/nounou/children" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour à la liste des enfants
      </Link>

      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
          <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#FFDEE9] md:mb-0">
            <img src={child.image || "/placeholder.svg"} alt={child.name} className="h-full w-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <h1 className="text-3xl font-bold text-[#6A5ACD]">{child.name}</h1>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>
            </div>
            <div className="mt-2 flex flex-col items-center gap-2 text-gray-600 md:flex-row">
              <div className="flex items-center gap-1">
                <Baby className="h-4 w-4" />
                <span>{child.age}</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Né(e) le {child.birthdate}</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Depuis le {child.startDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/nounou/messages?contact=${child.family.name.toLowerCase().replace(" ", "-")}`}>
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <MessageCircle className="h-4 w-4" />
              Contacter la famille
            </Button>
          </Link>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="info">Informations</TabsTrigger>
          <TabsTrigger value="daily">Quotidien</TabsTrigger>
          <TabsTrigger value="development">Développement</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations familiales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <User className="h-4 w-4" />
                    Famille
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{child.family.name}</p>
                    <p>{child.family.parents}</p>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-500" />
                      <span>{child.family.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <span>{child.family.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3 text-gray-500" />
                      <span>{child.family.email}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Phone className="h-4 w-4" />
                    Contacts d'urgence
                  </h3>
                  <div className="space-y-3 text-sm">
                    {child.emergencyContacts.map((contact, index) => (
                      <div key={index} className="rounded-lg bg-gray-50 p-3">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-gray-600">{contact.relation}</p>
                        <div className="mt-1 flex items-center gap-1">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span>{contact.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Informations médicales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <AlertCircle className="h-4 w-4" />
                    Allergies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {child.allergies.map((allergy, index) => (
                      <Badge key={index} variant="outline" className="border-red-200 bg-red-50 text-red-700">
                        {allergy}
                      </Badge>
                    ))}
                    {child.allergies.length === 0 && <p className="text-sm text-gray-600">Aucune allergie connue</p>}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Heart className="h-4 w-4" />
                    Informations médicales
                  </h3>
                  <p className="text-sm text-gray-600">
                    {child.medicalInfo || "Aucune information médicale particulière"}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <User className="h-4 w-4" />
                    Médecin traitant
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{child.doctor.name}</p>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3 text-gray-500" />
                      <span>{child.doctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-500" />
                      <span>{child.doctor.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Info className="h-4 w-4" />
                    Autorisations
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Autorisation médicale d'urgence:</span>{" "}
                      <Badge variant="outline" className="ml-1 border-green-200 bg-green-50 text-green-700">
                        {child.medicalAuthorizations ? "Oui" : "Non"}
                      </Badge>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-[#C7E9FB]/10 p-4">
                  <h3 className="mb-3 font-medium text-[#6A5ACD]">Horaires habituels</h3>
                  <div className="grid gap-4 md:grid-cols-5">
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <p className="font-medium text-[#6A5ACD]">Lundi</p>
                      <p className="text-sm text-gray-600">8h00 - 18h00</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <p className="font-medium text-[#6A5ACD]">Mardi</p>
                      <p className="text-sm text-gray-600">8h00 - 18h00</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <p className="font-medium text-[#6A5ACD]">Mercredi</p>
                      <p className="text-sm text-gray-600">8h00 - 18h00</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <p className="font-medium text-[#6A5ACD]">Jeudi</p>
                      <p className="text-sm text-gray-600">8h00 - 18h00</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <p className="font-medium text-[#6A5ACD]">Vendredi</p>
                      <p className="text-sm text-gray-600">8h00 - 18h00</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Date de début:</span> {child.startDate}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="daily" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Alimentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Utensils className="h-4 w-4" />
                    Restrictions alimentaires
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {child.dietaryRestrictions.map((restriction, index) => (
                      <Badge key={index} variant="outline" className="border-orange-200 bg-orange-50 text-orange-700">
                        {restriction}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Info className="h-4 w-4" />
                    Habitudes alimentaires
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Petit-déjeuner:</span> Céréales ou tartines, un fruit
                    </p>
                    <p>
                      <span className="font-medium">Déjeuner:</span> Repas équilibré, éviter les aliments trop sucrés
                    </p>
                    <p>
                      <span className="font-medium">Goûter:</span> Compote et biscuits, limiter les sucreries
                    </p>
                    <p>
                      <span className="font-medium">Préférences:</span> Aime particulièrement les pâtes, les carottes et
                      les pommes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Sommeil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Moon className="h-4 w-4" />
                    Habitudes de sommeil
                  </h3>
                  <p className="text-sm text-gray-600">{child.sleepHabits}</p>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Info className="h-4 w-4" />
                    Rituels d'endormissement
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Doudou:</span> Petit lapin bleu (indispensable)
                    </p>
                    <p>
                      <span className="font-medium">Rituel:</span> Petite histoire avant la sieste
                    </p>
                    <p>
                      <span className="font-medium">Conditions:</span> Préfère une pièce légèrement éclairée
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Activités</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Activity className="h-4 w-4" />
                    Activités préférées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {child.activities.map((activity, index) => (
                      <Badge key={index} variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Sun className="h-4 w-4" />
                    Activités quotidiennes recommandées
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Matin:</span> Activités calmes (dessin, lecture)
                    </p>
                    <p>
                      <span className="font-medium">Après-midi:</span> Jeux d'extérieur si le temps le permet
                    </p>
                    <p>
                      <span className="font-medium">Limites:</span> Maximum 30 minutes d'écran par jour
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#6A5ACD]">Comportement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <Info className="h-4 w-4" />
                    Particularités comportementales
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Timidité:</span> Peut être réservée avec les nouvelles personnes
                    </p>
                    <p>
                      <span className="font-medium">Anxiété:</span> Parfois inquiète lors des séparations
                    </p>
                    <p>
                      <span className="font-medium">Sociabilité:</span> S'entend bien avec les autres enfants
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 flex items-center gap-1 font-medium text-[#6A5ACD]">
                    <BookOpen className="h-4 w-4" />
                    Approche éducative
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Discipline:</span> Approche positive, explication des règles
                    </p>
                    <p>
                      <span className="font-medium">Autonomie:</span> Encourager à faire seule quand c'est possible
                    </p>
                    <p>
                      <span className="font-medium">Communication:</span> Utiliser des mots simples et clairs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="development" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Suivi du développement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {child.development.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-[#6A5ACD] pl-6 before:absolute before:-left-[9px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-[#6A5ACD] before:content-['']"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-medium text-[#6A5ACD]">{milestone.milestone}</h3>
                      <Badge variant="outline" className="border-[#C7E9FB] bg-[#C7E9FB]/20 text-[#6A5ACD]">
                        {milestone.date}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{milestone.notes}</p>
                  </div>
                ))}

                <div className="mt-8 rounded-lg bg-[#FFDEE9]/10 p-4">
                  <h3 className="mb-3 font-medium text-[#6A5ACD]">Ajouter une nouvelle étape</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Date</label>
                      <input
                        type="date"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Étape</label>
                      <input
                        type="text"
                        placeholder="Ex: Premier mot"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Notes</label>
                      <input
                        type="text"
                        placeholder="Observations"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                      Ajouter cette étape
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#6A5ACD]">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 space-y-4">
                {child.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          doc.type === "medical"
                            ? "bg-red-100 text-red-600"
                            : doc.type === "authorization"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-gray-600">Ajouté le {doc.date}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                    >
                      <Download className="h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
                ))}
              </div>

              <div className="rounded-lg bg-[#D1F2EB]/20 p-4">
                <h3 className="mb-3 font-medium text-[#6A5ACD]">Ajouter un document</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Type de document</label>
                    <select className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]">
                      <option value="">Sélectionner un type</option>
                      <option value="medical">Document médical</option>
                      <option value="authorization">Autorisation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Nom du document</label>
                    <input
                      type="text"
                      placeholder="Ex: Carnet de santé"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#6A5ACD] focus:outline-none focus:ring-1 focus:ring-[#6A5ACD]"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Fichier</label>
                  <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm font-medium text-gray-700">Cliquez pour télécharger un fichier</p>
                      <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG jusqu'à 10MB</p>
                    </div>
                    <input type="file" className="hidden" />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                    <Upload className="h-4 w-4" />
                    Ajouter ce document
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
