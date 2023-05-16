import React, { useState } from "react";
import "./Topic.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Topic({ topic, emoticon }) {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);

  const handleMouseEnter = () => {
    setShowComponent(true);
  };

  const handleMouseLeave = () => {
    setShowComponent(false);
  };

  const handleInterviewClick = () => {
    axios
      .post("http://localhost:5000/set_topic", { topic })
      .then(() => {
        navigate("/Interview", { state: { topic } });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="parentContainer">
      <div
        className="TopicContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showComponent ? (
          <>
            <div>
              <div
                onClick={() => {
                  navigate("/Test", { state: { topic } });
                }}
              >
                TEST Go✍🏻
              </div>
              <br />
              <div onClick={handleInterviewClick}>인터뷰 Go🎤</div>
            </div>
          </>
        ) : (
          <>
            <p>{topic}</p>
            <div className="emoticon">{emoticon}</div>
          </>
        )}
      </div>
    </div>
  );
}
