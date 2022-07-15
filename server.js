import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`API server running on localhost:${PORT}`));
});