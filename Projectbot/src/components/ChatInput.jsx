import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chatinput">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <div className="send-icon" onClick={handleSubmit} role="button" tabIndex={0}>
        <FiSend size={18} />
      </div>
    </div>
  );
};

export default ChatInput;
