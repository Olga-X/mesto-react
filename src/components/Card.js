function Card({ card, name, link, count, onCardClick }) {
    function handleClick() {
      {
        onCardClick(card);
      }
    }
  
    return (
      <>
       <section class="еlements">
      <ul className="еlements__container">
 <li className="еlement">
    <img className="еlement__image"
     src={link}
     alt={name}
     onClick={handleClick}
      />
    <div className="еlement__item">
    <h2 className="еlement__title">{name}</h2> 
    <div className="element__likes">
    <button className="еlement__like" type="button"></button> 
    <span className="еlement__like-counter">{count}</span>
  </div>
    <button className="element__btn-trash" type="button"></button> 
  </div>
  </li>
  </ul>
  </section>
</>
  );
}

export default Card;