import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className={showModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3> Modal</h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
