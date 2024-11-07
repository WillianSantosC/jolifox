import { z } from 'zod';

export const recordSchema = {
  create: z.object({
    company: z.string(),
    campaign: z.string(),
    content: z.string(),
    description: z.string(),
    where: z.string(),
    plannedDate: z.string().date(),
    language: z.enum(['Portuguese', 'Japanese', 'English']),
    imageFiles: z
      .array(
        z
          .object({
            file: z
              .object({
                url: z.string(),
                expiry_time: z.string().date().optional(),
              })
              .optional(),
            name: z.string(),
          })
          .optional(),
        z
          .object({
            external: z.object({
              url: z.string(),
            }),
            name: z.string(),
          })
          .optional()
      )
      .optional(),
    imageContent: z.string().optional(),
  }),

  update: z.object({
    id: z.string(),
    company: z.string().optional(),
    campaign: z.string().optional(),
    content: z.string().optional(),
    description: z.string().optional(),
    where: z.string().optional(),
    plannedDate: z.string().date().optional(),
    language: z.enum(['Portuguese', 'Japanese', 'English']).optional(),
  }),

  retrieve: z.object({
    id: z.string(),
  }),

  delete: z.object({
    id: z.string(),
  }),
};
