import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./components/Options/Options";
import YoutubeMusic from "./components/Options/YoutubeMusic";
import Quiz from "./components/Quiz/Quiz";

const config = {
  botName: "BingoJS",
  initialMessages: [
    createChatBotMessage(`Hi I'm BingoJS. I’m here to help you`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "music",
      widgetFunc: () => <YoutubeMusic />,
    },
    {
      widgetName: "SPoptions",
      widgetFunc: (props) => <Options {...props} />,
    },

    {
      widgetName: "Sp",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "what is the specialty to look for?",
            answer: "Node js MongoDB Reactjs Express Flask ",
            id: 1,
          },
        ],
      },
    },
  ],
};

export default config;
