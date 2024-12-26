import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: ["**/*.md", "**/*.mdx"] }),
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
