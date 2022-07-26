import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  handleEscClose
}) {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({ name: "", about: "" });

  useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen]);

  function handleChange(evt) {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onUpdateUser({
      name:  values.name,
      about: values.about
    });
  }
  return (
    <PopupWithForm
        title="Редактировать профиль"
        name="form_edit-profile"
        isOpen={isOpen}
        onClose={onClose}
        renderBtnText={"Сохранить"}
        handleEscClose={handleEscClose}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        loadingText="Сохранение..."
      >
        <input
          type="text"
          value={values.name || ""}
          name="name"
          id="name-input"
          placeholder="Имя"
          className="form__input form__input_type_name"
          minLength="2"
          maxLength="40"
          onChange={handleChange}
          required
        />
        <span className="form__error name-input-error"></span>
        <input
          type="text"
          value={values.about || ""}
          name="about"
          id="about-input"
          placeholder="О себе"
          className="form__input form__input_type_about"
          minLength="2"
          maxLength="200"
          onChange={handleChange}
          required
        />
        <span className="form__error about-input-error"></span>
      </PopupWithForm>
  );
};