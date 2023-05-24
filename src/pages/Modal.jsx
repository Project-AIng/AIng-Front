import React from "react";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
