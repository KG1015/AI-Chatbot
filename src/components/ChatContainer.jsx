import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import './ChatContainer.css';

const ChatContainer = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg.text} isUser={msg.isUser} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;
