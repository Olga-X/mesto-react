import {useState, useEffect} from "react";

import Card from "./Card.js";
import api from "../utils/Api.js";

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    renderBtnText,
}) {
    const [userName, setUserName] = useState([]);
    const [userDescription, setUserDescription] = useState([]);
    const [userAvatar, setUserAvatar] = useState([]);
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
        Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userData, cardData]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
          setCards(cardData);
        });
      }, []);

    return (
        <>
<main className="content">
  <section className="profile">
    <div className="profile__avatar-container">
      <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
      <button className="profile__avatar-btn" type="button" onClick={onEditAvatar}>
      </button>
    </div>
    <div className="profile__info">
      <h1 className="profile__title">{userName}</h1>
      <button className="profile__button-edit" type="button" onClick={onEditProfile}>
      </button>
      <p className="profile__text">{userDescription}</p>
    </div>
   <button className="profile__button-add" type="button" onClick={onAddPlace}>
   </button>
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