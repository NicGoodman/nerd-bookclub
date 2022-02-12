<script>
	import { entries, entryData, types } from './stores';
</script>

<main class="w-screen flex flex-col text-cyan-200 p-8">
	<h2 class="font-michroma text-2xl uppercase border-b border-b-pink-600 pb-2 mb-4">
		Current Picks
	</h2>
	{#each $types as type}
		<section id="" class="mb-4">
			<h3 id={type} class="font-michroma text-yellow-500 text-lg border-b border-cyan-700 mb-2 w-max">{type}</h3>
			{#each $entries as entry}
				{#if entry.current && entry.type.includes(type)}
					<a
						href={entry.url}
						class="group font-mono block"
						target="_blank"
						><span class="text-pink-600 group-hover:text-cyan-200 block mb-1">{entry.name}</span>
						<div class="flex flex-row text-xs divide-x divide-solid divide-cyan-700 -ml-2 lowercase">
							{#each entry.tags as tag}
								{#if tag !== 'all'}
									<span class="px-2">{tag}</span>
								{/if}
                                
							{/each}
                            <span class="px-2">test</span>
						</div></a
					>
				{/if}
			{/each}
		</section>
	{/each}
</main>
