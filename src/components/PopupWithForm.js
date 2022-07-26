import React from "react";
import closePath from "../images/close-icon.svg";
function PopupWithForm({
  name,
  title,
  renderBtnText,
  isLoading,
  loadingText,
  children,
  isOpen,
  onClose,
  onSubmit,
  handleEscClose,
}) {
  React.useEffect(() => {
    if (isOpen === true) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen]);

  return (
    <>
      <div
        className={`popup popup_${name}` + (isOpen && " popup_opened")}
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
            onSubmit={onSubmit}
            method="get"
            noValidate
          >
            {children}
            <button type="submit" className="button form__submit">
            {isLoading ? loadingText : renderBtnText} 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
