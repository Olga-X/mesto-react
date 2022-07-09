import React from 'react';
import closePath from "../images/close-icon.svg";

function ImagePopup({isOpen, onClose, selectedCard}) {
    return (
      <>
<div className={`popup popup_review-image ${isOpen ? "popup_opened" : ""}`}>
    <div className="popup__content">
      <img className="popup__image"
        src={selectedCard.link}
        alt={selectedCard.name}
       />
      <h3 className="popup__description">{selectedCard.name}</h3>
      <button type="button" className="button popup__close" onClick={onClose}>
        <img className="popup__close-image" src={closePath} alt="Закрыть" />
      </button>
    </div>
  </div>
</>
  );
}

export default ImagePopup;