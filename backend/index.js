// /server/index.js
import express from 'express';
// import OpenAI from 'openai';
import {GoogleGenAI} from '@google/genai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: message,
  });

    res.json({ reply: response.text });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'GenAI request request failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
