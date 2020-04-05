import Book from "../models/Book";

const resolvers = {
    Query: {
        books: (root, { search }) => {
            const sort = { likes: 'desc' };

            if (search) {
                return Book.find(partialSearchBookOptions(search)).sort(sort);
            } else {
                return Book.find().sort(sort);
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
                { $inc: { likes: 1 }},
                { new: true, runValidators: true });
        },

        dislike: (root, { id }) => {
            return Book.findOneAndUpdate(
                { _id: id, likes: { $gt: 0 } },
                { $inc: { likes: -1 }},
                { new: true, runValidators: true });
        }
    }
};

const partialSearchBookOptions = search => {
    const fields = [
        'title',
    ];

    const options = {};

    for(let field of fields) {
        options[field] = { $regex : `.*${search}.*`, $options: 'i' }
    }

    return options;
}

export default resolvers;
