import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Calendar, MessageCircle, FileCheck, Heart, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#6A5ACD] md:text-5xl">
          Comment fonctionne NounouConnect ?
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
          Notre plateforme simplifie la mise en relation entre les familles et les assistantes maternelles, tout en
          facilitant le travail des Relais d'Assistantes Maternelles (RAM).
        </p>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="families" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="families">Familles</TabsTrigger>
              <TabsTrigger value="nannies">Nounous</TabsTrigger>
              <TabsTrigger value="ram">RAM</TabsTrigger>
            </TabsList>

            <TabsContent value="families" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                <StepCard
                  number={1}
                  title="Créez votre profil"
                  description="Inscrivez-vous gratuitement et complétez votre profil familial avec vos besoins spécifiques."
                  icon={<Users className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={2}
                  title="Trouvez votre nounou"
                  description="Recherchez parmi les assistantes maternelles disponibles selon vos critères et contactez-les directement."
                  icon={<Heart className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={3}
                  title="Gérez votre relation"
                  description="Utilisez nos outils pour gérer les contrats, les plannings et les déclarations mensuelles."
                  icon={<Calendar className="h-10 w-10 text-[#6A5ACD]" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="nannies" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                <StepCard
                  number={1}
                  title="Créez votre profil pro"
                  description="Inscrivez-vous et mettez en valeur vos compétences, expériences et disponibilités."
                  icon={<Users className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={2}
                  title="Recevez des demandes"
                  description="Les familles intéressées par votre profil vous contactent directement via la messagerie."
                  icon={<MessageCircle className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={3}
                  title="Gérez votre activité"
                  description="Utilisez nos outils pour gérer vos contrats, plannings et déclarations mensuelles."
                  icon={<FileCheck className="h-10 w-10 text-[#6A5ACD]" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="ram" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                <StepCard
                  number={1}
                  title="Accédez au tableau de bord"
                  description="Connectez-vous à votre espace RAM pour avoir une vue d'ensemble des assistantes maternelles de votre secteur."
                  icon={<Users className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={2}
                  title="Gérez les profils"
                  description="Validez les profils des assistantes maternelles et aidez-les à compléter leurs informations."
                  icon={<CheckCircle className="h-10 w-10 text-[#6A5ACD]" />}
                />
                <StepCard
                  number={3}
                  title="Suivez l'activité"
                  description="Accédez aux statistiques et rapports pour suivre l'activité des assistantes maternelles de votre secteur."
                  icon={<FileCheck className="h-10 w-10 text-[#6A5ACD]" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Les avantages de NounouConnect</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Notre plateforme offre de nombreux avantages pour tous les utilisateurs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Mise en relation simplifiée"
            description="Trouvez rapidement la nounou idéale ou les familles qui correspondent à vos disponibilités."
          />
          <FeatureCard
            title="Gestion administrative"
            description="Simplifiez la gestion des contrats, plannings et déclarations mensuelles."
          />
          <FeatureCard
            title="Communication sécurisée"
            description="Échangez facilement avec les familles ou les nounous via notre messagerie intégrée."
          />
          <FeatureCard
            title="Attestations fiscales"
            description="Générez automatiquement vos attestations fiscales pour les déclarations d'impôts."
          />
          <FeatureCard
            title="Suivi des paiements"
            description="Suivez facilement les paiements et générez des récapitulatifs mensuels."
          />
          <FeatureCard
            title="Support dédié"
            description="Bénéficiez d'une assistance personnalisée pour toutes vos questions."
          />
        </div>
      </section>

      <section className="mb-16 rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Prêt à commencer ?</h2>
            <p className="mb-6 text-gray-700">
              Rejoignez notre communauté et simplifiez votre quotidien. L'inscription ne prend que quelques minutes !
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth/family-signup">
                <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                  Je suis une famille
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth/nounou-signup">
                <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                  Je suis une nounou
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/teddy-bear-cloud.png"
              alt="Teddy bear on cloud"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Questions fréquentes</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Vous avez des questions ? Consultez nos réponses aux questions les plus fréquentes
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>L'inscription est-elle gratuite ?</AccordionTrigger>
              <AccordionContent>
                Oui, l'inscription de base est totalement gratuite pour les familles et les assistantes maternelles. Des
                options premium sont disponibles pour accéder à des fonctionnalités avancées.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Comment sont vérifiés les profils des nounous ?</AccordionTrigger>
              <AccordionContent>
                Les profils des assistantes maternelles sont vérifiés par les Relais d'Assistantes Maternelles (RAM) de
                leur secteur. Nous vérifions également les agréments et les informations professionnelles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Puis-je gérer plusieurs enfants sur la plateforme ?</AccordionTrigger>
              <AccordionContent>
                Absolument ! Vous pouvez ajouter autant d'enfants que nécessaire à votre profil familial et gérer leurs
                plannings et besoins spécifiques individuellement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Comment fonctionne la messagerie ?</AccordionTrigger>
              <AccordionContent>
                Notre messagerie intégrée vous permet d'échanger directement avec les familles ou les nounous. Vous
                recevez des notifications par email lorsque vous avez de nouveaux messages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Les contrats générés sont-ils légalement valides ?</AccordionTrigger>
              <AccordionContent>
                Oui, nos modèles de contrats sont conformes à la Convention Collective Nationale des assistants
                maternels. Vous pouvez les personnaliser selon vos besoins spécifiques.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 text-center">
            <Link href="/faq">
              <Button variant="outline" className="text-[#6A5ACD]">
                Voir toutes les questions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function StepCard({ number, title, description, icon }) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDEE9]/30">{icon}</div>
        <div className="absolute -mt-2 -ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#6A5ACD] text-xs font-bold text-white">
          {number}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-[#6A5ACD]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
