//components and utils
import SignInPage from "@/app/(auth)/sign-in/[[...rest]]/page";
import SignUpPage from "@/app/(auth)/sign-up/[[...rest]]/page";
import { IAuthLayout } from "@/interfaces/auth-layout-interface";

export const authLayoutConfig: IAuthLayout[] = [
    {
        path: "/sign-in",
        image: "/dumbbells.jpg",
        famousQuote: "El verdadero fracaso no es perder, sino no atreverse a intentarlo.",
        famousQuoteAuthor: "Anónimo",
        component: SignInPage
    },
    {
        path: "/sign-up",
        image: "/weight-discs.jpg",
        famousQuote: "La motivación te pone en marcha, pero el hábito es lo que te mantiene en movimiento",
        famousQuoteAuthor: "Jim Ryun",
        component: SignUpPage
    }
]