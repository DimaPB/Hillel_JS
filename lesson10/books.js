export default class Book {
	constructor(name, author, year) {
		this._name = name;
		this._author = author;
		this._year = year;
	}

	get name() {
		return this._name;
	}
	set name(value) {
		if (typeof value === 'string') {
			this._name = value;
		} else {
			throw new Error('Wrong data type');
		}
	}

	get author() {
		return this._author;
	}
	set author(value) {
		if (typeof value === 'string') {
			this._author = value;
		} else {
			throw new Error('Wrong data type');
		}
	}

	get year() {
		return this._year;
	}
	set year(value) {
		if (typeof value === 'number') {
			this._year = value;
		} else {
			throw new Error('Wrong data type');
		}
	}

	printInfo() {
		console.log(`${this.name}, ${this.author}, ${this.year}`);
	}

	static returnOldestBook(books) {
		let oldestBook = books[0];
		for (let book of books) {
			if (book.year < oldestBook.year) {
				oldestBook = book;
			}
		}
		return oldestBook;
	}
}
