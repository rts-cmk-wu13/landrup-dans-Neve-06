import { z } from "zod"

export const loginSchema = z.object({
    username: z.string("Skriv et gyldigt brugernavn"),
    password: z.string().min(3, "Koden skal være mindst 3 tegn lang"),
})
