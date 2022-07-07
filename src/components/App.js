import React from "react";
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
//import PopupWithForm from "PopupWithForm.js"

function App() {

  return (
    <div className="page">
     <Header />
     <Main />
     <Footer />

     
 <template className="card" id="card-template">
  <li className="еlement">
    <img className="еlement__image" src='#' alt='#' />
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