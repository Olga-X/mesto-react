//import Card from "./Card";

function Main({
}) {
return (
<main className="content">
    <section className="profile">
      <div className="profile__avatar-container">
    <img className="profile__avatar" src="#" alt="Аватар" />
    <button className="profile__avatar-btn" type="button"></button>
  </div>
    <div className="profile__info">
      <h1 className="profile__title"></h1>
      <button className="profile__button-edit" type="button"></button>
      <p className="profile__text"></p>
    </div>
   <button className="profile__button-add" type="button"></button>
  </section>
   <section className="еlements">
    <ul className="еlements__container"></ul>
  </section>
  </main>
  );
}

export default Main;