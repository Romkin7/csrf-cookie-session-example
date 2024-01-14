import { config } from 'dotenv';
import app from './app';
import connectToMongoDB from './config/connectToMongoDB';

config();
connectToMongoDB();

app.set('port', process.env.port || 8080);
app.set('ip', process.env.IP || '127.0.0.1');

const PORT = app.get('port');
const IP = app.get('ip');

app.listen(PORT, IP, () => {
    console.log(`App is running on port ${PORT} and ip ${IP}...`);
});
