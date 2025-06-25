import ChatWindow from '../components/ChatWindow';
import './ChatPage.css';

const ChatPage = () => {
  return (
   <div className="chat-page">
  <div className="chat-header">
    <h1 className="chat-title">
      <img src="/Rocket.png" alt="Rocket" className="chat-icon" />
      Quick HR
    </h1>
    <p className="chat-subtitle">Smarter conversations Faster resolutions</p>
  </div>
  <ChatWindow />
</div>

  );
};

export default ChatPage;
