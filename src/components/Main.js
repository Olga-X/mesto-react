import { useContext } from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  renderBtnText,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар"
            />
            <button
              className="profile__avatar-btn"
              type="button"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__text">{currentUser.about}</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="еlements">
          <ul className="еlements__container">
            {cards.map((item) => {
              return (
                <Card
                  key={item._id}
                  card={item}
                  name={item.name}
                  link={item.link}
                  count={item.likes.length}
                  onCardClick={onCardClick}
                  renderBtnText={renderBtnText}
                  onCardDelete={onCardDelete}
                  onCardLike={onCardLike}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
