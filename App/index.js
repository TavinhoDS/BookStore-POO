const App = require("./App");

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'BRitish', '...')
app.createAuthor('Rick Riordan' , 'American' , '...')

const authors = app.getAuthor()

app.createBooks('O Hoobit', '...', 'fantasy', 300 , authors[0], '...', 19.99, 100)
app.createBooks('A Sociedade do Anel', '...', 'fantasy', 400 , authors[0], '...', 24.99, 100)
app.createBooks('O Ladrão de Raios', '...', 'fantasy', 500 , authors[1], '...', 29.99, 100)
app.createBooks('A Piramide Vermelha', '...', 'fantasy', 600 , authors[1], '...', 49.99, 100)

const books = app.getBooks()

app.createUser('Otávio', 'otaviods@gmail.com', '123456')

const users  = app.getUsers()


const items = [
    {
        product:books[0],
        quantity: 2
    },
    {
        product:books[1],
        quantity: 1
    },
    {
        product:books[3],
        quantity: 2
    }
]

app.createOrder(items,users[0])


app.showDatabase()