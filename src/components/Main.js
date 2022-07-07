function Main() {
    function handleEditProfileClick() {
    const profilePopup = document.querySelector('.popup_form_edit-profile');
    profilePopup.classList.add("popup_opened");
    }

    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector(".popup_avatar");
        popupAvatar.classList.add("popup_opened");
      }

      function handleAddCardClick() {
        const cardPopup = document.querySelector(".popup_form_add-card");
        cardPopup.classList.add("popup_opened");
      }
    return (
        <>

<main classNameName="content">
    <section className="profile">
      <div className="profile__avatar-container">
    <img className="profile__avatar" src="#" alt="Аватар"/>
    <button className="profile__avatar-btn" type="button" onClick={handleEditAvatarClick}></button>
  </div>
    <div className="profile__info">
      <h1 className="profile__title"></h1>
      <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
      <p className="profile__text"></p>
    </div>
   <button className="profile__button-add" type="button" onClick={handleAddCardClick}></button>
  </section>
   <section className="еlements">
    <ul className="еlements__container"></ul>
  </section>
  </main>
  </>
    );
}

export default Main;