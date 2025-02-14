import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";
// import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "https://haerang34.github.io",
    base: "blog",
	output: "hybrid",
	adapter: vercel({
		webAnalytics: { enabled: true },
		functionPerRoute: false,
	}),
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: ["nofollow, noopener, noreferrer"],
				},
			],
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		svelte(),
	],
	image: {
		domains: ["webmention.io"],
	},
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,

	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},

		build: {
			rollupOptions: {
				external: [
					"node:util",
					"node:stream",
					"node:events",
					"node:os",
					"node:path",
					"child_process",
					"node:child_process",
					"node:crypto",
					"fs",
				],
			},
		},
	},
});
