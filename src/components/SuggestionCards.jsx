import React from 'react';
import { getSuggestionCards } from '../utils/chatbotLogic';
import './SuggestionCards.css';

const SuggestionCards = ({ onCardClick }) => {
  const cards = getSuggestionCards();

  return (
    <div className="suggestion-cards-container">
      <div className="empty-state-header">
        <h1 className="app-title">AI Career Coach</h1>
        <p className="app-subtitle">Ask anything about coding, interviews, or career growth</p>
      </div>
      <div className="suggestion-cards-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            className="suggestion-card"
            onClick={() => onCardClick(card.text)}
          >
            <span className="card-text">{card.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionCards;
