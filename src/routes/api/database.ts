export async function get() {
	const endpoint = `https://api.notion.com/v1/databases/${import.meta.env.VITE_DATABASE_ID}`
	const res = await fetch(endpoint, {
		method: 'GET',
		headers: {
			'Notion-Version': '2021-05-13',
			Authorization: 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN,
			'Content-type': 'application/json'
		},
		redirect: 'follow',
	});
	const data = await res.json();
	return {
		status: 200,
		body: { data }
	};
}
