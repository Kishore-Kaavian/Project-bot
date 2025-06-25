import './ChatMessage.css'

const ChatMessage = ({ sender, text }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="bubble">{text}</div>
    </div>
  );
};

export default ChatMessage;
