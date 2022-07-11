import { useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        renderBtnText={"Сохранить"}
      >
        <input
          type="url"
          name="avatar"
          id="avatar-input"
          placeholder="Ссылка на картинку"
          className="form__input form__input_type_link"
          required
        />
        <span className="form__error avatar-input-error "></span>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="form_edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        renderBtnText={"Сохранить"}
      >
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          className="form__input form__input_type_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__error name-input-error"></span>
        <input
          type="text"
          name="about"
          id="about-input"
          placeholder="О себе"
          className="form__input form__input_type_about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="form_add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        renderBtnText={"Создать"}
      >
        <input
          type="text"
          name="name"
          id="place-input"
          placeholder="Название"
          className="form__input form__input_type_title"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__error place-input-error"></span>
        <input
          type="url"
          name="link"
          id="url-input"
          placeholder="Ссылка на картинку"
          className="form__input form__input_type_link"
          required
        />
        <span className="form__error url-input-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
