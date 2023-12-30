// CSS STYLE
import "./styles/footer.css";

// ICONS
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="sectionOne">
            <div className="logo">
              <img
                src="https://i.im.ge/2023/12/31/xKfolq.ClickWiize-6-removebg-preview.png"
                alt="logo"
              />
            </div>
            <div className="returnHome">
              <a href="#home">
                <FaArrowAltCircleUp size={25} />
                <span>Retornar para o inicio</span>
              </a>
            </div>
          </div>
          <div className="sectionTwo">
            <p>
              2024 © ClickWiize. Todos os direitos reservados. Políticas de
              privacidade
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
