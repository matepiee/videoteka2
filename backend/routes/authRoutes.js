import express from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";
import { validateRegister, validateLogin } from "../middlewares/validation.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {

        const body = req.body;
        validateRegister(body);

        const hashedPassword = await argon2.hash(body.password);

        const conn = await pool.getConnection();

        const [newUser] = await conn.query(
            `
            INSERT INTO users (username, password, email_address)
            VALUES
            (?, ?, ?)
            `, [body.username, hashedPassword, body.email_address]
        );

        if (newUser.affectedRows === 0) {
            throw new Error("Failed to register user.");
        }

        pool.releaseConnection();

        res.status(200).json({ message: "User registered." });

    } catch (err) {

        console.log(err);

        if (err.message.includes("Invalid")) {
            res.status(400).json({ message: err.message });
            return;
        }
        res.status(500).json({ message: "Server error." });

    }
});

router.post("/login", async (req, res) =>{
    try {

        const body = req.body;
        validateLogin(body);

        const conn = await pool.getConnection();

        const[loginUser] = await conn.query(
            `
            SELECT *
            FROM users
            WHERE username LIKE ?
            `, [body.username]
        );

        if (loginUser.length !== 1) {
            throw new Error("Invalid username.");
        }
        
        const validPassword = await argon2.verify(loginUser[0].password, body.password);

        if (!validPassword) {
            throw new Error("Invalid password.");
        }


    } catch (err) {
        console.log(err);

        if (err.message.includes("Invalid")) {
            res.status(400).json({ message: err.message });
            return;
        }
        res.status(500).json({ message: "Server error." });
        
    }
});

export default router;