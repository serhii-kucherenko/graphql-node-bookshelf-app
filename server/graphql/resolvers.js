import mongoose from 'mongoose';
import Book from "../models/Book";

const resolvers = {
    Query: {
        books: async (root, { searchParams }) => {
            if (searchParams) {
                return await Book.find({ $text: { $search: searchParams } }).sort({rating: 'desc'});
            } else {
                return await Book.find().sort({rating: 'desc'});
            }
        },

        book: async (root, { id }) => {
            return await Book.findById(id);
        },
    },

    Mutation: {
        addBook: async (root, body) => {
            console.log(body);
            return await Book.create(body);
        },

        like: async (root, { id }) => {
            return await Book.findByIdAndUpdate(
                id,
                { $inc: { rate: 1 }},
                { new: true, runValidators: true });
        },

        dislike: async (root, { id }) => {
            return await Book.findByIdAndUpdate(
                id,
                { $dec: { rate: -1 }},
                { new: true, runValidators: true });
        }
    }
};

export default resolvers;
