<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/entries');
		if (response.ok) {
			const { entries } = await response.json();
			return {
				props: {
					entries
				}
			};
		}
	}
</script>

<script>
	export let entries;
</script>

<h1 class="text-blue-400 text-4xl">Hello World!</h1>
{entries.title[0].plain_text}