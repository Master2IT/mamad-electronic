import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5).default(3),
  description: z.string({
    required_error: 'نظر الزامی است',
  }).min(1, 'نظر الزامی است'),
  send_anonymously: z.boolean().default(false),
})

export type ReviewFormData = z.infer<typeof reviewSchema> 