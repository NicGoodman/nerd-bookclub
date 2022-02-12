export async function get() {
	const endpoint = `https://api.notion.com/v1/databases/${import.meta.env.VITE_DATABASE_ID}/query`;
	var raw = `
		{
			"filter": {
				"and": [
					{
						"property": "Name",
						"text": {
							"is_not_empty": true
						}
					},
					{
						"property": "Tags",
						"multi_select": {
							"is_not_empty": true
						}
					},
					{
						"property": "Type",
						"select": {
							"is_not_empty": true
						}
					},
					{
						"property": "Poster",
						"people": {
							"is_not_empty": true
						}
					}
				]
			}
		}
	`;
	const res = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Notion-Version': '2021-05-13',
			Authorization: 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN,
			'Content-type': 'application/json'
		},
		body: raw,
		redirect: 'follow'
	});
	const data = await res.json();
	return {
		status: 200,
		body: { data }
	};
}
