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
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`.yellow.bold));

