import { useState } from 'react';
import './ChatInput.css';


const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="chatinput">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
