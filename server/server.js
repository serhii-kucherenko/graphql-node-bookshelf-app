import colors from 'colors';
import express from 'express';
import { config } from 'dotenv';
import connectDB from "./config/db";
import middleware from './middleware';
import routes from './routes';

const app = express();
// Initialize process.env variables
config({ path: './config/config.env' });

// Connect to Db
connectDB();

// Middleware
middleware(app);

// Routes
routes(app);

// Run the server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});
