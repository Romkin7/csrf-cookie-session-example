import { CorsOptions } from "cors";

const CORS_OPTIONS: CorsOptions = {
    origin: 'http://127.0.0.1:3000',
    credentials: true,
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['']
};

export default CORS_OPTIONS;
