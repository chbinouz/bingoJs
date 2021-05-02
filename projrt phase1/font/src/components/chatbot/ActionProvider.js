
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    
    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
    handleGreeting = () => {
      const messages = this.createChatBotMessage(" What's your ID", {
        withAvatar: true,
      });
      this.addMessageToBotState(messages);
    };
    handleQuiz = () => {
      const messages = this.createChatBotMessage(
        "what is the specialty to look for?",
        {
          widget: "Sp",
          withAvatar: true,
        }
      );
      this.addMessageToBotState(messages);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage("Ask me Again", {
        withAvatar: true,
      });
      this.addMessageToBotState(message);
    };
    handlemusic = () => {
      const message = this.createChatBotMessage(
        "Take a break and listen to music",
        {
          widget: "music",
          withAvatar: true,
        }
      );
      this.addMessageToBotState(message);
    };
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }
  
  export default ActionProvider;
  