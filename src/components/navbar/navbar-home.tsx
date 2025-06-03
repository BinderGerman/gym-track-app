"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme/theme-toggle";

export const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/gym-track-logo.png" alt="Logo de Gym Track" width={32} height={32} />
              <span className="text-xl font-bold text-foreground">Gym Track</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex gap-8 text-muted-foreground">
              <Link href="#features" className="hover:text-foreground transition-colors duration-200">Características</Link>
              <Link href="#benefits" className="hover:text-foreground transition-colors duration-200">Beneficios</Link>
              <Link href="#testimonials" className="hover:text-foreground transition-colors duration-200">Testimonios</Link>
              <Link href="#pricing" className="hover:text-foreground transition-colors duration-200">Precios</Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/sign-in">Iniciar Sesión</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/sign-up">Probar Gratis</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="flex flex-col gap-4 px-2 pb-3">
            <div className="flex flex-col gap-4">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg" onClick={() => setIsMenuOpen(false)}>
                Características
              </Link>
              <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg" onClick={() => setIsMenuOpen(false)}>
                Beneficios
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg" onClick={() => setIsMenuOpen(false)}>
                Testimonios
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg" onClick={() => setIsMenuOpen(false)}>
                Precios
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="lg" className="w-full justify-start text-lg" asChild>
                <Link href="/sign-in">Iniciar Sesión</Link>
              </Button>
              <Button size="lg" className="w-full justify-start text-lg" asChild>
                <Link href="/sign-up">Probar Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 