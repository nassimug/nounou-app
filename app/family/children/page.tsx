"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Plus, Baby, Calendar, Cake, User } from "lucide-react"

export default function FamilyChildrenPage() {
  const children = [
    {
      id: 1,
      name: "Emma",
      age: "3 ans",
      birthdate: "12/05/2020",
      image: "/emma.png",
      nounou: "Marie Dupont",
    },
    {
      id: 2,
      name: "Lucas",
      age: "1 an",
      birthdate: "23/11/2022",
      image: "/lucas.png",
      nounou: "Marie Dupont",
    },
  ]

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/family/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Mes enfants</h1>
          <p className="text-gray-600">Gérez les informations de vos enfants</p>
        </div>
        <Link href="/family/add-child">
          <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <Plus className="h-4 w-4" />
            Ajouter un enfant
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children.map((child) => (
          <Card key={child.id} className="overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-[#FFDEE9]/30">
              <img src={child.image || "/placeholder.svg"} alt={child.name} className="h-full w-full object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-[#6A5ACD]">{child.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Cake className="h-4 w-4 text-[#6A5ACD]" />
                  <span>
                    {child.age} • Né(e) le {child.birthdate}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4 text-[#6A5ACD]" />
                  <span>Nounou: {child.nounou}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link href={`/family/child/${child.id}`}>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
                  >
                    <Baby className="h-4 w-4" />
                    Détails
                  </Button>
                </Link>
                <Link href={`/family/child/${child.id}/planning`}>
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/20"
                  >
                    <Calendar className="h-4 w-4" />
                    Planning
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
