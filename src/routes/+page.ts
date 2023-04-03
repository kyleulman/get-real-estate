import type { PageMetadata } from '@kyleulman/lib';
import type { PageLoad } from './$types';
import { content } from '../content';

export const load = (({ url }) => {
	const page: PageMetadata = {
		title: content.home.hero.heading,
		description: content.home.hero.description,
		url: url.href
	};

	return {
		page: page,
		content: content.home
	};
}) satisfies PageLoad;
