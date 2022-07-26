import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({
  name,
  link,
  count,
  onCardClick,
  onCardLike,
  onCardDelete,
  card,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Отображение кнопки корзины удаления
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__btn-trash ${
    isOwn ? "element__btn-trash_visible" : ""
  }`;

  // Определяем лайк, поставленный пользователем
  const isLiked = card.likes.some((item) => item._id === currentUser._id);
  const cardLikeButtonClassName = `еlement__like ${
    isLiked ? "еlement__like_active" : ""
  }`;

  // События клика
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <>
      <li className="еlement">
        <img
          className="еlement__image"
          src={link}
          alt={name}
          onClick={handleClick}
        />
        <div className="еlement__item">
          <h2 className="еlement__title">{name}</h2>
          <div className="element__likes">
            <button
              className={`element__like ${cardLikeButtonClassName}`}
              type="button"
              onClick={handleLikeClick}
            ></button>
            <span className="еlement__like-counter">{count}</span>
          </div>
          <button
            className={`element__btn-trash ${cardDeleteButtonClassName}`}
            type="button"
            onClick={handleDeleteClick}
          ></button>
        </div>
      </li>
    </>
  );
}

export default Card;
