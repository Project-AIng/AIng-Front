import React from "react";
import { useLocation } from "react-router-dom";
import Room from "../components/Room";
export default function Interview() {
  const {
    state: { topic }, // topic 값 추출
  } = useLocation();
  return (
    <div className="text-black">
      {topic}에 대해서 인터뷰 해보자
      <br></br>
      Interview PAGEs
      <Room />
    </div>
  );
}
