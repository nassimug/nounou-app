import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  MessageCircle,
  FileCheck,
  Heart,
  ArrowRight,
  Search,
  Shield,
  FileText,
  Clock,
  BarChart,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#6A5ACD] md:text-5xl">Nos Services</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
          NounouConnect propose une gamme complète de services pour simplifier la vie des familles, des assistantes
          maternelles et des Relais d'Assistantes Maternelles.
        </p>
      </section>

      <section className="mb-20">
        <Tabs defaultValue="families" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="families">Pour les familles</TabsTrigger>
            <TabsTrigger value="nannies">Pour les nounous</TabsTrigger>
            <TabsTrigger value="ram">Pour les RAM</TabsTrigger>
          </TabsList>

          <TabsContent value="families" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Search className="h-10 w-10 text-[#6A5ACD]" />}
                title="Recherche avancée"
                description="Trouvez la nounou idéale grâce à notre moteur de recherche avancé avec filtres personnalisables (localisation, disponibilités, expérience, etc.)."
              />
              <ServiceCard
                icon={<MessageCircle className="h-10 w-10 text-[#6A5ACD]" />}
                title="Messagerie sécurisée"
                description="Communiquez directement avec les assistantes maternelles via notre messagerie intégrée et sécurisée."
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10 text-[#6A5ACD]" />}
                title="Gestion des contrats"
                description="Créez et gérez facilement vos contrats d'accueil avec des modèles conformes à la législation en vigueur."
              />
              <ServiceCard
                icon={<Calendar className="h-10 w-10 text-[#6A5ACD]" />}
                title="Planning interactif"
                description="Gérez les plannings de garde de vos enfants et partagez-les avec votre assistante maternelle."
              />
              <ServiceCard
                icon={<FileCheck className="h-10 w-10 text-[#6A5ACD]" />}
                title="Déclarations mensuelles"
                description="Simplifiez vos déclarations mensuelles et générez automatiquement les documents nécessaires pour Pajemploi."
              />
              <ServiceCard
                icon={<Shield className="h-10 w-10 text-[#6A5ACD]" />}
                title="Attestations fiscales"
                description="Obtenez automatiquement vos attestations fiscales pour vos déclarations d'impôts."
              />
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#6A5ACD]">Vous êtes une famille ?</h3>
                  <p className="mb-6 text-gray-700">
                    Inscrivez-vous gratuitement et commencez à rechercher la nounou idéale pour vos enfants.
                  </p>
                  <Link href="/auth/family-signup">
                    <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                      Créer un compte famille
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image src="/famille.png" alt="Children playing" width={300} height={200} className="rounded-lg" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nannies" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Users className="h-10 w-10 text-[#6A5ACD]" />}
                title="Profil professionnel"
                description="Créez un profil professionnel attractif pour mettre en valeur vos compétences, expériences et disponibilités."
              />
              <ServiceCard
                icon={<Heart className="h-10 w-10 text-[#6A5ACD]" />}
                title="Visibilité optimale"
                description="Soyez visible auprès des familles qui recherchent une assistante maternelle dans votre secteur."
              />
              <ServiceCard
                icon={<Clock className="h-10 w-10 text-[#6A5ACD]" />}
                title="Gestion des disponibilités"
                description="Gérez facilement vos disponibilités et mettez à jour votre calendrier en temps réel."
              />
              <ServiceCard
                icon={<Calendar className="h-10 w-10 text-[#6A5ACD]" />}
                title="Planning des enfants"
                description="Visualisez et gérez les plannings de tous les enfants que vous accueillez."
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10 text-[#6A5ACD]" />}
                title="Gestion administrative"
                description="Simplifiez votre gestion administrative avec nos outils de création de contrats et de déclarations."
              />
              <ServiceCard
                icon={<BarChart className="h-10 w-10 text-[#6A5ACD]" />}
                title="Suivi d'activité"
                description="Suivez votre activité professionnelle avec des statistiques et des rapports personnalisés."
              />
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#6A5ACD]">Vous êtes assistante maternelle ?</h3>
                  <p className="mb-6 text-gray-700">
                    Inscrivez-vous gratuitement et commencez à recevoir des demandes de familles dans votre secteur.
                  </p>
                  <Link href="/auth/nounou-signup">
                    <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                      Créer un compte nounou
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/nounou.png"
                    alt="Professional woman"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ram" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Users className="h-10 w-10 text-[#6A5ACD]" />}
                title="Gestion des profils"
                description="Validez et gérez les profils des assistantes maternelles de votre secteur."
              />
              <ServiceCard
                icon={<CheckCircle className="h-10 w-10 text-[#6A5ACD]" />}
                title="Validation des agréments"
                description="Vérifiez et validez les agréments des assistantes maternelles pour garantir leur conformité."
              />
              <ServiceCard
                icon={<BarChart className="h-10 w-10 text-[#6A5ACD]" />}
                title="Statistiques détaillées"
                description="Accédez à des statistiques détaillées sur l'activité des assistantes maternelles de votre secteur."
              />
              <ServiceCard
                icon={<MessageCircle className="h-10 w-10 text-[#6A5ACD]" />}
                title="Communication centralisée"
                description="Communiquez facilement avec les assistantes maternelles et les familles de votre secteur."
              />
              <ServiceCard
                icon={<Search className="h-10 w-10 text-[#6A5ACD]" />}
                title="Recherche avancée"
                description="Utilisez notre moteur de recherche avancé pour trouver rapidement des informations sur les assistantes maternelles."
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10 text-[#6A5ACD]" />}
                title="Gestion documentaire"
                description="Gérez et archivez facilement tous les documents relatifs aux assistantes maternelles."
              />
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#6A5ACD]">
                    Vous êtes un Relais d'Assistantes Maternelles ?
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Contactez-nous pour mettre en place NounouConnect dans votre structure et simplifier votre gestion
                    quotidienne.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                      Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/ramrap.png"
                    alt="RAM professional"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Pourquoi choisir NounouConnect ?</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Notre plateforme se distingue par sa simplicité d'utilisation et ses fonctionnalités complètes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-[#F9F9F9] p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#6A5ACD]">Une plateforme tout-en-un</h3>
            <ul className="space-y-3">
              <FeatureItem text="Recherche et mise en relation simplifiées" />
              <FeatureItem text="Gestion administrative complète" />
              <FeatureItem text="Communication sécurisée entre tous les acteurs" />
              <FeatureItem text="Génération automatique de documents officiels" />
              <FeatureItem text="Suivi des paiements et des déclarations" />
            </ul>
          </div>

          <div className="rounded-xl bg-[#F9F9F9] p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#6A5ACD]">Une équipe à votre écoute</h3>
            <ul className="space-y-3">
              <FeatureItem text="Support client réactif et personnalisé" />
              <FeatureItem text="Accompagnement dans la prise en main de la plateforme" />
              <FeatureItem text="Mises à jour régulières des fonctionnalités" />
              <FeatureItem text="Conformité avec les évolutions législatives" />
              <FeatureItem text="Sécurité et confidentialité des données" />
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-[#6A5ACD] p-8 text-white">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Prêt à simplifier votre quotidien ?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Rejoignez notre communauté et découvrez comment NounouConnect peut vous faire gagner du temps et de
            l'énergie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth/family-signup">
              <Button className="bg-white text-[#6A5ACD] hover:bg-white/90">Inscription famille</Button>
            </Link>
            <Link href="/auth/nounou-signup">
              <Button className="bg-white text-[#6A5ACD] hover:bg-white/90">Inscription nounou</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-[#6A5ACD] hover:bg-white/90">
                Contacter l'équipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

type ServiceCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]/30">{icon}</div>
        <CardTitle className="text-xl text-[#6A5ACD]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-[#6A5ACD]" />
      <span>{text}</span>
    </li>
  )
}
