import React from "react";
import closePath from "../images/close-icon.svg";

function ImagePopup({ isOpen, onClose, card, handleEscClose }) {
  React.useEffect(() => {
    if (isOpen === true) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen]);

  return (
    <>
      <div
        className={`popup popup_review-image ${
          card.name ? "popup_opened" : ""
        }`}
      >
        <div className="popup__content">
          <img className="popup__image" src={card.link} alt={card.name} />
          <h3 className="popup__description">{card.name}</h3>
          <button
            type="button"
            className="button popup__close"
            onClick={onClose}
          >
            <img className="popup__close-image" src={closePath} alt="Закрыть" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
