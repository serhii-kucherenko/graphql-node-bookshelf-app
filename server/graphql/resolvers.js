import Book from "../models/Book";

const resolvers = {
    Query: {
        books: (root, { search }) => {
            if (search) {
                return Book.find({ $text: { $search: search } }).sort({rating: 'desc'});
            } else {
                return Book.find().sort({rating: 'desc'});
            }
        },

        book: (root, { id }) => {
            return Book.findById(id);
        },
    },

    Mutation: {
        addBook: (root, body) => {
            return Book.create(body);
        },

        like: (root, { id }) => {
            return Book.findByIdAndUpdate(
                id,
                { $inc: { rate: 1 }},
                { new: true, runValidators: true });
        },

        dislike: (root, { id }) => {
            return Book.findByIdAndUpdate(
                id,
                { $dec: { rate: -1 }},
                { new: true, runValidators: true });
        }
    }
};

export default resolvers;
