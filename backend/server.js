import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("GemPath Backend Running ✅"));

app.listen(5000, () => console.log("Server running on port 5000"));
