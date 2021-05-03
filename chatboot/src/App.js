import "./App.css";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
function App() {
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="App"
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        saveMessages={saveMessages}
        messageHistory={loadMessages()}
      />
    </div>
  );
}

export default App;
