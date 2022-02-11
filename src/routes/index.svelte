<script>
	import { entries, databaseInfo } from './stores';
</script>

<header class="w-screen flex flex-row">
    <h1 id="" class="">{$databaseInfo.name}</h1>
</header>

<main class="w-screen flex flex-col">
	<h2>Current Reading</h2>
	<ul>
		{#each $entries as entry}
			<li>
				{entry.name}
			</li>
		{/each}
	</ul>
</main>
