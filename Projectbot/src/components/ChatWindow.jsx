import { useEffect, useRef, useState } from 'react';
import { sendMessage } from './api/chatApi';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import Loader from './Loader';


import './ChatWindow.css'

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (userText) => {
    if (!userText.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await sendMessage(userText);
      setMessages((prev) => [...prev, { sender: 'bot', text: res.reply }]);
    } catch {
      setMessages((prev) => [...prev, { sender: 'bot', text: '❌ Error fetching response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
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
