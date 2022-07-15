import connection from './connection.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

console.time('Clearing the database');
connection.once('open', async () => {
    await User.deleteMany();
    await Thought.deleteMany();
    console.timeEnd('Database cleared');
    process.exit(0);
});