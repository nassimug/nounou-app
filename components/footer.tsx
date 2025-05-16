import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur-md">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#6A5ACD]">NounouConnect</h3>
            <p className="text-sm text-gray-600">
              La plateforme qui met en relation les familles et les assistantes maternelles agréées en lien avec les
              structures RAM-RAP.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#6A5ACD] hover:text-[#6A5ACD]/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-[#6A5ACD] hover:text-[#6A5ACD]/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-[#6A5ACD] hover:text-[#6A5ACD]/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#6A5ACD]">Pour les familles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/family/search" className="text-gray-600 hover:text-[#6A5ACD]">
                  Rechercher une nounou
                </Link>
              </li>
              <li>
                <Link href="/family/contract" className="text-gray-600 hover:text-[#6A5ACD]">
                  Gérer les contrats
                </Link>
              </li>
              <li>
                <Link href="/family/declarations" className="text-gray-600 hover:text-[#6A5ACD]">
                  Fiches de paie
                </Link>
              </li>
              <li>
                <Link href="/family/tax-certificates" className="text-gray-600 hover:text-[#6A5ACD]">
                  Attestations fiscales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#6A5ACD]">Pour les nounous</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nounou/profile" className="text-gray-600 hover:text-[#6A5ACD]">
                  Gérer mon profil
                </Link>
              </li>
              <li>
                <Link href="/nounou/availability" className="text-gray-600 hover:text-[#6A5ACD]">
                  Mes disponibilités
                </Link>
              </li>
              <li>
                <Link href="/nounou/children" className="text-gray-600 hover:text-[#6A5ACD]">
                  Liste des enfants
                </Link>
              </li>
              <li>
                <Link href="/nounou/declaration" className="text-gray-600 hover:text-[#6A5ACD]">
                  Déclaration mensuelle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#6A5ACD]">Aide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-[#6A5ACD]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help/contact" className="text-gray-600 hover:text-[#6A5ACD]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/help/legal" className="text-gray-600 hover:text-[#6A5ACD]">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/help/privacy" className="text-gray-600 hover:text-[#6A5ACD]">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NounouConnect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
