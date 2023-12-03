const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../dbConfig');

const register = express.Router();

register.post('/', async (req, res) => {
    try {
        
        const userCheckDup = "SELECT * FROM `users-tanahku` WHERE `name` = ? OR `email` = ?";
        const userCheckData = [req.body.name, req.body.email];

        db.query(userCheckDup, userCheckData, async (userFoundDup, userFoundData) => {
            if (userFoundDup) {
                console.error(userFoundDup);
                return res.json("error");
            }

            if (userFoundData.length > 0) {
                return res.json("Username or email already exists");
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
                    return res.json("error");
                }
                return res.json("Register Success");
            });
        });
    } catch (error) {
        console.error(error);
        return res.json("error");
    }
});

module.exports = register;
