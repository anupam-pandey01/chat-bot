# 💬 AI Chatbot (Google GenAI)

An intelligent chatbot powered by **Google Generative AI (Gemini)**, built using a **React** frontend and **Node.js** backend. Designed for interactive and real-time AI conversations.

---

## 📌 Features

- Real-time chat interface
- Powered by Google GenAI (Gemini model)
- React-based modern frontend
- Node.js/Express backend handling requests
- CORS enabled for local development
- Easily extendable for future features

---

## 🛠️ Tech Stack

### Frontend
- React
- HTML, CSS (or Tailwind/Bootstrap)
- Axios (for API requests)

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- Google Generative AI SDK (`@google/generative-ai`)

---

## 🔑 Setup: Google GenAI

1. Go to [Google AI Studio](https://makersuite.google.com/app) or [Google Cloud Console](https://console.cloud.google.com/)
2. Generate an API key for the **Generative Language API**
3. Enable billing if required
4. In your backend project, create a `.env` file and add:

```env
API_KEY=your_api_key_here
