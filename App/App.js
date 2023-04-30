const User = require("./entities/user")
const Database = require("./Database")
const Author = require("./entities/author")
const Poster = require("./entities/Poster")
const Order = require("./entities/Order")
const Book = require("./entities/Book")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)

    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthor() {
        return App.#database.find('authors')
    }

    createBooks(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)

    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)

    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBookFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity )
            }
        })

    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}

