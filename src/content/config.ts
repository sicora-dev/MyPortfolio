import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
// z -> zod schema

const projects = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    desc: z.string(),
    url: z.string(),
    icon: z.string().url(),
    repo: z.string().url(),
    stack: z.string()
  }),
});

const education = defineCollection({
  schema: z.object({
    id: z.number(),
    course: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    center: z.string(),
    url: z.string().url()
  }),
});

const experience = defineCollection({
  schema: z.object({
    id: z.number(),
    company: z.string(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    url: z.string().url()
  }),
});
export const collections = { projects, education, experience };
