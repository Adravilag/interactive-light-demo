// @ts-check

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [],
	vite: {
		server: {
			fs: {
				strict: false
			}
		},
		assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf']
	}
});
