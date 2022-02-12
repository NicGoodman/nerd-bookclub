<script>
	import { entries, tags, types } from './stores';
	let tagFilter = 'all';
	let typeFilter = 'all';
	function setTag(tag) {
		tagFilter = tag;
	}
	function setType(type) {
		typeFilter = type;
	}
</script>

<main class="w-screen flex flex-col text-cyan-200 p-8">
	<h2 class="font-michroma text-2xl uppercase border-b border-b-pink-600 pb-2">Reading List</h2>
	<section id="filter-navigation" class="">
		<h4 id="" class="font-mono font-bold tracking-wide mt-4 uppercase">Topics</h4>
		<nav id="" class="w-full flex flex-row flex-wrap space-x-4 mt-2">
			<button
					class="transition-all font-mono text-xs lowercase py-1 px-2 border border-yellow-500 hover:bg-cyan-200 hover:border-pink-600 hover:text-pink-600 {tagFilter === 'all' ? 'bg-pink-600' : ''}"
					on:click={() => setTag('all')}>All</button
				>
			{#each $tags as tag}
				<button
					class="transition-all font-mono text-xs lowercase py-1 px-2 border border-yellow-500 hover:bg-cyan-200 hover:border-pink-600 hover:text-pink-600 {tagFilter === tag ? 'bg-pink-600' : ''}"
					on:click={() => setTag(tag)}>{tag}</button
				>
			{/each}
		</nav>
		<h4 id="" class="font-mono font-bold tracking-wide mt-6 uppercase">Mediums</h4>
		<nav id="" class="w-full flex flex-row flex-wrap space-x-4 mt-2">
			<button
					class="transition-all font-mono text-xs lowercase py-1 px-2 border border-yellow-500 hover:bg-cyan-200 hover:border-pink-600 hover:text-pink-600 {typeFilter === 'all' ? 'bg-pink-600' : ''}"
					on:click={() => setType('all')}>All</button
				>
			{#each $types as type}
				<button
					class="transition-all font-mono text-xs lowercase py-1 px-2 border border-yellow-500 hover:bg-cyan-200 hover:border-pink-600 hover:text-pink-600 {typeFilter === type ? 'bg-pink-600' : ''}" on:click={() => setType(type)}
					>{type}</button
				>
			{/each}
		</nav>
	</section>
	<ul class="mt-8 font-mono space-y-4">
		{#each $entries as entry}
			{#if entry.tags.includes(tagFilter) && entry.type.includes(typeFilter)}
				<li class="p-4 border border-pink-600">
					<a href={entry.url} class="hover:text-pink-600 transition-all" target="_blank"
						>{entry.name}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
</main>
