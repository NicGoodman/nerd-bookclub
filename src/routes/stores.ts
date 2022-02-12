import { writable, derived } from 'svelte/store';

export const entryData = writable({
	data: {
		results: []
	}
});
export const databaseData = writable({
	data: {
		title: [],
		id: '',
		cover: {
			type: '',
			external: {
				url: ''
			},
			file: {
				url: ''
			}
		},
		icon: {
			type: '',
			emoji: '',
			file: {
				url: ''
			}
		},
		last_edited_time: ''
	}
});

export const databaseInfo = derived(databaseData, ($databaseData) => {
	let icon = '';
	if ($databaseData.data.icon.type == 'emoji') {
		icon = $databaseData.data.icon.emoji;
	} else if ($databaseData.data.icon.type == 'file') {
		icon = $databaseData.data.icon.file.url;
	}
	let cover = '';
	if ($databaseData.data.cover.type == 'external') {
		cover = $databaseData.data.cover.external.url;
	} else if ($databaseData.data.cover.type == 'file') {
		cover = $databaseData.data.cover.file.url;
	}
	return {
		name: $databaseData.data.title[0].plain_text,
		id: $databaseData.data.id,
		cover: cover,
		icon_type: $databaseData.data.icon.type,
		icon: icon,
		edited: $databaseData.data.last_edited_time
	};
});
export var tags = derived(entryData, ($entryData) => {
	var tagObjects = [];
	for (const result in $entryData.data.results) {
		for (const tag in $entryData.data.results[result].properties.Tags.multi_select) {
			tagObjects.push($entryData.data.results[result].properties.Tags.multi_select[tag].name);
		}
	}
	return Array.from(new Set(tagObjects));
});
export var types = derived(entryData, ($entryData) => {
	var typeObjects = [];
	for (const result in $entryData.data.results) {
		typeObjects.push($entryData.data.results[result].properties.Type.select.name);
	}
	return Array.from(new Set(typeObjects));
});
export const entries = derived(entryData, ($entryData) => {
	var objects = [];
	for (const result in $entryData.data.results) {
		var objectTags = [];
		var objectTypes = [];
		for (const tag in $entryData.data.results[result].properties.Tags.multi_select) {
			objectTags.push($entryData.data.results[result].properties.Tags.multi_select[tag].name);
		}
		objectTypes.push($entryData.data.results[result].properties.Type.select.name);
		objectTypes.push('all');
		objectTags.push('all');
		let object = {
			name: $entryData.data.results[result].properties.Name.title[0].text.content,
			id: $entryData.data.results[result].id,
			tags: objectTags,
			type: objectTypes,
			poster: {
				name: $entryData.data.results[result].properties.Poster.people[0].name,
				avatar: $entryData.data.results[result].properties.Poster.people[0].avatar_url
			},
			url: $entryData.data.results[result].properties.URL.url,
			current: $entryData.data.results[result].properties['Current Pick'].checkbox
		};
		objects.push(object);
	}
	return objects;
});