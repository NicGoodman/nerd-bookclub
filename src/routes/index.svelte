<script>
	import { entries, databaseInfo } from './stores.js';
</script>

<header class="w-screen flex flex-row">
    <!-- <h1>{$databaseInfo.data.title[0].text.content}</h1> -->
</header>

<main class="w-screen flex flex-col">
	<h2>Current Reading</h2>
	{$databaseInfo.name}
	<ul>
		{#each $entries as entry}
			<li>
				{entry.name}
			</li>
		{/each}
	</ul>
</main>
