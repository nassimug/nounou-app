"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Download, BarChart, PieChart, LineChart, Users, Calendar } from "lucide-react"

export default function RamStatisticsPage() {
  const [period, setPeriod] = useState("2023")

  return (
    <main className="container mx-auto p-4 py-8">
      <Link href="/ram/dashboard" className="mb-8 flex items-center text-sm text-[#6A5ACD] hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Retour au tableau de bord
      </Link>

      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-[#6A5ACD]">Statistiques et rapports</h1>
          <p className="text-gray-600">Analysez les données de votre secteur</p>
        </div>
        <div className="flex gap-2">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-32 border-[#D1F2EB]">
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="all">Toutes</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="gap-2 rounded-full border-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/20"
          >
            <Download className="h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-[#D1F2EB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Nounous</CardTitle>
            <CardDescription>Total des assistantes maternelles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">42</div>
            <p className="text-sm text-gray-600">
              <span className="text-green-600">+5%</span> depuis l'année dernière
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFDEE9]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Familles</CardTitle>
            <CardDescription>Total des familles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">78</div>
            <p className="text-sm text-gray-600">
              <span className="text-green-600">+12%</span> depuis l'année dernière
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#C7E9FB]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Enfants</CardTitle>
            <CardDescription>Total des enfants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">103</div>
            <p className="text-sm text-gray-600">
              <span className="text-green-600">+8%</span> depuis l'année dernière
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFDEE9]/50 to-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#6A5ACD]">Places</CardTitle>
            <CardDescription>Taux d'occupation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#6A5ACD]">85%</div>
            <p className="text-sm text-gray-600">
              <span className="text-green-600">+3%</span> depuis l'année dernière
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="nounous">Nounous</TabsTrigger>
          <TabsTrigger value="families">Familles</TabsTrigger>
          <TabsTrigger value="contracts">Contrats</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <BarChart className="h-5 w-5" />
                  Évolution du nombre d'assistantes maternelles
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="relative h-64 w-full">
                    {/* Simuler un graphique avec des barres */}
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-around">
                      <div className="flex w-12 flex-col items-center">
                        <div className="h-32 w-8 rounded-t-md bg-[#D1F2EB]"></div>
                        <span className="mt-2 text-xs">2019</span>
                      </div>
                      <div className="flex w-12 flex-col items-center">
                        <div className="h-36 w-8 rounded-t-md bg-[#D1F2EB]"></div>
                        <span className="mt-2 text-xs">2020</span>
                      </div>
                      <div className="flex w-12 flex-col items-center">
                        <div className="h-40 w-8 rounded-t-md bg-[#D1F2EB]"></div>
                        <span className="mt-2 text-xs">2021</span>
                      </div>
                      <div className="flex w-12 flex-col items-center">
                        <div className="h-44 w-8 rounded-t-md bg-[#D1F2EB]"></div>
                        <span className="mt-2 text-xs">2022</span>
                      </div>
                      <div className="flex w-12 flex-col items-center">
                        <div className="h-48 w-8 rounded-t-md bg-[#6A5ACD]"></div>
                        <span className="mt-2 text-xs">2023</span>
                      </div>
                    </div>
                    {/* Axe Y */}
                    <div className="absolute left-0 top-0 flex h-full flex-col justify-between pr-2 text-right text-xs text-gray-500">
                      <span>50</span>
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                      <span>10</span>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <PieChart className="h-5 w-5" />
                  Répartition des places disponibles
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="relative h-48 w-48">
                    {/* Simuler un graphique en camembert */}
                    <div className="absolute inset-0 rounded-full border-8 border-[#6A5ACD]"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-transparent"
                      style={{
                        borderTopColor: "#FFDEE9",
                        borderRightColor: "#FFDEE9",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-transparent"
                      style={{
                        borderTopColor: "#C7E9FB",
                        transform: "rotate(180deg)",
                      }}
                    ></div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#6A5ACD]"></div>
                      <span className="text-xs">Occupées (85%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FFDEE9]"></div>
                      <span className="text-xs">Disponibles (10%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#C7E9FB]"></div>
                      <span className="text-xs">En attente (5%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <LineChart className="h-5 w-5" />
                  Évolution des contrats
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="relative h-64 w-full">
                    {/* Simuler un graphique en ligne */}
                    <svg className="h-full w-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      {/* Grille */}
                      <line x1="0" y1="0" x2="300" y2="0" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="150" x2="300" y2="150" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="200" x2="300" y2="200" stroke="#f1f1f1" strokeWidth="1" />

                      <line x1="0" y1="0" x2="0" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="60" y1="0" x2="60" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="120" y1="0" x2="120" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="180" y1="0" x2="180" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="240" y1="0" x2="240" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="300" y1="0" x2="300" y2="200" stroke="#f1f1f1" strokeWidth="1" />

                      {/* Ligne de tendance */}
                      <polyline
                        points="0,150 60,140 120,120 180,100 240,70 300,50"
                        fill="none"
                        stroke="#6A5ACD"
                        strokeWidth="3"
                      />
                      {/* Points */}
                      <circle cx="0" cy="150" r="4" fill="#6A5ACD" />
                      <circle cx="60" cy="140" r="4" fill="#6A5ACD" />
                      <circle cx="120" cy="120" r="4" fill="#6A5ACD" />
                      <circle cx="180" cy="100" r="4" fill="#6A5ACD" />
                      <circle cx="240" cy="70" r="4" fill="#6A5ACD" />
                      <circle cx="300" cy="50" r="4" fill="#6A5ACD" />
                    </svg>
                    {/* Axe X */}
                    <div className="absolute bottom-0 left-0 flex w-full justify-between text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>Mai</span>
                      <span>Juil</span>
                      <span>Sep</span>
                      <span>Nov</span>
                    </div>
                    {/* Axe Y */}
                    <div className="absolute left-0 top-0 flex h-full flex-col justify-between pr-2 text-right text-xs text-gray-500">
                      <span>80</span>
                      <span>60</span>
                      <span>40</span>
                      <span>20</span>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <Users className="h-5 w-5" />
                  Répartition par quartier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 3ème</span>
                      <span className="text-xs text-gray-500">12 nounous / 28 enfants</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[80%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 7ème</span>
                      <span className="text-xs text-gray-500">10 nounous / 22 enfants</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[70%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 8ème</span>
                      <span className="text-xs text-gray-500">8 nounous / 18 enfants</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[60%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Villeurbanne</span>
                      <span className="text-xs text-gray-500">7 nounous / 20 enfants</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[50%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Caluire</span>
                      <span className="text-xs text-gray-500">5 nounous / 15 enfants</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[40%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="nounous" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <Calendar className="h-5 w-5" />
                  Renouvellements d'agréments à venir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#6A5ACD]">1er trimestre 2024</h3>
                    <p className="mb-2 text-sm text-gray-600">5 renouvellements à prévoir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Sophie Moreau
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Claire Petit
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Nathalie Bernard
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Isabelle Laurent
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Céline Dubois
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#6A5ACD]">2ème trimestre 2024</h3>
                    <p className="mb-2 text-sm text-gray-600">3 renouvellements à prévoir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Aurélie Martin
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Sandrine Leroy
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Valérie Girard
                      </span>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium text-[#6A5ACD]">3ème trimestre 2024</h3>
                    <p className="mb-2 text-sm text-gray-600">4 renouvellements à prévoir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">Sylvie Roux</span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Christine Blanc
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Patricia Faure
                      </span>
                      <span className="rounded-full bg-[#D1F2EB]/30 px-2 py-1 text-xs text-[#6A5ACD]">
                        Monique Perrin
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <BarChart className="h-5 w-5" />
                  Répartition par expérience
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="relative h-64 w-full">
                    {/* Simuler un graphique avec des barres horizontales */}
                    <div className="absolute left-16 top-0 flex h-full w-[calc(100%-4rem)] flex-col justify-around">
                      <div className="flex h-8 items-center">
                        <div className="h-6 rounded-r-md bg-[#D1F2EB]" style={{ width: "30%" }}></div>
                        <span className="ml-2 text-xs">{"< 5 ans (30%)"}</span>
                      </div>
                      <div className="flex h-8 items-center">
                        <div className="h-6 rounded-r-md bg-[#C7E9FB]" style={{ width: "25%" }}></div>
                        <span className="ml-2 text-xs">5-10 ans (25%)</span>
                      </div>
                      <div className="flex h-8 items-center">
                        <div className="h-6 rounded-r-md bg-[#FFDEE9]" style={{ width: "20%" }}></div>
                        <span className="ml-2 text-xs">10-15 ans (20%)</span>
                      </div>
                      <div className="flex h-8 items-center">
                        <div className="h-6 rounded-r-md bg-[#6A5ACD]" style={{ width: "15%" }}></div>
                        <span className="ml-2 text-xs">15-20 ans (15%)</span>
                      </div>
                      <div className="flex h-8 items-center">
                        <div className="h-6 rounded-r-md bg-[#6A5ACD]/50" style={{ width: "10%" }}></div>
                        <span className="ml-2 text-xs">{"> 20 ans (10%)"}</span>
                      </div>
                    </div>
                    {/* Axe Y */}
                    <div className="absolute left-0 top-0 flex h-full flex-col justify-around pr-2 text-right text-xs text-gray-500">
                      <span>{"< 5 ans"}</span>
                      <span>5-10 ans</span>
                      <span>10-15 ans</span>
                      <span>15-20 ans</span>
                      <span>{"> 20 ans"}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="families" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <PieChart className="h-5 w-5" />
                  Répartition par âge des enfants
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="relative h-48 w-48">
                    {/* Simuler un graphique en camembert */}
                    <div className="absolute inset-0 rounded-full border-8 border-[#FFDEE9]"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-transparent"
                      style={{
                        borderTopColor: "#C7E9FB",
                        borderRightColor: "#C7E9FB",
                        transform: "rotate(135deg)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-transparent"
                      style={{
                        borderTopColor: "#D1F2EB",
                        transform: "rotate(225deg)",
                      }}
                    ></div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FFDEE9]"></div>
                      <span className="text-xs">0-1 an (40%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#C7E9FB]"></div>
                      <span className="text-xs">1-2 ans (35%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#D1F2EB]"></div>
                      <span className="text-xs">2-3 ans (25%)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <LineChart className="h-5 w-5" />
                  Évolution des demandes de garde
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="relative h-64 w-full">
                    {/* Simuler un graphique en ligne */}
                    <svg className="h-full w-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      {/* Grille */}
                      <line x1="0" y1="0" x2="300" y2="0" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="150" x2="300" y2="150" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="0" y1="200" x2="300" y2="200" stroke="#f1f1f1" strokeWidth="1" />

                      <line x1="0" y1="0" x2="0" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="60" y1="0" x2="60" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="120" y1="0" x2="120" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="180" y1="0" x2="180" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="240" y1="0" x2="240" y2="200" stroke="#f1f1f1" strokeWidth="1" />
                      <line x1="300" y1="0" x2="300" y2="200" stroke="#f1f1f1" strokeWidth="1" />

                      {/* Ligne de tendance 1 */}
                      <polyline
                        points="0,150 60,130 120,140 180,100 240,80 300,60"
                        fill="none"
                        stroke="#FFDEE9"
                        strokeWidth="3"
                      />
                      {/* Ligne de tendance 2 */}
                      <polyline
                        points="0,170 60,160 120,150 180,140 240,120 300,100"
                        fill="none"
                        stroke="#C7E9FB"
                        strokeWidth="3"
                      />
                    </svg>
                    {/* Axe X */}
                    <div className="absolute bottom-0 left-0 flex w-full justify-between text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>Mai</span>
                      <span>Juil</span>
                      <span>Sep</span>
                      <span>Nov</span>
                    </div>
                    {/* Axe Y */}
                    <div className="absolute left-0 top-0 flex h-full flex-col justify-between pr-2 text-right text-xs text-gray-500">
                      <span>50</span>
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                      <span>10</span>
                      <span>0</span>
                    </div>
                    {/* Légende */}
                    <div className="absolute right-0 top-0 flex flex-col gap-2 rounded-md bg-white/80 p-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-4 bg-[#FFDEE9]"></div>
                        <span>Temps plein</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-4 bg-[#C7E9FB]"></div>
                        <span>Temps partiel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contracts" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <BarChart className="h-5 w-5" />
                  Types de contrats
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <div className="relative h-64 w-full">
                    {/* Simuler un graphique avec des barres */}
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-around">
                      <div className="flex w-16 flex-col items-center">
                        <div className="h-48 w-12 rounded-t-md bg-[#6A5ACD]"></div>
                        <span className="mt-2 text-xs">Temps plein</span>
                        <span className="text-xs text-gray-500">75%</span>
                      </div>
                      <div className="flex w-16 flex-col items-center">
                        <div className="h-16 w-12 rounded-t-md bg-[#FFDEE9]"></div>
                        <span className="mt-2 text-xs">Temps partiel</span>
                        <span className="text-xs text-gray-500">25%</span>
                      </div>
                      <div className="flex w-16 flex-col items-center">
                        <div className="h-32 w-12 rounded-t-md bg-[#C7E9FB]"></div>
                        <span className="mt-2 text-xs">Année complète</span>
                        <span className="text-xs text-gray-500">50%</span>
                      </div>
                      <div className="flex w-16 flex-col items-center">
                        <div className="h-32 w-12 rounded-t-md bg-[#D1F2EB]"></div>
                        <span className="mt-2 text-xs">Année incomplète</span>
                        <span className="text-xs text-gray-500">50%</span>
                      </div>
                    </div>
                    {/* Axe Y */}
                    <div className="absolute left-0 top-0 flex h-full flex-col justify-between pr-2 text-right text-xs text-gray-500">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-[#6A5ACD]">
                  <LineChart className="h-5 w-5" />
                  Tarifs horaires moyens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 3ème</span>
                      <span className="text-sm font-medium text-[#6A5ACD]">4.80€/h</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[96%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 7ème</span>
                      <span className="text-sm font-medium text-[#6A5ACD]">4.70€/h</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[94%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Lyon 8ème</span>
                      <span className="text-sm font-medium text-[#6A5ACD]">4.50€/h</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[90%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Villeurbanne</span>
                      <span className="text-sm font-medium text-[#6A5ACD]">4.40€/h</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[88%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Caluire</span>
                      <span className="text-sm font-medium text-[#6A5ACD]">4.30€/h</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[86%] bg-[#6A5ACD]"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-[#FFDEE9] bg-[#FFDEE9]/10 p-4">
                  <h3 className="mb-2 font-medium text-[#6A5ACD]">Tarif horaire moyen</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#6A5ACD]">4.55€/h</p>
                      <p className="text-xs text-gray-600">
                        <span className="text-green-600">+0.15€</span> depuis l'année dernière
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Indemnités d'entretien</p>
                      <p className="text-lg font-semibold text-[#6A5ACD]">3.80€/jour</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Repas</p>
                      <p className="text-lg font-semibold text-[#6A5ACD]">5.20€/jour</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
