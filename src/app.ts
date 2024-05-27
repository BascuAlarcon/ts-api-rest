import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';

import dbMongo from './config/mongo';

const PORT = process.env.PORT || '3000';
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

try {
    dbMongo().then(() => console.log('MongoDB Connection is Ok'));
} catch (e) {
    console.log(e);
}

app.listen(PORT, () => console.log(`PORT ${PORT} is ok`));