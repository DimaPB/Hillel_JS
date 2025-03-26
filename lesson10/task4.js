import Book from './books.js';
import EBook from './ebook.js';

const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954);
const book2 = new Book('Dune', 'Frank Herbert', 1963);
const book3 = new Book('Angels & Demons', 'Dan Brown', 2000);
const ebook1 = new EBook(
	'Treasure Island',
	'Robert Louis Stevenson',
	1883,
	'PDF',
);

const books = [book1, book2, book3, ebook1];
const oldestBook = Book.returnOldestBook(books);
oldestBook.printInfo();
