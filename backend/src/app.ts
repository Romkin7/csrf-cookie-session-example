import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import CORS_OPTIONS from './config/corsOptions';
import COOKIE from './config/cookie';

// Import api routes
import authRoutes from './routes/auth.routes';
import rolesRoutes from './routes/roles.routes';

// Create the express application
const app: Express = express();
const SESSION_SECRET = process.env.SESSION_SECRET;
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.set('trust proxy', 1); // trust first proxy
/* Set session and cookie to res.cookie() */
const cookie = new COOKIE({
    secure: process.env.ENV === 'production' ? true : false,
}).getCookie();
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie,
    }),
);
// Use routes
app.use(authRoutes);
app.use(rolesRoutes);

export default app;
