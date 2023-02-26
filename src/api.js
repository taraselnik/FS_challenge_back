import * as dotenv from 'dotenv';
dotenv.config({path: './.env'});

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/Routes.js';
// import MedianModel from './models/MedianModel.js';
// import { getMedianf } from './utils/getMedian.js';
// import serverless from 'serverless-http'

const URI = `${process.env.DATABASE_URL}`;

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(URI);

const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('DataBase connected...'))

// await MedianModel.create(getMedianf(10))

// await MedianModel.deleteMany({})

app.use(cors());
app.use(express.json());
app.use('/.netlify/functions/', router);
// app.use(router);

app.listen(5000, () => console.log('Server up and running... port 5000'));

// export const handler = serverless(app);
