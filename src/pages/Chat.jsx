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
  const [imageUrl, setImageUrl] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageResponse = await axios.get(
          "http://localhost:5000/get_image",
          { responseType: "blob" }
        );
        const imageUrl = URL.createObjectURL(imageResponse.data);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    if (showModal) {
      fetchImage();
    }
  }, [showModal]);
  return (
    <div>
      <div className="ChatSpeakText">
        <div className="TextColor">Chat </div>Topic or Situation : {topic}{" "}
        {emoticon}{" "}
      </div>
      <br></br>
      <Room openModal={openModal} setShowModal={setShowModal} />
      {showModal && (
        <Modal closeModal={closeModal}>
          {imageUrl ? (
            <img src={imageUrl} alt="Image" />
          ) : (
            <p>Loading image...</p>
          )}
        </Modal>
      )}
    </div>
  );
}
