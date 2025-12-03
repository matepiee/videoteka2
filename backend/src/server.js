import express from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", authRoutes);

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server started on: ${PORT}.`);
})