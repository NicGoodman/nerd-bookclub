import { writable, derived } from 'svelte/store';

export const entryData = writable();
export const databaseData = writable();

export const databaseInfo = derived(databaseData, ($databaseData) => {
  return {
    name: $databaseData.data.title[0].plain_text,
    id: $databaseData.data.id,
    cover: $databaseData.data.cover,
    icon: $databaseData.data.icon,
    edited: $databaseData.data.last_edited_time
  }
});

export const entries = derived(entryData, ($entryData) => {
	var objects = [];
	for (const result in $entryData.data.results) {
		var tags = [];
		for (const tag in $entryData.data.results[result].properties.Tags.multi_select) {
			tags.push($entryData.data.results[result].properties.Tags.multi_select[tag]);
		}
		let object = {
			name: $entryData.data.results[result].properties.Name.title[0].text.content,
			id: $entryData.data.results[result].id,
			tags: tags,
			type: $entryData.data.results[result].properties.Type.select.name,
			poster: {
				name: $entryData.data.results[result].properties.Poster.people[0].name,
				avatar: $entryData.data.results[result].properties.Poster.people[0].avatar_url
			},
			url: $entryData.data.results[result].properties.URL.url
		};
		objects.push(object);
	}
	return objects;
});

// if ($entryData.data.results){
//   return $entryData.data.results.map(name => name.properties.Name.title[0].text.content);
// }
// return [];
