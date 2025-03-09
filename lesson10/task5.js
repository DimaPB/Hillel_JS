import Book from './books.js';
import EBook from './ebook.js';

const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954);

const ebook1 = EBook.BookWithFormat(book1, 'PDF');
ebook1.printInfo();
