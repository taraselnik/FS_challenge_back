import * as dotenv from 'dotenv';
dotenv.config({path: './.env'});

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/Routes.js';


const URI = `${process.env.DATABASE_URL}`;

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(URI);

const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('DataBase connected...'))

app.use(cors());
app.use(express.json());
app.use('/api/', router);

app.listen(5000, () => console.log('Server up and running... port 5000'));

