import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    kind: z.enum(["talk", "poster", "news"]).default("talk"),
    link: z.string().url().optional(),
    highlight: z.string().optional(),
  }),
});

export const collections = { talks };
