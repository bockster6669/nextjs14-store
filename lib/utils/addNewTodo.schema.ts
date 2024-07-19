import { z } from "zod";

export const createTodoFormSchema = z.object({
    title: z.string().max(10),
    description: z.string().max(20),
})

export type createTodoForm = z.infer<typeof createTodoFormSchema>