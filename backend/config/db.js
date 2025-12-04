import mysql from "mysql2/promise";
import dotenv from "dotenv";

const host = process.env.DATABASE_HOST;
const database = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;

const pool = mysql.createPool({
    host: host,
    database: database,
    user: user,
    password: "", 
});

export default pool;