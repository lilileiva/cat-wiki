const mongoose = require('mongoose');
require('dotenv').config();
const { DB_PASSWORD } = process.env;


async function connectDB() {
    try {
        const db = await mongoose.connect(`mongodb+srv://cat-wiki:${DB_PASSWORD}@cat-wiki.7mbrhbq.mongodb.net/cat-wiki?retryWrites=true&w=majority`)
        console.log('database is connected to', db.connection.db.databaseName);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectDB
}