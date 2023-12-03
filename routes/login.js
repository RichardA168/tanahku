const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../dbConfig');

const login = express.Router();

login.post('/', (req, res) => {
    const sql = "SELECT * FROM `users-tanahku` WHERE `email` = ?";
    db.query(sql, [req.body.email], async (err, data) => {
        if (err) {
            return res.json("error");
        }
        if (data.length > 0) {
            const match = await bcrypt.compare(req.body.password, data[0].password);
            if (match) {
                return res.json("Login Success");
            } else {
                return res.json("Login Failed");
            }
        } else {
            return res.json("Failed");
        }
    })
});

module.exports = login;
