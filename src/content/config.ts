import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string())
  })
})

export const collections = {
  projects: projectsCollection,
}
