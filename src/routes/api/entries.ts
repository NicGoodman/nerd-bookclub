export async function get() {
	const res = await fetch(`${import.meta.env.VITE_ENDPOINT}`, {
		method: 'GET',
		headers: {
			'Notion-Version': '2021-05-13',
			Authorization: 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN
		},
		redirect: 'follow'
	});
	const entries = await res.json();
	return {
		status: 200,
		body: { entries }
	};
}
