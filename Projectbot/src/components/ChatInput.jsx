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

  return (
    <div className="chatinput">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit(); // Enter key also works
        }}
      />
      <div className="send-icon" onClick={handleSubmit} title="Send">
        <FiSend size={20} />
      </div>
    </div>
  );
};

export default ChatInput;
