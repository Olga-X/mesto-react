import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({
    isOpen,
    onClose,
    onAddCard,
    isLoading,
  }) {
    const [values, setValues] = useState({ name: "", link: "" });

    useEffect(() => {
      setValues({ name: "", about: "" });
    }, [isOpen]);
  
    function handleChange(evt) {
      const { value, name } = evt.target;
      setValues({ ...values, [name]: value });
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
      onAddCard(values);
    }
  
    return (
      <PopupWithForm
      title="Новое место"
      name="form_add-card"
      isOpen={isOpen}
      onClose={onClose}
      renderBtnText={"Создать"}
      handleEscClose={handleEscClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      loadingText="Сохранение..."
    >
      <input
        type="text"
        value={values.name || ""}
        name="name"
        id="place-input"
        placeholder="Название"
        className="form__input form__input_type_title"
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        required
      />
      <span className="form__error place-input-error"></span>
      <input
        type="url"
        value={values.link || ""}
        name="link"
        id="url-input"
        placeholder="Ссылка на картинку"
        className="form__input form__input_type_link"
        onChange={handleChange}
        required
      />
      <span className="form__error url-input-error"></span>
    </PopupWithForm>
      );
    }