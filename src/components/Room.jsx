import React, { useState } from "react";
import axios from "axios";
import Bot from "./Bot";
import MessageInfo from "./MessageInfo";
import "./Room.css";

export default function Room() {
  function printIfNumericString(input) {
    if (input.startsWith("GRA")) {
      return input;
    }
    return null; // "GRA"
  }
  const [messages, setMessages] = useState([]);
  const [otherResults, setOtherResults] = useState([
    "GRAMMAR: 0 CLARITY: 0 COHERENCE: 0 VOCABULARY: 0 STRUCTURE: 0",
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
  };

  const addOtherResult = (result) => {
    const printedResult = printIfNumericString(result);
    if (printedResult) {
      setOtherResults([printedResult]); // Update to replace the existing result with the latest one
    }
  };

  const handleUserMessageClick = async (message) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/grammar_correction",
        { message }
      );
      setSelectedMessage({ apiResult: response.data, otherResults });
    } catch (error) {
      console.error(error);
    }
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
              } clickable`}
              onClick={() =>
                message.startsWith("You:")
                  ? handleUserMessageClick(message)
                  : null
              }
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
        <div className="other-results">
          {otherResults.map((result, index) => {
            const printedResult = printIfNumericString(result);
            return printedResult ? (
              <div key={index}>{printedResult}</div>
            ) : null;
          })}
        </div>
        {selectedMessage ? (
          <div className="info-container">
            <MessageInfo
              message={selectedMessage.apiResult}
              previousResults={selectedMessage.otherResults}
            />
            <button onClick={() => setSelectedMessage(null)}>Close</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}