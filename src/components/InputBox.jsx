import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './InputBox.css';

const InputBox = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="input-box-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about your software engineering career..."
          className="chat-input"
          disabled={disabled}
        />
        <button
          type="submit"
          className={`send-button ${disabled ? 'disabled' : ''}`}
          disabled={disabled || !input.trim()}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default InputBox;
