import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("GemPath Backend Running ✅"));

app.post("/api/generate", async (req, res) => {
  const { goal, duration } = req.body;
  const prompt = `
  Generate a ${duration}-week learning roadmap for ${goal}.
  Give each week with 2-3 bullet points in simple text.`;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      { contents: [{ parts: [{ text: prompt }] }] },
      { headers: { "Content-Type": "application/json" }, params: { key: process.env.GEMINI_API_KEY } }
    );

    const text = response.data.candidates[0].content.parts[0].text;
    res.json({ result: text });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Gemini API error" });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
