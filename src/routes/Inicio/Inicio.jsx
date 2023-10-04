import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// ICONS //
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <div className="home" id="home">
        <div className="textTitle">
          <h3>Pare de perder para seu concorrente e tenha</h3>
        </div>
        <div className="title">
          <h1>
            um marketing digital que te coloca acima dos seus concorrentes
          </h1>
        </div>
        <div>
          <a>
            <span>SAIBA MAIS</span>
            <MdKeyboardDoubleArrowDown size={25} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
