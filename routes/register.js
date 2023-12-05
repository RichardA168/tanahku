const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../dbConfig');
const authToken = require('../middleware/auth');

const register = express.Router();

register.post('/', async (req, res) => {
    try {
        
        const userCheckDup = "SELECT * FROM `users-tanahku` WHERE `name` = ? OR `email` = ?";
        const userCheckData = [req.body.name, req.body.email];

        db.query(userCheckDup, userCheckData, async (userFoundDup, userFoundData) => {
            if (userFoundDup) {
                console.error(userFoundDup);
                return res.status(500).json({ error: "An error occurred" });
            }

            if (userFoundData.length > 0) {
                return res.status(400).json("Username or email already exists");
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const sql = "INSERT INTO `users-tanahku` (`name`, `email`, `password`) VALUES (?, ?, ?)";
            const values = [
                req.body.name,
                req.body.email,
                hashedPassword
            ];

            db.query(sql, values, (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "An error occurred" });
                }
                return res.status(201).json({ message: "Register Success" });
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred" });  
    }
});

module.exports = register;
