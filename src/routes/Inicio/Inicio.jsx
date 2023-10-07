import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// CSS STYLES //
import "./styles/main.css";
import "./styles/about.css";
import "./styles/valores.css";
import "./styles/services.css";
import "./styles/depoimentos.css";

// ICONS //
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Faq from "../../components/Faq/Faq";

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
                  src="https://i.im.ge/2023/10/05/Nnndh0.alvo-1.png"
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
                  src="https://i.im.ge/2023/10/05/NnN8GP.visualizacao.png"
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

      {/* SECTION VALORES */}
      <div className="sectionServices">
        <div className="servicesContent">
          <div className="titleServices">
            <h2>
              O que a <strong>Click Wiize</strong> vai fazer pelo seu negócio
            </h2>
          </div>
          <div className="videoServices">
            <iframe
              src="https://www.youtube.com/embed/MaF7GB8X3Lo?si=anbRuJCyfmsixYB9&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="descriptVideo">
            <p>
              Para a Click Wiise, o marketing só faz sentido quando gera receita
              para a sua empresa.
              <br />
              <br /> Por isso, o nosso foco não está em quantas pessoas
              visualizam, curtem ou seguem a sua página.{" "}
              <span>
                O que realmente importa é quanto caixa você vai gerar.
              </span>
            </p>
          </div>
          <div className="buttonForm">
            <a href="#">Fale com um especialista</a>
            <AiOutlineArrowRight size={35} />
          </div>
        </div>
      </div>

      {/* SECTION DEPOIMENTOS */}
      <div className="depoimentos">
        <div className="titleDepoimentos">
          <h2>O que estão dizendo sobre nós:</h2>
        </div>
        <div className="depoimentosContent">
          {/* SECTION DEPOIMENTO 1 */}
          <div className="cardDepoimento">
            <div className="sectionHeader">
              <div className="imageDepoimento">
                <img
                  src="https://i.im.ge/2023/10/06/PMW6sx.Ellipse-7.png"
                  alt="Imagem do Depoimento"
                />
              </div>
              <div className="sectionNome">
                <div className="nomeDepoimento">
                  <h3>Maicon Gilton</h3>
                  <img
                    src="https://i.im.ge/2023/10/06/PMWjYL.verificar-1.png"
                    alt="verificado"
                  />
                </div>
                <div className="empresaDepoimento">
                  <p>AgendamentosPop</p>
                </div>
              </div>
            </div>
            <div className="textDepoimento">
              <p>
                Com 2 semanas em parceria com a click wiize eu bati +10 mil
                novos usuarios em meu aplicativo, um crecimento 6x maior que o
                normal, a click wiize fez exatamente o que prometia, me colocar
                acima dos meus principais concorrentes.
              </p>
            </div>
          </div>
          {/* SECTION DEPOIMENTO 2 */}
          <div className="cardDepoimento">
            <div className="sectionHeader">
              <div className="imageDepoimento">
                <img
                  src="https://i.im.ge/2023/10/06/PMW6sx.Ellipse-7.png"
                  alt="Imagem do Depoimento"
                />
              </div>
              <div className="sectionNome">
                <div className="nomeDepoimento">
                  <h3>Marcos Colombo</h3>
                  <img
                    src="https://i.im.ge/2023/10/06/PMWjYL.verificar-1.png"
                    alt="verificado"
                  />
                </div>
                <div className="empresaDepoimento">
                  <p>Sonen Seguros</p>
                </div>
              </div>
            </div>
            <div className="textDepoimento">
              <p>
                Sem dúvidas alguma a melhor do mercado! já fechei parceria com
                várias agências, e não deu certo, mas com a click wiize foi
                diferente, nunca imaginei receber tantos leads como estou
                recebendo agora, fiz a parceria com a agência certa.
              </p>
            </div>
          </div>
          {/* SECTION DEPOIMENTO 3 */}
          <div className="cardDepoimento">
            <div className="sectionHeader">
              <div className="imageDepoimento">
                <img
                  src="https://i.im.ge/2023/10/06/PMW6sx.Ellipse-7.png"
                  alt="Imagem do Depoimento"
                />
              </div>
              <div className="sectionNome">
                <div className="nomeDepoimento">
                  <h3>Lisley Camili</h3>
                  <img
                    src="https://i.im.ge/2023/10/06/PMWjYL.verificar-1.png"
                    alt="verificado"
                  />
                </div>
                <div className="empresaDepoimento">
                  <p>Lili Cayol</p>
                </div>
              </div>
            </div>
            <div className="textDepoimento">
              <p>
                Finalmente achei uma parceria de verdade, nunca imaginei que
                vocês teriam tanta qualidade no atendimento aos parceiros, isso
                fez muita diferença pra mim, além do serviço de qualidade, que
                me trouxe um crescimento de 60% no meu faturamento anual.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
}
