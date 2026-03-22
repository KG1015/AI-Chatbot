# AI Career Coach

A simple and clean chatbot web application designed to help software engineers with career-related guidance like resume tips, interview preparation, and learning roadmaps.

---

## 🚀 Overview

This project is a full-stack web application where users can interact with a chatbot through a clean and intuitive interface. The goal of the project was to build something practical that can assist students and developers in their career journey.

The application focuses on providing structured and useful responses around common topics like:
- Resume building
- Interview preparation
- Learning paths (DSA, development)
- Internship guidance
- Career growth tips

---

## 💡 Why I Built This

I chose this project because:

- Career guidance is something every developer, especially a FRESHER needs
- It allowed me to build a real-world interactive application
- It helped me understand frontend + backend integration
- It demonstrates how to design a clean and usable UI
- It’s something practical that others can actually use

---

## ✨ Features

### UI/UX
- Clean and minimal interface
- Chat-based interaction
- Quick suggestion cards for common queries
- Sidebar with topic shortcuts
- Smooth scrolling and message flow

### Functional
- Real-time chat interaction
- Handles user queries dynamically
- Fallback responses if API fails
- Error handling for better user experience

---

## 🛠️ Tech Stack

- React (Frontend)
- JavaScript
- Vite
- CSS
- Vercel (Deployment)
- Serverless functions for backend

---

## 📂 Project Structure

api/
chat.js # Backend API handler

src/
components/ # UI components
utils/ # Chat logic
App.jsx # Main app
main.tsx # Entry point


---

## ⚙️ How It Works

1. User enters a message in the chat
2. Frontend sends request to `/api/chat`
3. Backend processes the request and returns response
4. Response is displayed in chat UI

If the backend fails, predefined responses are used as fallback.

---

## 🧪 How to Run Locally

```bash
git clone <your-repo-url>
cd ai-career-coach
npm install
npm run dev
