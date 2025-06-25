import { useEffect, useRef, useState } from 'react';
import { sendMessage } from './api/chatApi';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Loader from './Loader';
import doodleBackground from '../assets/doodleBackground.jpg';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (userText) => {
    if (!userText.trim()) return;
    
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await sendMessage(userText);
      setMessages((prev) => [...prev, { sender: 'bot', text: res.reply }]);
    } catch {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error fetching response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="chat-messages">
        {!hasInteracted && (
          <div className="welcome-container" style={{ backgroundImage: `url(${doodleBackground})` }}>
            <div className="welcome-message">
              <h2>Welcome!</h2>
              <p>How can I help you today?</p>
            </div>
          </div>
        )}
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <Loader />}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;