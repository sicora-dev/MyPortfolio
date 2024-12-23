import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
// z -> zod schema

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    url: z.string()
  }),
});

const education = defineCollection({
  schema: z.object({
    course: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    center: z.string(),
  }),
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
  }),
});
export const collections = { projects, education, experience };
