# AI Career Coach

A beautiful, polished chatbot web application designed to help software engineers with career advice, interview preparation, resume tips, and learning roadmaps.

## Overview

This is a frontend-focused React application powered by OpenAI's GPT API to provide real, intelligent career coaching for software engineers. The app features a modern, ChatGPT-inspired interface that delivers practical, actionable advice on resumes, interviews, learning roadmaps, and career growth.

## Why This Theme?

The "AI Career Coach" concept was chosen because:

- **Highly Relevant**: Career guidance is a universal need for developers
- **Engaging Content**: Natural conversation topics that showcase the chatbot effectively
- **Practical Value**: Provides real, useful information to users
- **Beginner-Friendly**: Simple keyword detection makes the code easy to understand
- **Demonstrable**: Shows good UX design patterns without requiring complex AI integration

## Features

### UI/UX Highlights
- Modern, minimal design inspired by ChatGPT and Notion
- Smooth animations and transitions
- Responsive layout for mobile and desktop
- Interactive suggestion cards for quick starts
- Collapsible sidebar with topic shortcuts
- Real-time typing indicators
- Auto-scrolling chat container
- Elegant gradient accents and shadows

### Chatbot Capabilities
The chatbot intelligently responds to queries about:
- Resume writing and optimization
- Interview preparation (technical and behavioral)
- Learning roadmaps and DSA study plans
- Internship strategies
- Project ideas and portfolio building
- Salary and compensation insights
- Remote work opportunities
- LeetCode practice strategies

### Technical Features
- OpenAI GPT API integration for intelligent responses
- Intelligent fallback system when API is unavailable
- Real-time API error handling with graceful degradation
- Message history management
- Input validation and disabled states
- Clean component architecture
- Lightweight, frontend-focused implementation

## Project Structure

```
api/
└── chat.js                     # Vercel serverless function for OpenAI API

src/
├── components/
│   ├── ChatContainer.jsx       # Main chat display area
│   ├── ChatContainer.css
│   ├── MessageBubble.jsx       # Individual message component
│   ├── MessageBubble.css
│   ├── InputBox.jsx            # Message input with send button
│   ├── InputBox.css
│   ├── SuggestionCards.jsx     # Prompt cards for empty state
│   ├── SuggestionCards.css
│   ├── Sidebar.jsx             # Topic navigation sidebar
│   └── Sidebar.css
├── utils/
│   └── chatbotLogic.js         # Frontend API calls & fallback responses
├── App.jsx                     # Main app component
├── App.css
├── main.tsx                    # Entry point
└── index.css                   # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key (get one at [platform.openai.com](https://platform.openai.com))

### Setup API Key (Backend Only)

1. Get your OpenAI API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

2. Create or update the `.env` file in the project root:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Save the file. The key is used server-side only (in `api/chat.js`) and is never exposed to the client.

**Important**: The API key is NOT sent to the browser - it's only used on the backend Vercel function for security!

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-career-coach
```

2. Install dependencies:
```bash
npm install
```

3. Add your OpenAI API key to `.env` (see Setup API Key section above)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to the local URL shown in the terminal (typically `http://localhost:5173`)

## How to Use

1. **Start a Conversation**: Click any suggestion card or type your question in the input box
2. **Ask Questions**: Type queries about resumes, interviews, learning paths, or career advice
3. **Quick Topics**: Use the sidebar to quickly jump to specific career topics
4. **Natural Chat**: The bot responds with contextual advice based on keywords in your messages

### Example Queries
- "How do I improve my resume?"
- "Give me interview tips"
- "Create a DSA learning roadmap"
- "What projects should I build?"
- "How do I prepare for internships?"
- "Tell me about software engineer salaries"

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel will auto-detect the Vite configuration

5. **Add Environment Variable**: In the Vercel project settings, go to Settings → Environment Variables and add:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

6. Click "Deploy" and your app will be live in minutes!

**Security**: Your API key is only used server-side in the Vercel function and is never exposed to the client. The frontend calls `/api/chat` which securely handles the OpenAI request.

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Architecture: Secure Backend Integration

This app uses a **backend-first approach** for security:

1. **Frontend** (`src/`) - React components call `/api/chat` endpoint
2. **Backend API** (`api/chat.js`) - Vercel serverless function that:
   - Receives user message from frontend
   - Securely calls OpenAI API with server-side API key
   - Returns response to frontend
   - Handles errors and fallbacks

**Why This Matters**:
- API key never leaves the server
- No CORS issues with OpenAI API
- Scalable and secure for production
- Frontend fallback works if backend is down

## Technology Stack

- **React 18** - UI framework with hooks
- **JavaScript (ES6+)** - Frontend and backend
- **Vite** - Build tool and dev server
- **Vercel Functions** - Serverless backend for API
- **OpenAI API (gpt-4o-mini)** - LLM backend
- **CSS** - Component styling
- **Lucide React** - Icon library

## Code Philosophy

This project prioritizes:
- **Simplicity**: Easy to understand, no over-engineering
- **Readability**: Clear component structure and naming
- **Beginner-Friendly**: Perfect for learning React fundamentals
- **Modern Practices**: Hooks, functional components, clean architecture
- **UI Excellence**: Polished, production-ready interface

## Why This Architecture?

We moved the API key to the backend for critical security reasons:

1. **API Key Protection**: Keys never reach the browser, preventing theft and abuse
2. **CORS Bypass**: Backend functions proxy requests, avoiding browser CORS restrictions
3. **Rate Limiting**: Backend can implement per-user or global rate limits
4. **Error Handling**: Sensitive errors don't leak to clients
5. **Production Ready**: Follows industry best practices for API integration
6. **Scalability**: Vercel functions auto-scale with demand

The frontend still benefits from:
- **Intelligent Fallback**: Predefined responses if API fails
- **Zero Downtime**: Works without backend for demos
- **Learning Value**: Shows how to integrate LLMs securely in production apps

## Fallback System Explained

The app has a smart fallback mechanism for reliability:

1. **Primary Path**: Frontend calls `/api/chat` → Backend calls OpenAI with gpt-4o-mini
2. **API Error**: If OpenAI is down or rate-limited, predefined responses kick in automatically
3. **No Backend**: If backend is down, predefined responses work offline
4. **User Experience**: In all cases, user sees a helpful response within the loading delay

This ensures the app works even if the LLM API fails!

### How It Works Technically

**Frontend Flow** (`src/utils/chatbotLogic.js`):

```javascript
// Frontend calls secure backend endpoint
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage })
});

// If API fails, fallback to predefined responses
if (!response.ok) {
  return getFallbackResponse(userMessage);
}
```

**Backend Flow** (`api/chat.js`):

```javascript
// Backend securely calls OpenAI with server-side API key
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: message }],
    temperature: 0.7,
    max_tokens: 500
  })
});
```

## Future Enhancements

Potential improvements (not implemented to keep it simple):
- Chat history persistence (localStorage)
- Export conversation as PDF
- Voice input support
- Dark mode toggle
- Multiple LLM provider options (Claude, Cohere, etc.)
- Cost tracker for API usage

## Local Development

To test locally with the backend:

1. Add your API key to `.env`:
```
OPENAI_API_KEY=your_key_here
```

2. Start the dev server (includes both frontend and API):
```bash
npm run dev
```

3. The frontend will call `/api/chat` which works locally thanks to Vite's dev server proxy

## License

MIT License - Feel free to use this project for learning or as a portfolio piece!

## Author

Built with care as a demonstration of modern React UI/UX patterns, clean code practices, and API integration.
# AI-Chatbot
