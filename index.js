const express = require('express');
const cors = require('cors');
const register = require('./routes/register');
const login = require('./routes/login');
require('dotenv').config();
const db = require('./dbConfig');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register);
app.use('/login', login);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Node berhasil dinyalakan di port ${PORT}!`);
});
