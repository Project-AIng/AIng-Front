import React from "react";
import { useLocation } from "react-router-dom";
import Room from "../components/Room";
import "./ChatSpeak.css";

export default function Interview() {
  const {state: { topic, emoticon}, // topic 값 추출
  } = useLocation();
  
  return (
    <div>
      <div className="ChatSpeakText">
        <div className="TextColor">Chat </div>Topic or Situation : {topic} {emoticon} </div>
      <br></br>
      <Room />
    </div>
  );
}