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
    rating: {
        type: Number,
        default: 0
    }
});

// Add indexing for records in DB
BookSchema.index({ '$**': 'text' });

export default model('Book', BookSchema);
