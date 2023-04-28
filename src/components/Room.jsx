import React, { useState } from "react";
import Bot from "./Bot";
import "./Room.css";
export default function Room() {
  const [messages, setMessages] = useState([]);
  const [otherResults, setOtherResults] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  const addOtherResult = (result) => {
    setOtherResults((otherResults) => [...otherResults, result]);
  };

  return (
    <div className="parent-container">
      <div className="chatwrap">
        <div className="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.startsWith("You:") ? "user" : "bot"
              }`}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="inputwrap">
          <Bot onMessage={addMessage} onOtherResult={addOtherResult} />
        </div>
      </div>
      <div className="info">
        {otherResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}
