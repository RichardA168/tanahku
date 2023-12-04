const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../dbConfig');

const login = express.Router();

login.post('/', (req, res) => {
    const sql = "SELECT * FROM `users-tanahku` WHERE `email` = ?";
    db.query(sql, [req.body.email], async (err, data) => {
        if (err) {
            return res.json("error");
        }
        if (data.length > 0) {
            const match = bcrypt.compareSync(req.body.password, data[0].password);
            if (match) {
                const token = jwt.sign({userId: data[0].id, userEmail: data[0].email}, process.env.JWT_SECRET, {expiresIn:'24h'});
                return res.json({ message: "Login Success", token });
            } else {
                return res.json("Login Failed");
            }
        } else {
            return res.json("Failed");
        }
    });
});

module.exports = login;
