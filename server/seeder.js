import colors from 'colors';
import fs from 'fs';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import Book from './models/Book';

// Load env vars
config({ path: "./config/config.env" });

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const books = JSON.parse(
    fs.readFileSync(`${__dirname}/data/books.json`, "utf-8")
);

// Import into DB
const importData = async () => {
    try {
        await Book.create(books);

        console.log("Data Imported...".green.inverse);
        process.exit();
    } catch (ex) {
        console.error(ex);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await Book.deleteMany();

        console.log("Data Destroyed...".red.inverse);
        process.exit();
    } catch (ex) {
        console.error(ex);
    }
};

if (process.argv[2] === "--i") {
    importData();
} else if (process.argv[2] === "--d") {
    deleteData();
} else {
    console.log("No flags provided. Check your command.".red);
    process.exit(0)
}
