<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/entries');
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
	console.log(entries);
</script>

<h1>Hello World!</h1>
{entries.title.plain_text}
