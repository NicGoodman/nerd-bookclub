<script context="module">
	import { entryData, databaseData } from './stores.js';
	export async function load({ fetch }) {
		const entriesResponse = await fetch('/api/entries');
		const databaseInfoResponse = await fetch('/api/database');
		if (entriesResponse.ok && databaseInfoResponse.ok) {
			entryData.set(await entriesResponse.json());
			databaseData.set(await databaseInfoResponse.json());
		}
		return [];
	}
</script>

<script>
    import "../app.css";
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>
  
<nav>
  <a href="/">Home</a>
  <a href="/current-book">Current</a>
  <a href="https://nicgoodman.notion.site/2063e4db5bfa4f0f92c0e350a64f29d8?v=a4b8579bf9524854911f8c679bf7fbe0">Notion</a>
</nav>

<slot></slot>