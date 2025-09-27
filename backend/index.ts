import express from "express";
import notesRouter from "./src/routes/notesRoutes.ts";
import { connectDB } from "./src/config/db.ts";
import dotenv from "dotenv";
import rateLimiter from "./src/middleware/rateLimiter.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();


// middlewares
app.use(express.json());
app.use(rateLimiter);


// routes
app.use("/notes", notesRouter);

app.listen(PORT, () => {
    console.log(`Port started Listening on port ${PORT}`);
})