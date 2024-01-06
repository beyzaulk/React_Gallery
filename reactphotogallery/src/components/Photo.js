import React, { useState } from "react";

function Photo({ photographer, src }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pic">
      <div className="modal" style={{ display: modalOpen ? "block" : "none" }}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-content" src={src} alt="Görsel" />
      </div>
      <a
        href={src}
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        <img src={src} alt="Photo" />
      </a>
      <h1 className="photo-info">
        Photo by <i>{photographer}</i>
      </h1>
    </div>
  );
}

export default Photo;
