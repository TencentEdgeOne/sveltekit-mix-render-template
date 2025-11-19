<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// Pagination state for users
	let userPage = $state(1);
	const userPageSize = 5;

	// Pagination state for products
	let productPage = $state(1);
	const productPageSize = 5;

	// Helper function to paginate data
	function paginate<T>(items: T[], page: number, pageSize: number) {
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		return items.slice(start, end);
	}

	// Helper function to get total pages
	function getTotalPages(total: number, pageSize: number) {
		return Math.ceil(total / pageSize);
	}
</script>

<svelte:head>
	<title>Streaming - SvelteKit Hybrid Rendering Template</title>
	<meta name="description" content="Learn about SvelteKit's streaming feature" />
</svelte:head>

<div class="text-column">
	<h1>Streaming</h1>

	<p>
		This page demonstrates <a href="https://svelte.dev/docs/kit/load#streaming-with-promises" target="_blank">streaming</a> in SvelteKit.
		The page starts rendering immediately with available data, while slower data streams in as it becomes ready.
	</p>

	<p>
		Watch the data below load progressively at different intervals!
	</p>

	<h2>Immediate Data</h2>

	<div class="data-display">
		<div class="data-item">
			<strong>Load Time:</strong>
			<code>{data.immediateData.time}</code>
		</div>
		<div class="data-item">
			<strong>Message:</strong>
			<code>{data.immediateData.message}</code>
		</div>
	</div>

	<h2>Delayed Data (3 seconds) - User List</h2>

	{#await data.slowData3s}
		<div class="data-display loading">
			<div class="loading-spinner">⏳</div>
			<p>Loading user data... (3s delay)</p>
		</div>
	{:then slowData}
		<div class="data-display">
			<div class="data-summary">
				<strong>Load Time:</strong> <code>{slowData.loadTime}</code>
				<strong>Total Users:</strong> <code>{slowData.count}</code>
			</div>
			<div class="data-table">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{#each paginate(slowData.users, userPage, userPageSize) as user}
							<tr>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td><span class="status status-{user.status.toLowerCase()}">{user.status}</span></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="pagination">
				<button 
					onclick={() => userPage = Math.max(1, userPage - 1)}
					disabled={userPage === 1}
				>
					Previous
				</button>
				<span class="page-info">
					Page {userPage} of {getTotalPages(slowData.count, userPageSize)}
				</span>
				<button 
					onclick={() => userPage = Math.min(getTotalPages(slowData.count, userPageSize), userPage + 1)}
					disabled={userPage === getTotalPages(slowData.count, userPageSize)}
				>
					Next
				</button>
			</div>
		</div>
	{/await}

	<h2>Delayed Data (5 seconds) - Product List</h2>

	{#await data.slowData5s}
		<div class="data-display loading">
			<div class="loading-spinner">⏳</div>
			<p>Loading product data... (5s delay)</p>
		</div>
	{:then slowData}
		<div class="data-display">
			<div class="data-summary">
				<strong>Load Time:</strong> <code>{slowData.loadTime}</code>
				<strong>Total Products:</strong> <code>{slowData.count}</code>
			</div>
			<div class="data-table">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Stock</th>
						</tr>
					</thead>
					<tbody>
						{#each paginate(slowData.products, productPage, productPageSize) as product}
							<tr>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.category}</td>
								<td>${product.price}</td>
								<td>{product.stock}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="pagination">
				<button 
					onclick={() => productPage = Math.max(1, productPage - 1)}
					disabled={productPage === 1}
				>
					Previous
				</button>
				<span class="page-info">
					Page {productPage} of {getTotalPages(slowData.count, productPageSize)}
				</span>
				<button 
					onclick={() => productPage = Math.min(getTotalPages(slowData.count, productPageSize), productPage + 1)}
					disabled={productPage === getTotalPages(slowData.count, productPageSize)}
				>
					Next
				</button>
			</div>
		</div>
	{/await}

	<h2>How It Works</h2>

	<p>
		Return promises from your <code>+page.server.ts</code> load function:
	</p>

	<pre>export const load: PageServerLoad = async () => {`
  const immediateData = { ... };
  
  const slowData = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ... });
    }, 3000);
  });
  
  return { immediateData, slowData };
`};</pre>

	<p>
		Use <code>{'{#await}'}</code> blocks in your component to handle loading states. 
		The page renders immediately while promises resolve in the background.
	</p>
</div>

<style>
	h2 {
		font-size: 1.25rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.8);
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	code {
		background: rgba(64, 117, 166, 0.15);
		color: var(--color-theme-2);
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	pre {
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.8);
		border-radius: 8px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
	}

	.data-display {
		background: rgba(255, 255, 255, 0.6);
		border-radius: 8px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		margin: 1rem 0;
		border: 1px solid rgba(255, 255, 255, 0.8);
	}

	.data-display.loading {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-text);
	}

	.loading-spinner {
		font-size: 1.5rem;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.data-summary {
		display: flex;
		gap: 2rem;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		align-items: center;
		font-size: 0.9rem;
	}

	.data-summary strong {
		color: var(--color-theme-1);
		font-weight: 600;
		margin-right: 0.5rem;
	}

	.data-summary code {
		background: rgba(255, 255, 255, 0.8);
		color: var(--color-theme-2);
		padding: 0.25rem 0.5rem;
		border-radius: 3px;
		font-size: 0.85em;
		border: 1px solid rgba(64, 117, 166, 0.2);
	}

	.data-table {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.85rem;
	}

	thead {
		background: rgba(64, 117, 166, 0.1);
	}

	th {
		text-align: left;
		padding: 0.5rem;
		font-weight: 600;
		color: var(--color-theme-2);
		border-bottom: 2px solid rgba(64, 117, 166, 0.3);
	}

	td {
		padding: 0.5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	tbody tr:hover {
		background: rgba(64, 117, 166, 0.05);
	}

	.status {
		display: inline-block;
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-size: 0.8em;
		font-weight: 500;
	}

	.status-active {
		background: rgba(34, 197, 94, 0.2);
		color: rgb(21, 128, 61);
	}

	.status-pending {
		background: rgba(234, 179, 8, 0.2);
		color: rgb(161, 98, 7);
	}

	.status-inactive {
		background: rgba(156, 163, 175, 0.2);
		color: rgb(75, 85, 99);
	}

	.data-item {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		align-items: center;
		font-size: 0.9rem;
	}

	.data-item:last-child {
		margin-bottom: 0;
	}

	.data-item strong {
		min-width: 120px;
		color: var(--color-theme-1);
		font-weight: 600;
	}

	.data-item code {
		background: rgba(255, 255, 255, 0.8);
		color: var(--color-theme-2);
		padding: 0.35rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85em;
		border: 1px solid rgba(64, 117, 166, 0.2);
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
		padding-top: 0.75rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.pagination button {
		padding: 0.4rem 1rem;
		background: var(--color-theme-2);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.85rem;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	.pagination button:hover:not(:disabled) {
		opacity: 0.8;
	}

	.pagination button:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.page-info {
		font-size: 0.85rem;
		color: var(--color-text);
		font-weight: 500;
	}
</style>
