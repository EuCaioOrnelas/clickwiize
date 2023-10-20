// CSS STYLE //
import "./style/beneficios.css";

// ICON CSS //
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Beneficios() {
  return (
    <div className="beneficios">
      <div className="titleBeneficios">
        <h2>
          Com a <strong>Click Wiize</strong> seu negócio cresce muito mais
          rápido
        </h2>
      </div>
      <div className="beneficiosSection">
        <div className="sectionCard">
          {/* CARD 1 */}
          <div className="cardBeneficios">
            <div className="imgBeneficios">
              <img
                src="https://i.im.ge/2023/10/18/tTQLBr.reembolso-1-1-1.png"
                alt=""
              />
            </div>
            <div className="titleBeneficios">
              <h3>Aumento no ROI</h3>
            </div>
            <div className="descriptBeneficios">
              <p>
                Na click wiize, trabalhamos para aumentar seu ROI (Retorno sobre
                investimento). Para você parar de perder dinheiro com erros, que
                só geram dor de cabeça.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="cardBeneficios">
            <div className="imgBeneficios">
              <img
                src="https://i.im.ge/2023/10/18/tTMykq.grafico-de-crescimento-1.png"
                alt=""
              />
            </div>
            <div className="titleBeneficios">
              <h3>Aumento no faturamento</h3>
            </div>
            <div className="descriptBeneficios">
              <p>
                Um dos nossos diferenciais e um grande crescimento no
                faturamento anual, atráves de um marketing que realmente
                funciona!
              </p>
            </div>
          </div>

          {/* CARD 3 */}

          <div className="cardBeneficios">
            <div className="imgBeneficios">
              <img
                src="https://i.im.ge/2023/10/18/tTooxM.pensando-1.png"
                alt=""
              />
            </div>
            <div className="titleBeneficios">
              <h3>Resolução de problemas</h3>
            </div>
            <div className="descriptBeneficios">
              <p>
                Não basta ganhar dinheiro, mas sim, fazer isso sem dor de
                cabeça, ajudamos você a resolver problemas na sua empresa, que
                te impedem de crescer.
              </p>
            </div>
          </div>
        </div>

        <div className="sectionEspecialista">
          <div className="especialistaContent">
            <div className="descriptSection">
              <div className="titleEspecialista">
                <h3>
                  Fale com um <strong>Especialista</strong>
                </h3>
              </div>
              <div className="descriptEspecialista">
                <p>
                  <strong>Agende</strong> agora mesmo uma{" "}
                  <strong>consultoria GRATUITA</strong> com um de nossos
                  especialistas, vamos analisar e entender seu négocio atual,
                  para encontrar soluções para os seus problemas, resultando em
                  menos dor de cabeça para você, e mais tranquilidade no seu
                  négocio, assim aumentando seus resultados com facilidade.
                </p>
              </div>
              <div className="buttonEspecialista">
                <a href="#">
                  <span>Fale com Especialista</span>
                  <AiOutlineArrowRight size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="sectionCtaImg">
            <img
              src="https://i.im.ge/2023/10/10/P0CEXm.click-15-1-1.png"
              alt="computador click wiize"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
