<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>CSR - SvelteKit Hybrid Rendering Template</title>
	<meta name="description" content="Learn about SvelteKit's client-side rendering feature" />
</svelte:head>

<div class="text-column">
	<h1>Client-Side Rendering (CSR)</h1>

	<p>
		This page demonstrates <a href="https://svelte.dev/docs/kit/page-options#csr" target="_blank">client-side rendering</a> in SvelteKit.
		The page is rendered entirely in the browser, with no server-side rendering. Data is loaded and rendered after the JavaScript loads.
	</p>

	<p>
		Try viewing the page source — you won't see the content below in the HTML!
	</p>

	<h2>Client Data</h2>

	<div class="data-display">
		<div class="data-item">
			<strong>Client Time:</strong>
			<code>{data.clientTime}</code>
		</div>
		<div class="data-item">
			<strong>Random Number:</strong>
			<code>{data.randomNumber}</code>
		</div>
		<div class="data-item">
			<strong>Message:</strong>
			<code>{data.message}</code>
		</div>
	</div>

	<h2>How to Enable</h2>

	<p>
		Add this export to your <code>+page.ts</code> file:
	</p>

	<pre>export const ssr = false;</pre>

	<p>
		CSR is useful for highly interactive apps, dashboards, and SPAs that don't need SEO or initial render performance.
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
</style>
