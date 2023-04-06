import React, { useState } from "react";
import axios from "axios";

export default function Bot(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    const message = `You: ${input}`;
    props.onMessage(message);

    try {
      const response = await axios.post("http://localhost:5000/generate", {
        input_text: input,
      });

      const reply = `Bot: ${response.data.text}`;
      props.onMessage(reply);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <div className="input_chat">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ color: "black" }}
          className="textinput"
        />
        <button type="submit" style={{ color: "white" }} className="sendbtn">
          Send
        </button>
      </form>
    </div>
  );
}
