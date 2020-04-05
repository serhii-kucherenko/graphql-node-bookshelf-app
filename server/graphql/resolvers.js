import books from '../data/books';

const resolvers = {
    Query: {
        books: (root, { searchTerm }) => {
            return books;
        },

        book: (root, { id }) => {
            return books.find(book => book.id === id);
        },
    },

    Mutation: {
        addBook: (root, body) => {
            const {
                title,
                author,
                description
            } = body;

            const newBook = {
                id: Math.random().toString(),
                title,
                author,
                description,
                rating: 0,
            };

            books.push(newBook);

            return newBook;
        },

        rate: (root, { id }) => {
            books = books.map(book => {
               return id === book.id
                   ? { ...book, rate }
                   : book
            });

            return books.find(book => book.id === id);
        }
    }
};

export default resolvers;
