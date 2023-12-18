const express = require('express');
const cors = require('cors');
const register = require('./routes/register');
const login = require('./routes/login');
const authToken = require('./middleware/auth');
require('dotenv').config();
const db = require('./dbConfig');

const datatanah = require('./routes/datatanah');
const datatanaman = require('./routes/datatanaman');
const tanahtanaman = require('./routes/tanahtanaman');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register);

app.use('/protected-routes', authToken, (req, res) => {
    res.json({ message: 'This route is protected.' });
});
app.use('/login', login);

app.use('/tanaman',datatanaman);
app.use('/tanaman/:id_tanaman',datatanaman);

app.use('/tanah/',datatanah);
app.use('/tanah/:id_tanah',datatanah);

app.use('/kecocokan/',tanahtanaman);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Node berhasil dinyalakan di port ${PORT}!`);
});
