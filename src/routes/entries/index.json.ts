export async function get() {
const res = await fetch(
		'https://api.notion.com/v1/databases/2063e4db5bfa4f0f92c0e350a64f29d8?v=a4b8579bf9524854911f8c679bf7fbe0',
		{
			method: 'GET',
			headers: {
				'Notion-Version': '2021-05-13',
				Authorization: 'Bearer secret_SzoD73V9go2wve3Wx7RTUglFYwwIGXNwtwAZK856RZ5'
			},
			redirect: 'follow'
		}
	);
	const entries = await res.json();
	return {
		status: 200,
		body: { entries }
	};
}
