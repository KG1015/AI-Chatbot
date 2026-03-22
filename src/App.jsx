import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import InputBox from './components/InputBox';
import SuggestionCards from './components/SuggestionCards';
import Sidebar from './components/Sidebar';
import { getBotResponse } from './utils/chatbotLogic';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (userMessage) => {
    const newUserMessage = { text: userMessage, isUser: true };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    const loadingMessage = { text: 'Thinking...', isUser: false };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      // Call LLM API to get bot response
      const botReply = await getBotResponse(userMessage);
      setMessages((prev) => [...prev.slice(0, -1), { text: botReply, isUser: false }]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages((prev) => [...prev.slice(0, -1), {
        text: "Sorry, I encountered an issue. Please try again.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (text) => {
    handleSendMessage(text);
  };

  const handleTopicClick = (topic) => {
    handleSendMessage(topic);
  };

  return (
    <div className="app">
      <Sidebar onTopicClick={handleTopicClick} />

      <main className="main-content">
        {messages.length === 0 ? (
          <SuggestionCards onCardClick={handleCardClick} />
        ) : (
          <ChatContainer messages={messages} />
        )}
        <InputBox onSendMessage={handleSendMessage} disabled={isLoading} />
      </main>
    </div>
  );
}

export default App;
