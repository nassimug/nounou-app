import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, HelpCircle, Users, Baby, FileText, CreditCard, MessageSquare } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      id: "general",
      title: "Questions générales",
      icon: <HelpCircle className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Qu'est-ce que NounouConnect ?",
          answer:
            "NounouConnect est une plateforme qui met en relation les familles à la recherche d'une assistante maternelle et les assistantes maternelles à la recherche de nouveaux enfants à garder. Elle facilite également la gestion administrative pour les RAM-RAP (Relais d'Assistantes Maternelles - Relais d'Accueil Petite enfance).",
        },
        {
          question: "Comment fonctionne NounouConnect ?",
          answer:
            "NounouConnect propose trois espaces distincts : un pour les familles, un pour les assistantes maternelles et un pour les RAM-RAP. Chaque espace offre des fonctionnalités spécifiques adaptées aux besoins de chaque utilisateur. Les familles peuvent rechercher une nounou, les nounous peuvent gérer leur planning et leurs déclarations, et les RAM-RAP peuvent superviser les assistantes maternelles et les familles de leur secteur.",
        },
        {
          question: "NounouConnect est-il gratuit ?",
          answer:
            "NounouConnect propose une version gratuite avec des fonctionnalités de base et une version premium avec des fonctionnalités avancées. L'inscription et la recherche de base sont gratuites pour les familles. Les assistantes maternelles bénéficient également d'un accès gratuit aux fonctionnalités essentielles. Pour plus de détails sur nos tarifs, consultez notre page Tarifs.",
        },
        {
          question: "Comment créer un compte sur NounouConnect ?",
          answer:
            "Pour créer un compte, cliquez sur 'Inscription' en haut à droite de la page d'accueil. Choisissez ensuite votre profil (Famille, Assistante Maternelle ou RAM-RAP) et suivez les instructions pour compléter votre inscription. Vous recevrez un email de confirmation pour activer votre compte.",
        },
      ],
    },
    {
      id: "families",
      title: "Pour les familles",
      icon: <Users className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Comment trouver une assistante maternelle ?",
          answer:
            "Utilisez notre moteur de recherche avancé pour trouver une assistante maternelle correspondant à vos critères. Vous pouvez filtrer par localisation, disponibilité, expérience, tarifs et compétences spécifiques. Consultez les profils détaillés et les avis pour faire votre choix.",
        },
        {
          question: "Comment contacter une assistante maternelle ?",
          answer:
            "Une fois que vous avez trouvé une assistante maternelle qui vous intéresse, vous pouvez la contacter directement via notre système de messagerie intégré. Vous pouvez également enregistrer son profil dans vos favoris pour y revenir plus tard.",
        },
        {
          question: "Comment gérer les contrats avec mon assistante maternelle ?",
          answer:
            "NounouConnect propose des modèles de contrats conformes à la législation en vigueur. Vous pouvez les personnaliser selon vos besoins, les signer électroniquement et les stocker en toute sécurité dans votre espace personnel.",
        },
        {
          question: "Comment obtenir mon attestation fiscale ?",
          answer:
            "Les attestations fiscales sont générées automatiquement à la fin de chaque année civile. Vous pouvez les télécharger depuis votre espace personnel dans la section 'Attestations fiscales'. Ces documents vous permettent de bénéficier du crédit d'impôt pour frais de garde d'enfant.",
        },
      ],
    },
    {
      id: "nounous",
      title: "Pour les assistantes maternelles",
      icon: <Baby className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Comment créer mon profil d'assistante maternelle ?",
          answer:
            "Après votre inscription, complétez votre profil en ajoutant vos informations personnelles, votre expérience, vos qualifications, vos disponibilités et vos tarifs. Plus votre profil est complet, plus vous avez de chances d'être contactée par des familles.",
        },
        {
          question: "Comment gérer mes disponibilités ?",
          answer:
            "Utilisez notre calendrier interactif pour indiquer vos disponibilités. Vous pouvez préciser les jours, les horaires et le nombre de places disponibles. Mettez régulièrement à jour ces informations pour augmenter vos chances de trouver de nouvelles familles.",
        },
        {
          question: "Comment faire mes déclarations mensuelles ?",
          answer:
            "NounouConnect simplifie vos déclarations mensuelles. Enregistrez les heures travaillées pour chaque enfant, et le système calculera automatiquement vos revenus. Vous pouvez ensuite transmettre ces informations directement à Pajemploi ou les exporter au format PDF.",
        },
        {
          question: "Comment communiquer avec les familles ?",
          answer:
            "Utilisez notre système de messagerie intégré pour communiquer avec les familles. Vous pouvez partager des photos, des informations sur la journée de l'enfant et organiser des rendez-vous. Toutes vos conversations sont sécurisées et archivées dans votre espace personnel.",
        },
      ],
    },
    {
      id: "ram",
      title: "Pour les RAM-RAP",
      icon: <FileText className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Comment gérer les assistantes maternelles de mon secteur ?",
          answer:
            "L'espace RAM-RAP vous permet de visualiser toutes les assistantes maternelles de votre secteur, de suivre leurs disponibilités et leurs agréments. Vous pouvez également les contacter directement via la plateforme.",
        },
        {
          question: "Comment aider les familles dans leur recherche ?",
          answer:
            "Vous pouvez consulter les demandes des familles de votre secteur et leur proposer des assistantes maternelles correspondant à leurs critères. Vous pouvez également organiser des rencontres virtuelles entre familles et assistantes maternelles.",
        },
        {
          question: "Comment organiser des événements ou des formations ?",
          answer:
            "Utilisez notre module d'événements pour planifier et gérer vos formations, ateliers et réunions. Vous pouvez envoyer des invitations, suivre les inscriptions et recueillir les retours des participants.",
        },
        {
          question: "Comment générer des statistiques pour mon secteur ?",
          answer:
            "NounouConnect propose un tableau de bord analytique complet avec des statistiques sur les assistantes maternelles, les familles et les places disponibles dans votre secteur. Ces données vous aident à identifier les besoins et à adapter vos actions.",
        },
      ],
    },
    {
      id: "technical",
      title: "Questions techniques",
      icon: <MessageSquare className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Comment réinitialiser mon mot de passe ?",
          answer:
            "Sur la page de connexion, cliquez sur 'Mot de passe oublié'. Saisissez votre adresse email et suivez les instructions envoyées par email pour créer un nouveau mot de passe.",
        },
        {
          question: "Comment modifier mes informations personnelles ?",
          answer:
            "Connectez-vous à votre compte et accédez à la section 'Paramètres' ou 'Mon profil'. Vous pourrez y modifier vos informations personnelles, vos préférences de notification et vos paramètres de confidentialité.",
        },
        {
          question: "L'application est-elle disponible sur mobile ?",
          answer:
            "Oui, NounouConnect est accessible sur tous les appareils (ordinateur, tablette, smartphone). Nous proposons également une application mobile disponible sur iOS et Android pour une expérience optimisée sur smartphone.",
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer:
            "La sécurité et la confidentialité de vos données sont notre priorité. Nous utilisons des protocoles de sécurité avancés pour protéger vos informations personnelles. Toutes les données sont chiffrées et stockées sur des serveurs sécurisés conformes au RGPD.",
        },
      ],
    },
    {
      id: "payment",
      title: "Paiement et facturation",
      icon: <CreditCard className="h-5 w-5 text-[#6A5ACD]" />,
      questions: [
        {
          question: "Quels sont les moyens de paiement acceptés ?",
          answer:
            "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), les virements bancaires et les prélèvements automatiques pour les abonnements. Tous les paiements sont sécurisés par notre partenaire de paiement.",
        },
        {
          question: "Comment obtenir une facture ?",
          answer:
            "Les factures sont générées automatiquement après chaque paiement et sont disponibles dans votre espace personnel, section 'Facturation'. Vous pouvez les télécharger au format PDF ou les recevoir par email.",
        },
        {
          question: "Comment annuler mon abonnement premium ?",
          answer:
            "Pour annuler votre abonnement, accédez à la section 'Abonnement' dans vos paramètres et cliquez sur 'Annuler l'abonnement'. Votre abonnement restera actif jusqu'à la fin de la période en cours, puis ne sera pas renouvelé.",
        },
        {
          question: "Y a-t-il une période d'essai pour l'abonnement premium ?",
          answer:
            "Oui, nous proposons une période d'essai gratuite de 30 jours pour l'abonnement premium. Vous pouvez annuler à tout moment pendant cette période sans être facturé.",
        },
      ],
    },
  ]

  return (
    <main className="container mx-auto p-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#6A5ACD]">Foire Aux Questions</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Trouvez des réponses aux questions les plus fréquemment posées sur NounouConnect. Si vous ne trouvez pas la
          réponse à votre question, n'hésitez pas à nous contacter.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqCategories.map((category) => (
          <Card key={category.id} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                {category.icon}
                <h2 className="text-xl font-semibold text-[#6A5ACD]">{category.title}</h2>
              </div>
              <p className="mb-4 text-gray-600">
                {category.questions.length} question{category.questions.length > 1 ? "s" : ""}
              </p>
              <Link href={`#${category.id}`}>
                <Button className="w-full gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
                  Voir les questions
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-12">
        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20">
            <div className="mb-6 flex items-center gap-3">
              {category.icon}
              <h2 className="text-2xl font-bold text-[#6A5ACD]">{category.title}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, index) => (
                <AccordionItem key={index} value={`${category.id}-item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-[#6A5ACD]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-[#FFDEE9]/20 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#6A5ACD]">Vous n'avez pas trouvé votre réponse ?</h2>
        <p className="mb-6 text-gray-600">
          Notre équipe de support est disponible pour répondre à toutes vos questions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button className="gap-2 rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
              <MessageSquare className="h-4 w-4" />
              Nous contacter
            </Button>
          </Link>
          <Link href="/help">
            <Button
              variant="outline"
              className="gap-2 rounded-full border-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/20"
            >
              <HelpCircle className="h-4 w-4" />
              Centre d'aide
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
