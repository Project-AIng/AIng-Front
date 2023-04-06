import React, { useState } from "react";
import Bot from "./Bot";

export default function Room() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  return (
    <div>
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
      </div>
      <div className="inputwrap">
        <Bot onMessage={addMessage} />
      </div>
    </div>
  );
}
