import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// CSS STYLES //
import "./styles/main.css";
import "./styles/about.css";
import "./styles/valores.css";

// ICONS //
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Inicio() {
  return (
    <>
      <div className="main" id="home">
        <Navbar />
        <div className="contentMain">
          <div className="textTitle">
            <p>
              Cansado de <span>perder</span> faturamento <span>todos</span> os
              meses?
            </p>
          </div>
          <div className="title">
            <h1>
              <span>mude isso</span> com um <span>marketing digital</span>{" "}
              <br />
              que te coloca <span>acima</span> dos seus{" "}
              <span>concorrentes!</span>
            </h1>
          </div>
          <div className="routeAbout">
            <a>
              <span>SAIBA MAIS</span>
              <MdKeyboardDoubleArrowDown size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION ABOUT */}
      <div className="about">
        <div className="aboutContent">
          <div className="sectionOne">
            <img
              src="https://i.im.ge/2023/10/04/NHUXDL.Design-sem-nome-2-removebg-preview.png"
              alt="Image"
            />
          </div>
          <div className="aboutTwo">
            <h2>Quem Somos</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="routeSobre">
              <a href="#">Saiba mais</a>
              <AiOutlineArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION VALORES */}
      <div className="valores">
        <div className="sectionValores">
          <div className="valoresTitle">
            <h2>Missão, Visão e Valores</h2>
          </div>
          <div className="valoresSubtitle">
            <p>Conheça os três pilares que sustentam a nossa empresa.</p>
          </div>
          <div className="sectionCard">
            <div className="card">
              <div className="imageCard">
                <img
                  src="https://i.im.ge/2023/10/05/Nvr6v6.target-1-1.png"
                  alt="Missão"
                />
              </div>
              <h3>Missão</h3>
              <p>
                Gerir negócios pautados na gestão humanizada e transformar a
                vida das pessoas por meio dos serviços, produtos, oportunidades
                e experiências oferecidas.
              </p>
            </div>
            <div className="card">
              <div className="imageCard">
                <img
                  src="https://i.im.ge/2023/10/04/NpsDsh.online-marketing-1.png"
                  alt="Visão"
                />
              </div>
              <h3>Visão</h3>
              <p>
                Ser reconhecido como um dos maiores grupos empresariais do
                Brasil por sua excelência em gestão de empresas, negócios,
                pessoas e impacto na sociedade em que atuamos.
              </p>
            </div>
            <div className="card">
              <div className="imageCard">
                <img
                  src="https://i.im.ge/2023/10/05/NpsmYP.rating-1.png"
                  alt="Valores"
                />
              </div>
              <h3>Valores</h3>
              <p>
                Crescemos! Mas sempre mantemos como base valores sólidos e
                inegociáveis: Trabalho duro, Respeito, Overdeliver, Honestidade,
                Gestão humanizada e Consistência.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
