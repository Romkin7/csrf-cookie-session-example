import express, { Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import CORS_OPTIONS from './config/corsOptions';

config();

const app = express();

const COOKIE_SECRET = process.env.COOKIE_SECRET;

app.set('port', process.env.port || 8080);
app.set('ip', process.env.IP || '127.0.0.1');

app.use(morgan('dev'));
app.use(express.json());
app.use(
    cors(CORS_OPTIONS),
);
app.use(cookieParser());

const PORT = app.get('port');
const IP = app.get('ip');
app.get("/", (req, res: Response) => {
    res.cookie('sessionId', '45454', {})
})
app.listen(PORT, IP, () => {
    console.log(`App is running on port ${PORT} and ip ${IP}...`);
});
