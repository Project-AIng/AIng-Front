import React, { useState, useEffect } from "react";
import "./pages.css";
import RecommandedTopic from "../components/RecommandedTopic";
import axios from "axios";

const Modal = ({ closeModal, children, changeTopic }) => {
  const [recommandedTopics, setRecommandedTopics] = useState([]);

  useEffect(() => {
    fetchRecommandedTopics();
  }, []);

  const fetchRecommandedTopics = async () => {
    try {
      const response = await axios.get("http://localhost:5000/topic_recommand");
      setRecommandedTopics(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTopicChange = (newTopic) => {
    //changeTopic(newTopic);
    closeModal();
    window.location.reload(); // 페이지를 새로고침합니다.
  };

  const handleButtonClick = () => {
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content"></div>
        <div className="modal-title">채팅 분석 결과</div>
        {children}
        <div className="topic-container">
          <div className="topic-recommend-label">topic recommand</div>
          {recommandedTopics.map((topic, index) => {
            let emoticon = "";

            switch (topic) {
              case "Business":
                emoticon = "🧑🏻‍💼";
                break;
              case "Entertainment":
                emoticon = "🎤";
                break;
              case "Food":
                emoticon = "🍚";
                break;
              case "Graphics":
                emoticon = "🖼️";
                break;
              case "Medical":
                emoticon = "💊";
                break;
              case "Politics":
                emoticon = "🫱🏻‍🫲🏻";
                break;
              case "Space":
                emoticon = "🚀";
                break;
              case "Sport":
                emoticon = "🏊🏻";
                break;
              case "Technologies":
                emoticon = "⚡";
                break;
              default:
                emoticon = "";
                break;
            }

            return (
              <RecommandedTopic
                key={index}
                topic={topic}
                emoticon={emoticon}
                onClick={() => handleTopicChange(topic)}
              />
            );
          })}
          <button className="modal-close" onClick={handleButtonClick}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
