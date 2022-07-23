import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
}) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
    title="Обновить аватар"
    name="avatar"
    isOpen={isOpen}
    onClose={onClose}
    renderBtnText={"Сохранить"}
    onSabmit={handleSubmit}
    isLoading={isLoading}
    loadingText="Сохранение..."
    handleEscClose={handleEscClose}
  >
    <input
      type="url"
      name="avatar"
      id="avatar-input"
      placeholder="Ссылка на картинку"
      className="form__input form__input_type_link"
      required
      ref={avatarRef}
    />
    <span className="form__error avatar-input-error "></span>
  </PopupWithForm>
  );
}
