import type { PageServerLoad } from './$types';

// Enable prerendering - this page will be generated at build time
export const prerender = true;

export const load: PageServerLoad = () => {
	// This data is generated at build time and baked into the static HTML
	// It will NOT change on client-side navigation or refresh
	const buildTime = new Date().toISOString();
	const randomNumber = Math.floor(Math.random() * 1000);

	return {
		buildTime,
		randomNumber,
		message: 'This data was generated at build time'
	};
};
