import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Room from "../components/Room";
import "./ChatSpeak.css";
import axios from "axios";
import Modal from "./Modal";

export default function Interview() {
  const {
    state: { topic, emoticon }, // topic 값 추출
  } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [wordcloudImageUrl, setWordcloudImageUrl] = useState(null);
  const [catImageUrl, setCatImageUrl] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const changeTopic = (newTopic) => {
    console.log("New Topic:", newTopic);
  };

  useEffect(() => {
    const fetchImagesUrl = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/get_images_url"
        );
        const wordcloudUrl = response.data.wordcloudUrl;
        const catUrl = response.data.catUrl;
        setWordcloudImageUrl(wordcloudUrl);
        setCatImageUrl(catUrl);
      } catch (error) {
        console.error(error);
      }
    };

    if (showModal) {
      fetchImagesUrl();
    }
  }, [showModal]);

  return (
    <div>
      <div className="ChatSpeakText">
        <div className="TextColor">Chat </div>Topic or Situation : {topic}{" "}
        {emoticon}{" "}
      </div>
      <br></br>
      <Room
        openModal={openModal}
        setShowModal={setShowModal}
        changeTopic={changeTopic}
      />
      {showModal && (
        <Modal closeModal={closeModal}>
          <div className="ImageContainer">
            {wordcloudImageUrl ? (
              <>
                <img
                  src={wordcloudImageUrl}
                  alt="Wordcloud"
                  className="WordcloudImage"
                />
              </>
            ) : (
              <p>Loading wordcloud image...</p>
            )}
            {catImageUrl ? (
              <>
                <img src={catImageUrl} alt="Cat" className="CatImage" />
              </>
            ) : (
              <p>Loading cat image...</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
