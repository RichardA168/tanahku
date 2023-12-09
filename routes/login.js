const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const db = require('../dbConfig');

const login = express.Router();

login.post(
  '/',
  [
    body('email').isEmail().withMessage('Email tidak valid'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ error: true, message: 'Validasi gagal', errors: errors.array() });
      }

      const sql = "SELECT * FROM `users-tanahku` WHERE `email` = ?";
      db.query(sql, [req.body.email], async (err, data) => {
        if (err) {
          return handleDatabaseError(err, res);
        }

        if (data.length === 0) {
          return res.status(404).json({ error: true, message: "Email belum terdaftar" });
        }

        const match = bcrypt.compareSync(req.body.password, data[0].password);
        if (match) {
          const token = jwt.sign(
            { userId: data[0].id, userEmail: data[0].email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
          );

          const loginResult = {
            userId: data[0].id,
            name: data[0].name,
            token: token
          };

          return res.status(201).json({ error: false, message: "Login Success", loginResult });
        } else {
          return res.status(401).json({ error: true, message: "Password salah" });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  }
);

function handleDatabaseError(err, res) {
  console.log('Error connecting to MySQL:', err);
  return res.status(500).json({ error: true, message: "Internal Server Error" });
}

module.exports = login;