"use client"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

interface NavMainProps {
  items: {
    label: string
    href: string
    icon: LucideIcon
  }[]
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-base font-semibold mb-4">Navegación</SidebarGroupLabel>
      <SidebarMenu className="space-y-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton asChild>
              <Link href={item.href} className="flex items-center gap-3 py-2">
                <item.icon className="h-6 w-6" />
                <span className="text-base">{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}