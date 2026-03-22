import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getSidebarTopics } from '../utils/chatbotLogic';
import './Sidebar.css';

const Sidebar = ({ onTopicClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const topics = getSidebarTopics();

  const handleTopicClick = (topic) => {
    onTopicClick(topic.label);
    setIsOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Quick Topics</h2>
        </div>
        <nav className="sidebar-nav">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className="sidebar-topic"
              onClick={() => handleTopicClick(topic)}
            >
              <span className="topic-label">{topic.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
