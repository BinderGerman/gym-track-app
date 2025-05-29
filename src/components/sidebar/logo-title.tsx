import Image from "next/image";
import Link from "next/link";
import { SidebarMenuItem, SidebarMenu, SidebarMenuButton } from "../ui/sidebar";

export function LogoTitle() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/dashboard" className="w-full">
          <SidebarMenuButton size="lg">
            <div className="flex aspect-square size-10 items-center justify-center">
              <Image 
                src="/gym-track-logo.png" 
                alt="Logo" 
                width={40} 
                height={40}
                className="size-8"
              />
            </div>
            <div className="grid flex-1 text-left text-xl leading-tight">
              <span className="truncate font-semibold">Gym Track</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}