export function copyTextToClipboard(text) {
	console.log(`copying ${text}`);
	const input = document.createElement('input');
	input.type = 'text';
	input.value = text;
	input.style = 'position:fixed;top:-1000px';
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
}

class TagBagError extends Error {
	constructor (message) {
		super(message);
		this.name = 'TagBagError';
	}
}

export class TagBagApp {
	constructor() {
		this.categories = [];
		this.load();
	}
	static STORAGE_KEY = 'TagBagAppuserData';
	dump() {
		this.categories.forEach(category => {
			console.log(`Category: ${category.name}`);
			console.table(category.tags)
		})
	}
	save() {
		localStorage.setItem(TagBagApp.STORAGE_KEY, JSON.stringify(this.copy()));
		console.log(`Successfully saved user data`)
	}
	get tags() {
		return this.categories.map(category => category.tags).flat();
	}
	copy() {
		return this.categories.map((category) => category.copy());
	}
	get(categoryName) {
		return this.categories[categoryName];
	}
	has(categoryName) {
		return this.categories.find(category => category.name === categoryName) !== undefined;
	}
	add(categoryName) {
		if (!this.has(categoryName)) {
			const category = new TagBagCategory(categoryName);
			this.categories.push(category);
			return category;
		} else {
			throw new TagBagError(`Category "${categoryName}" already exists`);
		}
	}
}

export class TagBagCategory {
	constructor(name) {
		this.tags = [];
		this.name = name;
	}
	copy() {
		return {
			name: this.name,
			tags: [...this.tags],
		};
	}
	add(tag) {
		tag = TagBagCategory._cleanTag(tag);
		if (!this.has(tag)) {
			this.tags.push(tag);
		}
	}
	has(tag) {
		return this._indexOf(tag) !== -1;
	}
	remove(tag) {
		if (this.has(tag)) {
			this.tags.splice(this._indexOf(tag), 1);
		}
	}
	_indexOf(tag) {
		return this.tags.indexOf(tag);
	}
	static _cleanTag(tag) {
		tag = tag.trim();
		return tag.charAt(0) === '#' ? tag.substring(1) : tag;
	}
}
