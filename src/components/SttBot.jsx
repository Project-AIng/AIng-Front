import axios from "axios";
import "./Room.css";

export default function SttBot({ onMessage, onOtherResult, startRecording, stopRecording }) {
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

  const handleStopRecording = async () => {
    const transcript = await stopRecording();
    handleSubmit(transcript);
  };

  return (
    <div className="input_chat">
      <form onSubmit={(e) => e.preventDefault()}>
        <button onClick={startRecording} type="button" style={{ backgroundColor: "#0077cc", color: "white" }}>
          Start Recording
        </button>
        <button onClick={handleStopRecording} type="button" style={{ backgroundColor: "#0077cc", color: "white" }}>
          Stop Recording
        </button>
      </form>
    </div>
  );
}
