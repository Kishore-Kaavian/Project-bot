import { useState, useEffect } from 'react';
import ChatWindow from '../components/ChatWindow';
import './ChatPage.css';

const ChatPage = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="chat-page">
      {/* Intro Header */}
      {!hasStarted && (
        <div className="chat-intro">
          <h1 className="chat-title">
            <img src="/Rocket.png" alt="Rocket" className="chat-icon" />
            QuickHR
          </h1>
          <p className="chat-subtitle">Smarter conversations Faster resolutions</p>
        </div>
      )}

      {/* Chat Window */}
      <ChatWindow onChatStart={() => setHasStarted(true)} />
    </div>
  );
};

export default ChatPage;
