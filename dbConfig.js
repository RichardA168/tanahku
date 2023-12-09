const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || '34.101.44.56',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'tanahku',
    database: process.env.DB_NAME || 'tanahku'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;