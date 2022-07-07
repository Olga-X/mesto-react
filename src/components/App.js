import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="page">
          <Header />
          <Main />

  <footer className="footer">
    <p className="footer__copyright">© 2022 Ольга Х. Mesto Russia </p>
  </footer>
  <div className="popup popup_form_edit-profile">
    <div className="popup__container">
      <button className="popup__close" type="button"> <img class="popup__close-image" src="./images/close-icon.svg" alt="Закрыть" /></button>
      <h3 className="popup__title">Редактировать профиль</h3>
      <form action="#" className="form" name="formProfile" id="editPopupForm" novalidate>
        <input type="text" name="name" id="name-input" placeholder="Имя" className="form__input form__input_type_name" minlength="2" maxlength="40" required />
        <span className="form__error name-input-error" ></span>
        <input type="text" name="about" id="about-input" placeholder="О себе" className="form__input form__input_type_about" minlength="2" maxlength="200" required />
        <span className="form__error about-input-error"></span>
        <button type="submit"  className="button form__submit">Сохранить</button>
      </form> 
    </div>
  </div>
  <div className="popup popup_form_add-card">
    <div className="popup__container">
      <button className="popup__close" type="button"> <img className="popup__close-image"/></button>
      <h3 class="popup__title">Новое место</h3>
      <form action="#" className="form" name="formCard" id="cardPopupForm" novalidate>
        <input type="text" name="name" id="place-input" placeholder="Название" className="form__input form__input_type_title" minlength="2" maxlength="30" required />
        <span class="form__error place-input-error"></span>
        <input type="url" name="link" id="url-input" placeholder="Ссылка на картинку" class="form__input form__input_type_link" required />
        <span className="form__error url-input-error"></span>
        <button type="submit"  className="button form__submit">Создать</button>
      </form> 
    </div>
  </div>
  <div className="popup popup_review-image">
    <div className="popup__content">
      <img src='#' alt='#'  className="popup__image" />
      <h3 className="popup__description"></h3>
      <button type="button" className="button popup__close">
        <img className="popup__close-image" />
      </button>
    </div>
  </div>
  <div className="popup popup_avatar">
    <div className="popup__container">
      <button className="popup__close" type="button"> <img className="popup__close-image" /></button>
      <h3 className="popup__title">Обновить аватар</h3>
      <form action="#" class="form form_avatar-edit" name="formAvatar" id="editAvatarForm" novalidate>
        <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
        <span className="form__error avatar-input-error "></span>
        <button type="submit"  className="button form__submit">Создать</button>
      </form>
    </div>
  </div>
  <div className="popup popup_delete">
    <div className="popup__container">
      <button className="popup__close" type="button"> <img className="popup__close-image" src="./images/close-icon.svg" alt = "Закрыть" /></button>
      <h3 className="popup__title">Вы уверены?</h3>
      <form action="#" className="form form_delete" novalidate>
      <button type="submit"  className="button form__submit">Да</button>
    </form>
  </div>
</div>
 <template className="card" id="card-template">
  <li className="еlement">
    <img className="еlement__image" src='#' alt='#'/>
    <div className="еlement__item">
    <h2 className="еlement__title"></h2> 
    <div className="element__likes">
    <button className="еlement__like" type="button"></button> 
    <span className="еlement__like-counter">0</span>
  </div>
    <button className="element__btn-trash" type="button"></button> 
  </div>
  </li>
 </template>
    </div>
  );
}

export default App;
