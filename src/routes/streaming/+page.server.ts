import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Immediate data
	const immediateData = {
		time: new Date().toISOString(),
		message: 'This loaded immediately'
	};

	// Data that takes 3 seconds to load - simulate fetching user list
	const slowData3s = new Promise((resolve) => {
		setTimeout(() => {
			const users = Array.from({ length: 15 }, (_, i) => ({
				id: i + 1,
				name: `User ${i + 1}`,
				email: `user${i + 1}@example.com`,
				role: i % 4 === 0 ? 'Admin' : i % 4 === 1 ? 'Manager' : i % 4 === 2 ? 'Editor' : 'Viewer',
				status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'
			}));
			resolve({
				loadTime: new Date().toISOString(),
				count: users.length,
				users
			});
		}, 3000);
	});

	// Data that takes 5 seconds to load - simulate fetching product list
	const slowData5s = new Promise((resolve) => {
		setTimeout(() => {
			const products = Array.from({ length: 20 }, (_, i) => ({
				id: i + 1,
				name: `Product ${i + 1}`,
				category: i % 5 === 0 ? 'Electronics' : i % 5 === 1 ? 'Clothing' : i % 5 === 2 ? 'Food' : i % 5 === 3 ? 'Books' : 'Toys',
				price: Math.floor(Math.random() * 1000) + 10,
				stock: Math.floor(Math.random() * 100)
			}));
			resolve({
				loadTime: new Date().toISOString(),
				count: products.length,
				products
			});
		}, 5000);
	});

	return {
		immediateData,
		slowData3s,
		slowData5s
	};
};
