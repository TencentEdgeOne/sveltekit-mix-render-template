import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Simulate server-side data fetching
	const serverTime = new Date().toISOString();
	const randomNumber = Math.floor(Math.random() * 1000);

	return {
		serverTime,
		randomNumber,
		message: 'This data was loaded on the server'
	};
};
