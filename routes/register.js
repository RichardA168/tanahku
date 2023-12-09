const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const db = require('../dbConfig');

const register = express.Router();

register.post(
  '/',
  [
    body('name').notEmpty().withMessage('Nama tidak boleh kosong'),
    body('email').isEmail().withMessage('Email tidak valid'),
    body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ error: true, message: 'Validasi gagal', errors: errors.array() });
      }

      const { name, email, password } = req.body;

      const userCheckDataQuery = "SELECT * FROM `users-tanahku` WHERE `name` = ? OR `email` = ?";
      const userCheckDup = [name, email];

      db.query(userCheckDataQuery, userCheckDup, async (userCheckEmpty, userFoundDup) => {
        if (userCheckEmpty) {
          console.error(userCheckEmpty);
          return res.status(500).json({ error: "An error occurred" });
        }

        if (userFoundDup.length > 0) {
          return res.status(400).json({ error: true, message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const insertUserQuery = "INSERT INTO `users-tanahku` (`name`, `email`, `password`) VALUES (?, ?, ?)";
        const values = [name, email, hashedPassword];

        db.query(insertUserQuery, values, (err, data) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "An error occurred" });
          }
          return res.status(201).json({ error: false, message: "User Created" });
        });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  }
);

module.exports = register;