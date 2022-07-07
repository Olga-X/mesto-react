import logoPath from "../images/logo.svg";

function Header() {
    return ( 
      <header className = "header">
        <img className = "header__logo"
        src = { logoPath }
        alt = "Место Россия" />
      </header>
    );
}
export default Header;