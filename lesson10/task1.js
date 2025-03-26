import Book from './books.js';

const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954);
const book2 = new Book('Dune', 'Frank Herbert', 1963);
const book3 = new Book('Angels & Demons', 'Dan Brown', 2000);

book1.printInfo();
book2.printInfo();
book3.printInfo();

book1.name = 'The Hobbit';
book1.author = 'Tolkien';
book1.year = 1937;

book1.printInfo();
