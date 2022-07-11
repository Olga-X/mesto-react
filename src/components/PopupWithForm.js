import React from "react";
import closePath from "../images/close-icon.svg";
function PopupWithForm({
  name,
  title,
  renderBtnText,
  children,
  isOpen,
  onClose,
}) {
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <>
      <div
        className={`popup popup_${name}` + (isOpen && " popup_opened")}
        onMouseDown={(event) =>
          event.target === event.currentTarget && onClose()
        }
      >
        <div className="popup__container">
          <button className="popup__close" type="button">
            <img
              className="popup__close-image"
              src={closePath}
              alt="Закрыть"
              onClick={onClose}
            />
          </button>
          <h3 className="popup__title">{title}</h3>
          <form
            action="#"
            className="form"
            name={name}
            id="editPopupForm"
            method="get"
            noValidate
          >
            {children}
            <button type="submit" className="button form__submit">
              {renderBtnText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
