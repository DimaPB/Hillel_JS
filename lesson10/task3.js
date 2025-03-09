import Book from "./books.js"
import EBook from "./ebook.js"

const ebook1 = new EBook("Treasure Island", "Robert Louis Stevenson", 1883, "PDF")
const book2 = new Book("Dune", "Frank Herbert", 1963)

// ebook1.printInfo()
// ebook1.fileFormat = "nePDF"

book2.printInfo()
book2.year = "1111"



