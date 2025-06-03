"use client"
import Link from "next/link";
import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Dumbbell, Brain, CheckCircle, Star } from "lucide-react";

// Components
import { NavbarHome } from "@/components/navbar/navbar-home";


export default function Home() {
 

  return (
    <main className="min-h-screen bg-background">
      <NavbarHome />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 md:pt-24 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/gym-background.jpg"
            alt="Fondo de Gimnasio"
            fill
            priority
            quality={100}
            className="object-cover object-center opacity-65 dark:opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Potencia el <span className="text-primary">Entrenamiento de tus Alumnos</span> con IA
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg md:max-w-xl mx-auto md:mx-0">
                Gestiona y optimiza el progreso de tus alumnos, crea planes personalizados y utiliza la IA para maximizar sus resultados. Todo en una plataforma diseñada para entrenadores profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200" asChild>
                  <Link href="/sign-up">Comenzar Prueba Gratuita</Link>
                </Button>
              </div>
            </div>
            {/* Hero Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/trainer-client.png"
                alt="Entrenador con cliente"
                width={500}
                height={500}
                className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/50 scroll-mt-16 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Gestión de Clientes</h3>
              <p className="text-muted-foreground">
                Organiza datos de clientes, realiza seguimiento de progreso, establece objetivos y comunícate eficientemente todo en un solo lugar.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Dumbbell className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Biblioteca de Ejercicios</h3>
              <p className="text-muted-foreground">
                Accede a una extensa biblioteca de ejercicios y crea rutinas personalizadas para cada cliente de manera sencilla.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Insights con IA</h3>
              <p className="text-muted-foreground">
                Obtén recomendaciones inteligentes para ajustar entrenamientos y optimizar el progreso de tus clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 scroll-mt-16 relative isolate">
        <div className="absolute inset-0">
          <Image
            src="/gym-background-II.jpg"
            alt="Fondo de Gimnasio"
            fill
            quality={100}
            className="object-cover object-center opacity-65 dark:opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Lo que Dicen Nuestros Usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;Gym Track ha revolucionado la forma en que gestiono mis clientes. ¡Las sugerencias de IA son increíblemente útiles!&rdquo;
              </p>
              <p className="font-semibold text-foreground">- Sara, Entrenadora Personal</p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;La planificación de entrenamientos es intuitiva y me ahorra mucho tiempo. A mis clientes les encantan las rutinas personalizadas.&rdquo;
              </p>
              <p className="font-semibold text-foreground">- Marcos, Entrenador de Fuerza</p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;¡Finalmente, una plataforma que entiende las necesidades de un profesional del fitness. ¡Altamente recomendada!&rdquo;
              </p>
              <p className="font-semibold text-foreground">- Emilia, Instructora de Fitness</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-muted/50 scroll-mt-16 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Precios Simples y Transparentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <Card className="p-8 bg-card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Profesional</h3>
              <p className="text-muted-foreground mb-4">Para entrenadores individuales</p>
              <div className="text-4xl font-bold text-primary mb-6">$29<span className="text-lg text-muted-foreground">/mes</span></div>
              <ul className="text-left text-muted-foreground space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Clientes ilimitados</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Acceso a todas las funciones</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Insights con IA</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Soporte por email</li>
              </ul>
              <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200" asChild>
                <Link href="/sign-up">Comenzar Ahora</Link>
              </Button>
            </Card>
            <Card className="p-8 bg-card text-center border-2 border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Empresarial</h3>
              <p className="text-muted-foreground mb-4">Para gimnasios y equipos</p>
              <div className="text-4xl font-bold text-primary mb-6">$59<span className="text-lg text-muted-foreground">/mes</span></div>
              <ul className="text-left text-muted-foreground space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Todo lo de Profesional</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Múltiples cuentas de entrenador</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Colaboración en equipo</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Soporte prioritario</li>
              </ul>
              <Button size="lg" className="w-full hover:scale-105 transition-transform duration-200" variant="outline" asChild>
                <Link href="/contact">Contactar Ventas</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 scroll-mt-16 bg-gradient-to-b from-background to-muted/30 relative isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight md:leading-[1.2]">
            Transforma tu Pasión por el Fitness en un Negocio Exitoso
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Únete a cientos de entrenadores que ya están revolucionando su forma de trabajar. 
            Comienza tu prueba gratuita de 14 días y descubre cómo Gym Track puede ayudarte a 
            escalar tu negocio mientras mejoras la experiencia de tus clientes.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200" asChild>
              <Link href="/sign-up">Comenzar Prueba Gratuita</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              No se requiere tarjeta de crédito • Cancelación en cualquier momento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2024 Gym Track. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}