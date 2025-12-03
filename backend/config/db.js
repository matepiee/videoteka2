import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    database: "videoteka",
    user: "root",
    password: "",
});

export default pool;