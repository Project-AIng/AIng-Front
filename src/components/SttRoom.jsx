import React, { useState } from "react";
import "./Room.css";
import SttBot from "./SttBot";

export default function SttRoom({ startRecording, stopRecording }) {
  const [messages, setMessages] = useState([]);
  const [otherResults, setOtherResults] = useState([]);

  const handleNewMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  const handleNewOtherResult = (result) => {
    setOtherResults([...otherResults, result]);
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

        <SttBot
          onMessage={handleNewMessage}
          onOtherResult={handleNewOtherResult}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />
      </div>
      <div className="info">
        {otherResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}
