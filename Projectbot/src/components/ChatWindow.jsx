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
    console.log(res); // logs full response
    setMessages((prev) => [...prev, { sender: 'bot', text: res.response }]);
  } catch (error) {
    console.error('Error in handleSend:', error);
    setMessages((prev) => [...prev, { sender: 'bot', text: 'Oops something went wrong..' }]);
  } finally {
    setLoading(false);
  }
};


  return (
   <div className="chat-window">
  <div className="chat-messages">
    {messages.length === 0 && !loading && (
      <div className="welcome-message">
         <img src="/Rocket.png" alt="Rocket" className="chat-icon-doodle" />
      <h2>Welcome to <strong>QuickHR</strong>. How can I assist you today? </h2> 
      </div>
    )}
    {messages.map((msg, idx) => (
      <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
    ))}
    {loading && <Loader />}
    <div ref={messagesEndRef} />
  </div>

  <ChatInput onSend={handleSend} />
  <p className="chat-note"><strong>QuickHR</strong> can make mistakes due to Beta version</p>
</div>

  );
};

export default ChatWindow;
