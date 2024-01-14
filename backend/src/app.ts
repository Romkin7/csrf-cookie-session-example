import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import CORS_OPTIONS from './config/corsOptions';
// Import api routes
import authRoutes from './routes/auth.routes';
import rolesRoutes from './routes/roles.routes';
import COOKIE from './config/cookie';

// const COOKIE_SECRET = process.env.COOKIE_SECRET;

// Create the express application
const app: Express = express();
const cookie = new COOKIE({}).getCookie();
const SESSION_SECRET = process.env.SESSION_SECRET;
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.set('trust proxy', 1); // trust first proxy
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie,
    }),
);
// Assign controllers to routes
app.use(authRoutes);
app.use(rolesRoutes);

export default app;
