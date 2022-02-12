<script context="module">
	import { entryData, databaseData, databaseInfo } from './stores';
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
	import '../app.css';
	import { page } from '$app/stores';
	$: currentRoute = $page.url.pathname;
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet" />
	<script src="https://kit.fontawesome.com/0476750d85.js" crossorigin="anonymous"></script>
</svelte:head>

<header
	id="site-header"
	class="w-screen p-8 bg-cover bg-top aspect-[2.5/1] border-b-2 border-b-[#9f5eb1]"
	style="background-image: url('{$databaseInfo.cover}');"
>
<section id="header-content-wrapper" class="p-4 bg-slate-900 bg-opacity-75 w-max border-2 border-[#9f5eb1] backdrop-blur-lg">
	{#if ($databaseInfo.icon_type = 'emoji')}
		<h1
			id="site-title"
			class="text-4xl font-michroma uppercase font-black text-pink-600 [text-shadow:0_0px_16px_rgba(82,163,212,1)]"
		>
			{$databaseInfo.icon}
			{$databaseInfo.name}
		</h1>
	{:else if ($databaseInfo.icon_type = 'file')}
		<img id="site-logo" class="h-11 pr-4" src={$databaseInfo.icon} alt="" />
		<h1 id="site-title" class="text-4xl font-michroma">{$databaseInfo.name}</h1>
	{/if}
	<nav id="site-nav" class="w-full space-x-4 mt-4 font-bold tracking-wider font-mono transition-all">
		<a href="/" class="{currentRoute === '/' ? 'text-cyan-400 border-b-pink-600' : 'text-cyan-200 border-b-transparent '} hover:text-yellow-500 border-b hover:border-b-pink-600 transition-all">Home</a>
		<a href="/current-book" class="{currentRoute === '/current-book' ? 'text-cyan-400 border-b-pink-600' : 'text-cyan-200 border-b-transparent '} hover:text-yellow-500 border-b hover:border-b-pink-600 transition-all">Current</a>
		<a
			href="https://nicgoodman.notion.site/2063e4db5bfa4f0f92c0e350a64f29d8?v=a4b8579bf9524854911f8c679bf7fbe0" class="text-cyan-200 hover:text-yellow-500 border-b border-b-transparent hover:border-b-pink-600 transition-all" target="_blank"
			>Notion</a
		>
	</nav>
</section>
</header>
<slot />

<style>
	:global(body) {
		background-color: #1d0016;
	}
</style>
