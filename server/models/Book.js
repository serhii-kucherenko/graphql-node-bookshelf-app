import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Please, add a book title"]
    },
    author: {
        type: String,
        trim: true,
        required: [true, "Please, add a book author"]
    },
    description: {
        type: String,
        trim: true,
        required: [true, "Please, add a book description"]
    },
    coverImageLink: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "Please, use a valid URL with HTTP or HTTPS"
        ],
        required: [true, "Please, add a book cover image link"]
    },
    rating: {
        type: Number,
        default: 0
    }
});

// Add indexing for records in DB
BookSchema.index({ '$**': 'text' });

export default model('Book', BookSchema);
