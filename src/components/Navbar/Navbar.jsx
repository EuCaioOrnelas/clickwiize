// CSS STYLES
import "./styles/navbar.css";

// ICONS
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  function menuShow() {
    let menuMobile = document.querySelector(".navigationMobile");
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
    } else {
      menuMobile.classList.add("open");
    }
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="https://i.im.ge/2023/10/04/Nf5w2f.ClickWiize-removebg-preview-1.png" />
          </div>
          <div className="navigation">
            <ul>
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
              <li>
                <a href="">Sobre Nós</a>
              </li>
              <li>
                <a href="">Fale Conosco</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menuMobile" onClick={menuShow}>
          <BiMenu size={40} className="menu" />
        </div>
      </nav>
      <div className="navigationMobile">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre Nós</a>
          </li>
          <li>
            <a href="">Fale Conosco</a>
          </li>
        </ul>
      </div>
    </>
  );
}
