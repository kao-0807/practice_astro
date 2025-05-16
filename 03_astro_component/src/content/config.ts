// src/content/config.ts
import { defineCollection, z } from "astro:content";

const members = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    summary: z.string(),
    image: z.string(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    order: z.number().optional(), 
  }),
});

export const collections = {
  members,
};