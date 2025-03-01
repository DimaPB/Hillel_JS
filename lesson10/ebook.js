import Book from "./books.js"
export default class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this._fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }
    set fileFormat(value) {
        if (value == "PDF" || value == "ePub") {
            this._fileFormat = value
        } else {
            throw new Error("Wrong data type")
        }

    }


    printInfo() {
        try {
            console.log(`${this.name}, ${this.author}, ${this.year}, ${this.fileFormat}`);
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    static BookWithFormat(first, second) {
        return new EBook(first.name, first.author, first.year, second)

    }
}



