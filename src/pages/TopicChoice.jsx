import React from "react";
import Topic from "../components/Topic";
import "./TopicChoice.css";

export default function TopicChoice() {
  return (
    <>
      <h1>어떤 주제로 대화할까요?</h1>
      <div className="TopicChoiceContainer">
        <Topic id="1" topic="Business" emoticon="🧑🏻‍💼" />        
        <Topic id="2" topic="Entertainment" emoticon="🎤" />
        <Topic id="3" topic="Food" emoticon="🍚" />
        <Topic id="4" topic="Graphics" emoticon="🖼️"/>
        <Topic id="5" topic="Medical" emoticon="💊" />
        <Topic id="6" topic="Politics" emoticon="🫱🏻‍🫲🏻" />
        <Topic id="7" topic="Space" emoticon="🚀" />
        <Topic id="8" topic="Sport" emoticon="🏊🏻" />
        <Topic id="9" topic="Technologie" emoticon="⚡" />
        <Topic id="10" topic="Free Topic" emoticon="🧐" />
      </div>
    </>
  );
}