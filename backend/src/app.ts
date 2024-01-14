import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import CORS_OPTIONS from './config/corsOptions';
// Import api routes
import authRoutes from './routes/auth.routes';
import rolesRoutes from './routes/roles.routes';

// const COOKIE_SECRET = process.env.COOKIE_SECRET;

// Create the express application
const app: Express = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(CORS_OPTIONS));
// Assign controllers to routes
app.use(authRoutes);
app.use(rolesRoutes);

export default app;
