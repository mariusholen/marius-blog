import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		slug: z.string().optional(),
		description: z.string(),
		author: z.string(),
		image: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog };
