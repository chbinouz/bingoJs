class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();
    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hello") ||
      lowerCase.includes("goodmorning")
    ) {
      return this.actionProvider.handleGreeting();
    }
    if (lowerCase.includes("specialty")) {
      return this.actionProvider.handleQuiz();
    }
    if (lowerCase.includes("i am sad")) {
      return this.actionProvider.handlemusic();
    }
    if (
      lowerCase.includes("messageparser") ||
      lowerCase.includes("parse") ||
      lowerCase.includes("parser") ||
      lowerCase.includes("message parser")
    ) {
      return this.actionProvider.handleMessageParser();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
