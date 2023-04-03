import type { SiteMetadata } from '@kyleulman/lib';
import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
	const site: SiteMetadata = {
		title: 'SvelteKit Starter',
		type: 'website',
		robots: 'all',
		imageSrc: url.origin + '/card-1440x720.png',
		imageAlt: 'Website image.',
		twitterCard: 'summary_large_image',
		twitterSite: 'kyleulman',
		twitterCreator: 'kyleulman'
	};

	return {
		site: site
	};
}) satisfies LayoutLoad;
