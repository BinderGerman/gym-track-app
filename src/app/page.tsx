//import Image from "next/image";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Dumbbell, Brain, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ModeToggle />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Gestiona tus clientes y rutinas con{" "}
              <span className="text-primary">inteligencia artificial</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              La plataforma más completa para entrenadores personales. Optimiza tu tiempo y mejora los resultados de tus alumnos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                Prueba gratis 14 días
              </Button>
              <Button size="lg" variant="outline">
                Iniciar sesión
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestión de Alumnos</h3>
              <p className="text-muted-foreground">
                Organiza la información de tus clientes, seguimiento de progreso y objetivos personalizados.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Dumbbell className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Biblioteca de Ejercicios</h3>
              <p className="text-muted-foreground">
                Accede a una amplia biblioteca de ejercicios y crea rutinas personalizadas fácilmente.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Asistente</h3>
              <p className="text-muted-foreground">
                Optimiza las rutinas con recomendaciones basadas en inteligencia artificial.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestra plataforma?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Ahorra Tiempo</h3>
                <p className="text-muted-foreground">
                  Automatiza la creación de rutinas y seguimiento de progreso.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Mejores Resultados</h3>
                <p className="text-muted-foreground">
                  Optimiza el progreso de tus alumnos con IA y análisis de datos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Fácil de Usar</h3>
                <p className="text-muted-foreground">
                  Interfaz intuitiva diseñada para optimizar tu flujo de trabajo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Soporte Premium</h3>
                <p className="text-muted-foreground">
                  Asistencia personalizada para resolver todas tus dudas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comienza hoy mismo a optimizar tu trabajo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            14 días de prueba gratis, sin compromiso
          </p>
          <Button size="lg" variant="secondary">
            Crear cuenta gratis
          </Button>
        </div>
      </section>
    </main>
  );
}