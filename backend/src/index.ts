import express from "express";
import cors from "cors";
import notesRouter from "./routes/notesRoutes.ts";
import { connectDB } from "./config/db.ts";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.ts";
import path, { dirname, } from "path";
import { fileURLToPath } from "url";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middlewares
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin: "http://localhost:5173"
    }));
}

app.use(express.json());
app.use(rateLimiter);

// routes
app.use("/notes", notesRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));
}

// Connecting database
await connectDB();

app.listen(PORT, () => {
    console.log(`Port started Listening on port ${PORT}`);
})