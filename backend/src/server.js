import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

// connect database
await connectDB();

// create express app
const app = express();
app.use(cors({
        origin: "http://localhost:5173"
    }));
// middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Backend Running Successfully"
    });
});
// start server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});