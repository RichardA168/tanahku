const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../dbConfig');

const login = express.Router();

login.post('/', (req, res) => {
    const sql = "SELECT * FROM `users-tanahku` WHERE `email` = ?";
    db.query(sql, [req.body.email], async (err, data) => {
        if (err) {
            return res.status(500).json({ error: true, message: "Internal Server Error" });
        }
        if (data.length > 0) {
            const match = bcrypt.compareSync(req.body.password, data[0].password);
            if (match) {
                const token = jwt.sign({ userId: data[0].id, userEmail: data[0].email },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' });

                const loginResult = {
                    userId: data[0].id,
                    name: data[0].name,
                    token: token
                };

                return res.status(201).json({ error: false, message: "Login Success", loginResult });
            } else {
                return res.status(401).json({ error: true, message: "Login Failed" });
            }
        } else {
            return res.status(404).json({ error: true, message: "User not found" });
        }
    });
});

module.exports = login;
