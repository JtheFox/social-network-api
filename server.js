import express from 'express';
import db from './config/connection';
import routes from './routes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
    .use(express.urlencoded({ extended: true }));