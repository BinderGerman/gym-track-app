'use client';
import { usePathname } from "next/navigation";

//components and utils
import { authLayoutConfig } from "@/constants/auth-layout-config";

//ui
import { Card, CardContent } from "@/components/ui/card";

export default function AuthLayout() {
  const pathName = usePathname()

  const layoutData = authLayoutConfig.find(config => config.path === pathName)

  if (!layoutData) {
    return <div>Ruta no encontrada</div>;
  }

  const { component: Component } = layoutData; 

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="container h-[90vh] flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 rounded-lg overflow-hidden shadow-lg">
        {/* ===== Image ===== */}
        <div className="relative hidden h-full flex-col p-10 lg:flex">
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${layoutData?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="relative z-20 mt-auto">
            <footer className="text-lg">
              <h3 className="font-extralight italic text-foreground">&ldquo;{layoutData.famousQuote}&rdquo;</h3>
              <h4 className=" font-medium text-sm text-foreground" >- {layoutData.famousQuoteAuthor}</h4>
            </footer>
          </div>
        </div>

        {/* ===== Form ===== */}
        <div className="flex items-center justify-center h-full bg-secondary">
          <div className="w-full max-w-[450px] p-4">
            <Card className="border-none bg-secondary">
              <CardContent className="p-0">
                <Component />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}