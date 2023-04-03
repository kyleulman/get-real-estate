import type { PageMetadata } from '@kyleulman/lib';
import { content } from '../content';
import type { PageLoad } from './$types';

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
