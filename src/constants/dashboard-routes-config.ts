import { IDashboardRoutes } from "@/interfaces/dashboard-routes-interface";

import {
	LayoutDashboard,
	UsersRound,
	TableOfContents,
	Dumbbell,
} from "lucide-react";

export const routes: IDashboardRoutes[] = [
	{
		label: "Panel General",
		icon: LayoutDashboard,
		href: "/dashboard",
	},
	{
		label: "Alumnos ",
		icon: UsersRound,
		href: "/dashboard/students",
	},
	{
		label: "Rutinas",
		icon: TableOfContents,
		href: "/dashboard/routines",
	},
	{
		label: "Ejercicios",
		icon: Dumbbell,
		href: "/dashboard/exercises",
	},
]
	
	
	
