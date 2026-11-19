import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";

dotenv.config();


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}));
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The Server is running correctly on port ${PORT}`);
});