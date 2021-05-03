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
      if(lowerCase.includes("go to upload cv")){
        window.location.replace("/hr/hr/uploadCv")
        return this.actionProvider.handleDefault()
      }
      if(lowerCase.includes("go to linkedin profiles")){
        window.location.replace("/hr")
        return this.actionProvider.handleDefault()
      }
      if(lowerCase.includes("go to calendar")){
        window.location.replace("/hr/Calendar")
        return this.actionProvider.handleDefault()
      }
      if(lowerCase.includes("go to join chat")){
        window.location.replace("/hr/join")
        return this.actionProvider.handleDefault()
      }

      if(lowerCase.includes("go to configure scrapping")){
        window.location = "/admin/scrapping"
        return this.actionProvider.handleDefault()
      }

      if(lowerCase.includes("go to configure accounts")){
        window.location = "/admin/"
        return this.actionProvider.handleDefault()
      }

      return this.actionProvider.handleDefault();
    };
  }
  
  export default MessageParser;
  