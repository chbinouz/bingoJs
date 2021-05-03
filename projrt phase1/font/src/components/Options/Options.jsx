import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "LinkedIn",
      handler: () => {
        window.open("https://www.linkedin.com/feed/");
      },
      id: 1,
    },
    {
      text: "Google",
      handler: () => {
        window.open("https://www.google.fr/");
      },
      id: 2,
    },
    {
      text: "Facebook",
      handler: () => {
        window.open("https://www.facebook.com/");
      },
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
