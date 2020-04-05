import express from 'express';
import { config } from 'dotenv';
import routes from './routes';

const app = express();
// Initialize process.env variables
config({ path: './config/config.env' });

// Routes
routes(app);

// Run the server
app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));

