import React from 'react';
import closePath from "../images/close-icon.svg";
function PopupWithForm({ name, title, titleButton, children, isOpen, onClose }) {

    React.useEffect(() => {
        const  handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            onClose();
        }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  });
  
return (
    <>
 <div className={`popup popup_${name}` + (isOpen && ' popup_opened')}
 onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
 <div className="popup__container">
   <button className="popup__close"
    type="button">
         <img className="popup__close-image" src={closePath} alt="Закрыть"
         onClick={onClose} />
         </button>
   <h3 className="popup__title">{title}</h3>
   <form 
   action="#" 
   className="form" 
   name={name} 
   id="editPopupForm" 
   method="get" 
   novalidate>
    {children}
     <button type="submit" className="button form__submit">{titleButton}</button>
   </form> 
 </div>
</div>
</>
  );
}

export default PopupWithForm;