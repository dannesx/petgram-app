import { z } from "zod"

const Schema = z.object({
  username: z.string(),
  password: z.string(),
})

export type LoginSchema = z.infer<typeof Schema>
