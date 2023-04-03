import type { PageMetadata } from '@kyleulman/lib';
import type { PageLoad } from './$types';
import { content } from '../content';

export const load = (({ url }) => {
	const page: PageMetadata = {
		title: 'Welcome home!',
		description: 'An opinionated SvelteKit template with TypeScript & Tailwind.',
		url: url.href
	};

	return {
		page: page,
		content: content.home
	};
}) satisfies PageLoad;
