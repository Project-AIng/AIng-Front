import React from "react";
import Topic from "../components/Topic";
import "./TopicChoice.css";

export default function TopicChoice() {
  return (
    <>
      <h1>주제를 선택해주세요!</h1>
      <div className="TopicChoiceContainer">
        <Topic id="1" topic="movie" emoticon="📽️" />
        <Topic id="2" topic="childhood" emoticon="👧🏻" />
        <Topic id="3" topic="music" emoticon="🎧" />
        <Topic id="4" topic="fashion" emoticon="🛍️" />
        <Topic id="5" topic="food" emoticon="🍚" />
        <Topic id="6" topic="love " emoticon="💓" />
      </div>
    </>
  );
}
