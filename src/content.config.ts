import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const rules = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/rules" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    edition: z.string(),
    summary: z.string()
  }),
});

export const collections = { rules };
