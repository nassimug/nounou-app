import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFDEE9] to-[#C7E9FB]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-12 mt-10">
            <h1 className="mb-2 text-5xl font-bold text-[#6A5ACD]">NounouConnect</h1>
            <p className="text-xl text-[#6A5ACD]/80">
              La plateforme qui connecte les familles et les assistantes maternelles
            </p>
          </div>

          <div className="relative mb-16 w-full max-w-2xl">
            <div className="absolute -top-12 -left-8 h-20 w-20 animate-bounce">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="40" fill="#FFDEE9" stroke="#D1F2EB" strokeWidth="4" />
                <circle cx="35" cy="40" r="5" fill="#6A5ACD" />
                <circle cx="65" cy="40" r="5" fill="#6A5ACD" />
                <path d="M 30 60 Q 50 75 70 60" fill="none" stroke="#6A5ACD" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute -top-6 -right-8 h-16 w-16 animate-pulse">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <rect x="20" y="20" width="60" height="60" fill="#C7E9FB" stroke="#FFDEE9" strokeWidth="4" rx="10" />
                <rect x="35" y="35" width="30" height="30" fill="#D1F2EB" rx="5" />
              </svg>
            </div>

            <div className="relative mx-auto mb-8 flex justify-center">
              <Image
                src="/teddy-bear-cloud.png"
                alt="Ourson mignon sur un nuage"
                width={400}
                height={400}
                className="h-auto max-w-full"
                priority
              />
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-md transition-all hover:transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#FFDEE9] p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A5ACD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Je suis une Famille</h2>
              <p className="mb-4 text-center text-gray-600">Trouvez l'assistante maternelle idéale pour vos enfants</p>
              <Link href="/auth/family-login" className="mt-auto">
                <Button className="rounded-full bg-[#FFDEE9] text-[#6A5ACD] hover:bg-[#FFDEE9]/80">
                  Espace Famille <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-md transition-all hover:transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#C7E9FB] p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A5ACD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Je suis une Assistante Maternelle</h2>
              <p className="mb-4 text-center text-gray-600">Gérez votre activité et trouvez de nouvelles familles</p>
              <Link href="/auth/nounou-login" className="mt-auto">
                <Button className="rounded-full bg-[#C7E9FB] text-[#6A5ACD] hover:bg-[#C7E9FB]/80">
                  Espace Nounou <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-md transition-all hover:transform hover:scale-105">
              <div className="mb-4 rounded-full bg-[#D1F2EB] p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6A5ACD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-[#6A5ACD]">Je suis un RAM-RAP</h2>
              <p className="mb-4 text-center text-gray-600">
                Gérez les assistantes maternelles et les familles de votre secteur
              </p>
              <Link href="/auth/ram-login" className="mt-auto">
                <Button className="rounded-full bg-[#D1F2EB] text-[#6A5ACD] hover:bg-[#D1F2EB]/80">
                  Espace RAM-RAP <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-[#6A5ACD]/80">
              Déjà plus de 1500 familles et 800 assistantes maternelles connectées !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="rounded-full bg-white text-[#6A5ACD] hover:bg-white/80">En savoir plus</Button>
              <Link href="/contact">
                <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">Contactez-nous</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
