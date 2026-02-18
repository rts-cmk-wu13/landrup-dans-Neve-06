import { z } from "zod"

export const loginSchema = z.object({
    username: z.string("Enter a valid email"),
    password: z.string().min(3, "Password must be at least 3 characters long"),
})
