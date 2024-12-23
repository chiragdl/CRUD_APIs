import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from 'cors'; // Import cors

const app = express(); // Create the app instance

app.use(cors()); // Use cors middleware

// Middleware
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.Port || 5000;
const MONGOURL = process.env.MONGO_URL;

// Connect with MongoDB
mongoose.connect(MONGOURL).then(() => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
        console.log(`port is connected to ${PORT}`);
    });
}).catch((error) => console.log(error));

app.use("/api/user", route);