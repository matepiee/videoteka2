import express from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.BACKEND_PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

app.use("/", authRoutes);

app.listen(PORT, () => {
    console.log(`Server started on: ${PORT}.`);
})