import axios from "axios";
import { useState } from "react";
import "./css/Room.css";
import React from 'react';

export default function SttBot({ onMessage, onOtherResult, startRecording, stopRecording }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isStopped, setIsStopped] = useState(true);

  const handleSubmit = async (transcript) => {
    if (!transcript) {
      return;
    }

    const message = `You: ${transcript}`;
    onMessage(message);

    try {
      const response = await axios.post("http://localhost:5000/generate", {
        input_text: transcript,
      });

      const reply = `Bot: ${response.data.text}`;
      onMessage(reply);

      if (response.data.other_results) {
        onOtherResult(response.data.other_results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartRecording = () => {
    if (isRecording || !isStopped) {
      return; // 이미 녹음 중이거나 중지되지 않은 경우 무시
    }

    setIsRecording(true);
    setIsStopped(false);
    startRecording();
  };

  const handleStopRecording = async () => {
    if (!isRecording || isStopped) {
      return; // 녹음 중이 아니거나 이미 중지된 경우 무시
    }

    setIsRecording(false);
    setIsStopped(true);
    const transcript = await stopRecording();
    handleSubmit(transcript);
  };

  return (
    <div className="input_chat" style={{ textAlign: "center" }}>
      <form onSubmit={(e) => e.preventDefault()}>
      {isRecording && (
          <div className="alert" style={{ marginBottom: "10px",  
          color: "black",fontWeight:"bold", padding: "5px", }}>
            Recording..
          </div>
        )}
        <button onClick={handleStartRecording} type="button" 
        style={{  backgroundColor: isStopped ? "white" : "black", 
        color: isStopped ? "black" : "white",marginRight: "20px",width: "75px",
        height: "40px",border: "1.5px solid black",fontWeight: "bold",
        pointerEvents: isStopped ? "auto" : "none"}}>
          🔴REC
        </button>
        <button onClick={handleStopRecording} type="button" 
        style={{ backgroundColor: isStopped ? "black" : "white", 
        color: isStopped ? "white" : "black",width: "75px", height: "40px",
        border: "1.5px solid black",fontWeight: "bold",pointerEvents: isStopped ? "none" : "auto" }}>
          🟥STOP
        </button>
      </form>

      
    </div>

    
  );
}
