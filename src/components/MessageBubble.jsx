import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`message-wrapper ${isUser ? 'user-message-wrapper' : 'bot-message-wrapper'}`}>
      <div className={`message-bubble ${isUser ? 'user-message' : 'bot-message'}`}>
        {!isUser && message === 'Thinking...' ? (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <p className="message-text">{message}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
