const db = require('./config/connection.js');
const { User, Thought } = require('../models');

console.time('Clearing the database');
connection.once('open', async () => {
    await User.deleteMany();
    await Thought.deleteMany();
    console.timeEnd('Database cleared');
    process.exit(0);
});