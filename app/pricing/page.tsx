import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#6A5ACD] md:text-5xl">Nos Tarifs</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
          Des formules adaptées à tous les besoins, pour les familles et les assistantes maternelles. Commencez
          gratuitement et évoluez selon vos besoins.
        </p>
      </section>

      <section className="mb-20">
        <Tabs defaultValue="families" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="families">Pour les familles</TabsTrigger>
            <TabsTrigger value="nannies">Pour les nounous</TabsTrigger>
          </TabsList>

          <TabsContent value="families" className="mt-8">
            <div className="grid gap-8 md:grid-cols-3">
              <PricingCard
                title="Gratuit"
                price="0€"
                description="Idéal pour débuter et découvrir les fonctionnalités essentielles."
                features={[
                  { included: true, text: "Création de profil famille" },
                  { included: true, text: "Recherche de nounous" },
                  { included: true, text: "Messagerie de base" },
                  { included: true, text: "Gestion de 1 enfant" },
                  { included: false, text: "Contrats illimités" },
                  { included: false, text: "Plannings avancés" },
                  { included: false, text: "Attestations fiscales" },
                  { included: false, text: "Support prioritaire" },
                ]}
                buttonText="Commencer gratuitement"
                buttonLink="/auth/family-signup"
                popular={false}
              />

              <PricingCard
                title="Standard"
                price="4,99€"
                period="par mois"
                description="Pour les familles avec plusieurs enfants et besoins de gestion avancés."
                features={[
                  { included: true, text: "Tout ce qui est inclus dans Gratuit" },
                  { included: true, text: "Gestion jusqu'à 3 enfants" },
                  { included: true, text: "Contrats illimités" },
                  { included: true, text: "Plannings avancés" },
                  { included: true, text: "Attestations fiscales" },
                  { included: true, text: "Partage de documents" },
                  { included: false, text: "Support prioritaire" },
                  { included: false, text: "Exports personnalisés" },
                ]}
                buttonText="Choisir Standard"
                buttonLink="/auth/family-signup?plan=standard"
                popular={true}
              />

              <PricingCard
                title="Premium"
                price="9,99€"
                period="par mois"
                description="Pour une gestion complète et un accompagnement personnalisé."
                features={[
                  { included: true, text: "Tout ce qui est inclus dans Standard" },
                  { included: true, text: "Enfants illimités" },
                  { included: true, text: "Exports personnalisés" },
                  { included: true, text: "Support prioritaire" },
                  { included: true, text: "Alertes et notifications avancées" },
                  { included: true, text: "Historique complet" },
                  { included: true, text: "Accès aux fonctionnalités en avant-première" },
                  { included: true, text: "Accompagnement personnalisé" },
                ]}
                buttonText="Choisir Premium"
                buttonLink="/auth/family-signup?plan=premium"
                popular={false}
              />
            </div>
          </TabsContent>

          <TabsContent value="nannies" className="mt-8">
            <div className="grid gap-8 md:grid-cols-3">
              <PricingCard
                title="Gratuit"
                price="0€"
                description="Idéal pour débuter et découvrir les fonctionnalités essentielles."
                features={[
                  { included: true, text: "Création de profil professionnel" },
                  { included: true, text: "Visibilité auprès des familles" },
                  { included: true, text: "Messagerie de base" },
                  { included: true, text: "Gestion de 2 enfants" },
                  { included: false, text: "Contrats illimités" },
                  { included: false, text: "Plannings avancés" },
                  { included: false, text: "Suivi d'activité" },
                  { included: false, text: "Support prioritaire" },
                ]}
                buttonText="Commencer gratuitement"
                buttonLink="/auth/nounou-signup"
                popular={false}
              />

              <PricingCard
                title="Standard"
                price="3,99€"
                period="par mois"
                description="Pour les assistantes maternelles avec plusieurs enfants à gérer."
                features={[
                  { included: true, text: "Tout ce qui est inclus dans Gratuit" },
                  { included: true, text: "Gestion jusqu'à 6 enfants" },
                  { included: true, text: "Contrats illimités" },
                  { included: true, text: "Plannings avancés" },
                  { included: true, text: "Suivi d'activité" },
                  { included: true, text: "Génération de documents" },
                  { included: false, text: "Support prioritaire" },
                  { included: false, text: "Profil mis en avant" },
                ]}
                buttonText="Choisir Standard"
                buttonLink="/auth/nounou-signup?plan=standard"
                popular={true}
              />

              <PricingCard
                title="Premium"
                price="7,99€"
                period="par mois"
                description="Pour une gestion professionnelle complète et une visibilité maximale."
                features={[
                  { included: true, text: "Tout ce qui est inclus dans Standard" },
                  { included: true, text: "Enfants illimités" },
                  { included: true, text: "Profil mis en avant" },
                  { included: true, text: "Support prioritaire" },
                  { included: true, text: "Statistiques avancées" },
                  { included: true, text: "Exports personnalisés" },
                  { included: true, text: "Accès aux fonctionnalités en avant-première" },
                  { included: true, text: "Accompagnement personnalisé" },
                ]}
                buttonText="Choisir Premium"
                buttonLink="/auth/nounou-signup?plan=premium"
                popular={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16 rounded-xl bg-[#F9F9F9] p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#6A5ACD]">Tarifs pour les RAM</h2>
            <p className="mb-6 text-gray-600">
              Vous êtes un Relais d'Assistantes Maternelles et souhaitez utiliser NounouConnect pour votre structure ?
              Nous proposons des tarifs adaptés aux collectivités et structures publiques.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span>Tarification basée sur le nombre d'assistantes maternelles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span>Fonctionnalités complètes et personnalisées</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span>Formation et accompagnement inclus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                <span>Support dédié et maintenance</span>
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#6A5ACD]">Essai gratuit</h2>
            <p className="mb-6 text-gray-600">
              Toutes nos formules payantes incluent un essai gratuit de 30 jours, sans engagement. Testez toutes les
              fonctionnalités avant de vous décider.
            </p>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-2 font-semibold text-[#6A5ACD]">Ce qui est inclus dans l'essai gratuit :</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                  <span>Accès à toutes les fonctionnalités premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                  <span>Aucune carte bancaire requise pour commencer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                  <span>Annulation facile à tout moment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                  <span>Support complet pendant la période d'essai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Questions fréquentes sur les tarifs</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Vous avez des questions sur nos formules ? Consultez nos réponses ci-dessous
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Puis-je changer de formule à tout moment ?</AccordionTrigger>
              <AccordionContent>
                Oui, vous pouvez passer d'une formule à une autre à tout moment. Si vous passez à une formule
                supérieure, le changement est immédiat. Si vous passez à une formule inférieure, le changement prendra
                effet à la fin de votre période de facturation en cours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Comment fonctionne la facturation ?</AccordionTrigger>
              <AccordionContent>
                La facturation est mensuelle et automatique. Vous pouvez choisir de payer par carte bancaire ou par
                prélèvement SEPA. Vous recevrez une facture par email à chaque prélèvement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Existe-t-il des réductions pour un abonnement annuel ?</AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons une réduction de 20% pour tout abonnement annuel. Cette option est disponible pour
                toutes nos formules payantes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Que se passe-t-il à la fin de mon essai gratuit ?</AccordionTrigger>
              <AccordionContent>
                À la fin de votre période d'essai de 30 jours, votre compte basculera automatiquement vers la formule
                gratuite, sauf si vous choisissez de passer à une formule payante. Vous ne perdrez aucune donnée en
                passant à la formule gratuite, mais certaines fonctionnalités ne seront plus accessibles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Les mises à jour sont-elles incluses dans l'abonnement ?</AccordionTrigger>
              <AccordionContent>
                Oui, toutes les mises à jour de la plateforme sont automatiquement incluses dans votre abonnement,
                quelle que soit la formule choisie. Les utilisateurs premium ont accès en avant-première aux nouvelles
                fonctionnalités.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="rounded-xl bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#6A5ACD]">Prêt à commencer ?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-700">
          Inscrivez-vous gratuitement et découvrez comment NounouConnect peut simplifier votre quotidien. Aucun
          engagement, aucune carte bancaire requise pour démarrer.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/auth/family-signup">
            <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
              Inscription famille
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/auth/nounou-signup">
            <Button className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80">
              Inscription nounou
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-[#6A5ACD] text-[#6A5ACD]">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

type Feature = {
  included: boolean
  text: string
}

type PricingCardProps = {
  title: string
  price: string
  period?: string
  description: string
  features: Feature[]
  buttonText: string
  buttonLink: string
  popular: boolean
}

function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonLink,
  popular,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${popular ? "border-[#6A5ACD] ring-2 ring-[#6A5ACD] ring-opacity-50" : ""}`}>
      {popular && (
        <div className="absolute -mt-4 w-full">
          <div className="mx-auto w-fit rounded-full bg-[#6A5ACD] px-4 py-1 text-sm font-medium text-white">
            Recommandé
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-500"> {period}</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature: Feature, index: number) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
              ) : (
                <XCircle className="mr-2 h-5 w-5 shrink-0 text-gray-300" />
              )}
              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link href={buttonLink} className="w-full">
          <Button
            className={`w-full ${popular ? "bg-[#6A5ACD] hover:bg-[#6A5ACD]/80" : "bg-gray-800 hover:bg-gray-700"}`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
