import type {
	PageMetadata,
	SharedMetadata
} from '@kyuisonline/workbench/dist/types';
import SearchLocate from 'carbon-icons-svelte/lib/SearchLocate.svelte';
import ApplicationWeb from 'carbon-icons-svelte/lib/ApplicationWeb.svelte';
import UserFavoriteAltFilled from 'carbon-icons-svelte/lib/UserFavoriteAltFilled.svelte';
import UpdateNow from 'carbon-icons-svelte/lib/UpdateNow.svelte';
import PenFountain from 'carbon-icons-svelte/lib/PenFountain.svelte';

export const sharedMetadata: SharedMetadata = {
	title: 'Get Real Estate',
	type: 'website',
	robots: 'all',
	image: {
		src: 'https://res.cloudinary.com/kyuisonline/image/upload/v1682964454/get-real-estate/card-720-png.png',
		alt: 'Get Real Estate logo.',
		width: '720',
		height: '720'
	},
	twitter: {
		card: 'summary'
	}
};

export const home: {
	metadata: PageMetadata;
	hero: any;
	website: any;
	websiteCTA: any;
	copywriting: any;
	copywritingCTA: any;
	footer: any;
} = {
	metadata: {
		title: 'Connect with new potential clients, daily',
		description:
			'Every closing starts with a lead. Get more leads with a custom website and landing pages. Please enter your email address to get started.',
		url: ''
	},
	hero: {
		heading: 'Connect with new potential clients, daily',
		description:
			'Every closing starts with a lead. Get more leads with a custom website and landing pages. Please enter your email address to get started.'
	},
	website: {
		heading: 'A beautiful website, packed with tools to help you succeed',
		iconList: [
			{
				icon: SearchLocate,
				heading: 'IDX integration',
				description:
					'An absolutely essential feature that allows prospective buyers to search listings, bringing them that much closer to closing with you.'
			},
			{
				icon: ApplicationWeb,
				heading: 'Targeted landing pages',
				description:
					'Landing pages are pages on your website that are specifically designed to rank well in search engines and convert visitors into clients.'
			},
			{
				icon: UserFavoriteAltFilled,
				heading: 'Testimonial manager',
				description:
					'The most effective social proof your could ask for is the word of your happiest clients. The testimonial manager makes it a breeze to collect reviews and display the best ones on your website.'
			},
			{
				icon: UpdateNow,
				heading: 'Weekly updates',
				description: `Weekly updates ensure that the site is trending upward in search engine rankings and overall performance. A monthly report of the website's health and lead-generating efficacy is sent via email.`
			},
			{
				icon: PenFountain,
				heading: 'Blogging platform',
				description: `A frequently-updated blog keeps your site fresh in search engines, allowing new visitors to find it organically.`
			}
		]
	},
	websiteCTA: {
		heading: 'Lead-generating websites are available for $350/month'
	},
	copywriting: {
		heading:
			'A copywriting service to keep your content fresh and discoverable',
		description:
			"It can be difficult to find the time to write blog posts amidst a fast-paced schedule. To maximize your website's lead-generating potential, consider the copywriting service. An engaging, persuasive, and search engine-optimized article posted to your blog each week."
	},
	copywritingCTA: {
		heading: 'The copywriting service is available for $1200/month',
		description: 'Additional posts available for $375/post'
	},
	footer: {
		heading: 'Ready to start?',
		description: 'Please enter your email address to get started.'
	}
};
