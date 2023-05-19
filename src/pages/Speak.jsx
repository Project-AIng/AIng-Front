import React, { useState } from "react";
import { recordAudio } from "./recordAudio";
import SttRoom from "../components/SttRoom";
import { useLocation } from "react-router-dom";
import "./ChatSpeak.css";


export default function Speak() {
  const {
    state: { topic,emoticon }, // topic 값 추출
  } = useLocation();

  const [recorder, setRecorder] = useState(null);

  const startRecording = async () => {
    const newRecorder = await recordAudio();
    newRecorder.start();
    setRecorder(newRecorder);
  };

  const stopRecording = async () => {
    if (recorder) {
      const audio = await recorder.stop();
      return handleRecordingStopped(audio.audioBlob);
    }
    return "";
  };

  const handleRecordingStopped = async (audioBlob) => {
    const formData = new FormData();
    formData.append("audio_file", audioBlob);

    try {
      const response = await fetch("http://localhost:5000/transcribe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          console.error("Error: " + data.error);
        } else {
          const transcript = data.transcript;
          console.log("Transcript received:", transcript);
          return transcript;
        }
      } else {
        console.error("Failed to fetch the transcript");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    return "";
  };

  return (
    <div>
      <div className="ChatSpeakText">
      <div className="TextColor">SPEAK</div>Topic or Situation :{topic} {emoticon}</div>
      <br></br>
      <SttRoom startRecording={startRecording} stopRecording={stopRecording} />
    </div>
  );
}