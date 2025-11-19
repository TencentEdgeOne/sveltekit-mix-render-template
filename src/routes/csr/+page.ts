import type { PageLoad } from './$types';

// Disable SSR to enable client-side rendering only
export const ssr = false;

export const load: PageLoad = () => {
	// This data is loaded on the client side
	const clientTime = new Date().toISOString();
	const randomNumber = Math.floor(Math.random() * 1000);

	return {
		clientTime,
		randomNumber,
		message: 'This data was loaded on the client'
	};
};
