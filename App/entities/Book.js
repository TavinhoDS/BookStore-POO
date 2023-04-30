const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(title, synopsis, genre, page, author, description, price, inStock = 0) {
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.page = page
        this.author = author
    }
}