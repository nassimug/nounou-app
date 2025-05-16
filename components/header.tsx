"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu, User, Baby, LogIn, HelpCircle, BookOpen, PieChart, MessageCircle, Bell, LogOut } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const pathname = usePathname()

  // Amélioration de la détection du type d'utilisateur
  const getUserType = (path: string | null) => {
    if (!path) return "unknown"

    if (path.startsWith("/family")) return "family"
    if (path.startsWith("/nounou")) return "nounou"
    if (path.startsWith("/ram")) return "ram"

    return "unknown"
  }

  const userType = getUserType(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderNavLinks = () => {
    switch (userType) {
      case "family":
        return (
          <>
            <Link href="/family/search" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Trouver une nounou</span>
            </Link>
            <Link href="/family/dashboard" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Mes enfants</span>
            </Link>
            <Link href="/family/messages" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Messages</span>
            </Link>
            <Link href="/help" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Aide</span>
            </Link>
          </>
        )
      case "nounou":
        return (
          <>
            <Link href="/nounou/dashboard" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Tableau de bord</span>
            </Link>
            <Link href="/nounou/availability" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Disponibilités</span>
            </Link>
            <Link href="/nounou/declaration" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Déclarations</span>
            </Link>
            <Link href="/nounou/messages" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Messages</span>
            </Link>
          </>
        )
      case "ram":
        return (
          <>
            <Link href="/ram/dashboard" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Tableau de bord</span>
            </Link>
            <Link href="/ram/nounous" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Nounous</span>
            </Link>
            <Link href="/ram/families" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Familles</span>
            </Link>
            <Link href="/ram/contracts" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Contrats</span>
            </Link>
            <Link href="/ram/messages" className="text-[#6A5ACD] transition-colors hover:text-[#6A5ACD]/80">
              <span>Messages</span>
            </Link>
          </>
        )
      default:
        return null
    }
  }

  const renderMobileNavLinks = () => {
    switch (userType) {
      case "family":
        return (
          <>
            <Link
              href="/family/search"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Trouver une nounou</span>
            </Link>
            <Link
              href="/family/dashboard"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Mes enfants</span>
            </Link>
            <Link
              href="/family/messages"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Messages</span>
            </Link>
            <Link href="/help" className="rounded-md p-3 hover:bg-[#FFDEE9]/20" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#6A5ACD]">Aide</span>
            </Link>
          </>
        )
      case "nounou":
        return (
          <>
            <Link
              href="/nounou/dashboard"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Tableau de bord</span>
            </Link>
            <Link
              href="/nounou/availability"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Disponibilités</span>
            </Link>
            <Link
              href="/nounou/declaration"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Déclarations</span>
            </Link>
            <Link
              href="/nounou/messages"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Messages</span>
            </Link>
          </>
        )
      case "ram":
        return (
          <>
            <Link
              href="/ram/dashboard"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Tableau de bord</span>
            </Link>
            <Link
              href="/ram/nounous"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Nounous</span>
            </Link>
            <Link
              href="/ram/families"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Familles</span>
            </Link>
            <Link
              href="/ram/contracts"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Contrats</span>
            </Link>
            <Link
              href="/ram/messages"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Messages</span>
            </Link>
          </>
        )
      default:
        return (
          <>
            <Link
              href="/how-it-works"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Comment ça marche</span>
            </Link>
            <Link
              href="/services"
              className="rounded-md p-3 hover:bg-[#FFDEE9]/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-[#6A5ACD]">Nos services</span>
            </Link>
            <Link href="/pricing" className="rounded-md p-3 hover:bg-[#FFDEE9]/20" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#6A5ACD]">Tarifs</span>
            </Link>
            <Link href="/faq" className="rounded-md p-3 hover:bg-[#FFDEE9]/20" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#6A5ACD]">FAQ</span>
            </Link>
            <Link href="/contact" className="rounded-md p-3 hover:bg-[#FFDEE9]/20" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#6A5ACD]">Contact</span>
            </Link>
          </>
        )
    }
  }

  const renderAuthButtons = () => {
    if (userType !== "unknown") {
      return (
        <div className="hidden items-center gap-4 md:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/${userType}/notifications`}>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-[#6A5ACD]" />
                    {notificationCount > 0 && (
                      <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
                        {notificationCount}
                      </Badge>
                    )}
                    <span className="sr-only">Notifications</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src="/profile.png?height=40&width=40" alt="Photo de profil" />
                  <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                    {userType === "family" ? "FM" : userType === "nounou" ? "ND" : "RA"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href={
                    userType === "nounou"
                      ? "/nounou/profile"
                      : userType === "family"
                        ? "/family/settings"
                        : `/${userType}/profile`
                  }
                  className="flex w-full cursor-pointer items-center"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </Link>
              </DropdownMenuItem>
              {userType === "family" && (
                <DropdownMenuItem asChild>
                  <Link href="/family/favorites" className="flex w-full cursor-pointer items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Mes favoris</span>
                  </Link>
                </DropdownMenuItem>
              )}
              {userType === "family" && (
                <DropdownMenuItem asChild>
                  <Link href="/family/tax-certificates" className="flex w-full cursor-pointer items-center">
                    <PieChart className="mr-2 h-4 w-4" />
                    <span>Attestations fiscales</span>
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-500 focus:text-red-500"
                onClick={() => {
                  localStorage.removeItem("userToken")
                  window.location.href = "/"
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }

    return (
      <div className="hidden items-center gap-4 md:flex">
        <Link href="/how-it-works">
          <Button variant="ghost" className="gap-2 rounded-full text-[#6A5ACD]">
            <HelpCircle className="h-4 w-4" />
            Comment ça marche
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="ghost" className="gap-2 rounded-full text-[#6A5ACD]">
            <BookOpen className="h-4 w-4" />
            Nos services
          </Button>
        </Link>
        <Link href="/pricing">
          <Button variant="ghost" className="gap-2 rounded-full text-[#6A5ACD]">
            <PieChart className="h-4 w-4" />
            Tarifs
          </Button>
        </Link>
        <Link href="/faq">
          <Button variant="ghost" className="gap-2 rounded-full text-[#6A5ACD]">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="rounded-full bg-[#6A5ACD] text-white hover:bg-[#6A5ACD]/80">
            <MessageCircle className="mr-2 h-4 w-4" />
            Nous contacter
          </Button>
        </Link>
      </div>
    )
  }

  const renderMobileAuthButtons = () => {
    if (userType !== "unknown") {
      return (
        <>
          <div className="mb-4 flex items-center justify-between">
            <Link href={`/${userType}/notifications`}>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-[#6A5ACD]" />
                {notificationCount > 0 && (
                  <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
                    {notificationCount}
                  </Badge>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href={
                userType === "nounou"
                  ? "/nounou/profile"
                  : userType === "family"
                    ? "/family/settings"
                    : `/${userType}/profile`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="w-full gap-2 rounded-full">
                <User className="h-4 w-4" />
                Mon profil
              </Button>
            </Link>
            <Button
              className="w-full gap-2 rounded-full bg-[#6A5ACD]"
              onClick={() => {
                localStorage.removeItem("userToken")
                window.location.href = "/"
                setIsMenuOpen(false)
              }}
            >
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </>
      )
    }

  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
      role="banner"
      aria-label="En-tête du site"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Baby className="h-8 w-8 text-[#6A5ACD]" />
            <span className="text-xl font-bold text-[#6A5ACD]">NounouConnect</span>
          </Link>

          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {userType === "family" && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/family/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Tableau de bord
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/family/search" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Trouver une nounou
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/family/children" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Mes enfants
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/family/messages" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Messages
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}

                {userType === "nounou" && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/nounou/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Tableau de bord
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/nounou/children" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Enfants
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/nounou/availability" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Disponibilités
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/nounou/declaration" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Déclarations
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/nounou/messages" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Messages
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}

                {userType === "ram" && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/ram/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Tableau de bord
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/ram/nounous" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Nounous
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/ram/families" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Familles
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/ram/contracts" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Contrats
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/ram/messages" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-[#6A5ACD] hover:bg-[#6A5ACD]/10 hover:text-[#6A5ACD] focus:bg-[#6A5ACD]/10 focus:text-[#6A5ACD]">
                          Messages
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}

                {userType === "unknown" && null}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {renderAuthButtons()}

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-6 w-6 text-[#6A5ACD]" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback className="bg-[#FFDEE9] text-[#6A5ACD]">
                      {userType === "family" ? "FM" : userType === "nounou" ? "ND" : "RA"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-[#6A5ACD]">
                      {userType === "family"
                        ? "Sophie Martin"
                        : userType === "nounou"
                          ? "Marie Dupont"
                          : userType === "ram"
                            ? "Céline Dubois"
                            : "Visiteur"}
                    </p>
                    {userType !== "unknown" && (
                      <p className="text-xs text-gray-500">
                        {userType === "family"
                          ? "sophie.martin@example.com"
                          : userType === "nounou"
                            ? "marie.dupont@example.com"
                            : "celine.dubois@ram-rap.fr"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-2">{renderMobileNavLinks()}</div>

                <div className="mt-4 border-t pt-4">{renderMobileAuthButtons()}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
