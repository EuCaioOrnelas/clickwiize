// CSS STYLE //
import "./style/form.css";

export default function Form() {
  return (
    <div className="form" id="contato">
      <div className="titleForm">
        <h2>
          Quer vender mais? Receba agora uma{" "}
          <strong>Consultoria Gratuita</strong>
        </h2>
      </div>
      <div className="formSection">
        <div className="formContent">
          <div className="Descript">
            <div className="titleDescript">
              <h3>
                Entre em <strong>contato</strong>
              </h3>
              <p>
                O marketing do seu negócio deveria estar transformando o
                dinheiro investido em lucro. Se isso não está acontecendo, nós
                vamos lhe ajudar. <br />
                <br /> Deixe seu contato com a gente e em até 12 horas, um
                especialista irá entrar em contato para agendar uma reunião
                diagnóstica para a sua empresa. Nela, será feita a análise do
                seu negócio, onde serão apontados os possíveis pontos de
                melhoria e o que pode estar travando as suas vendas.
              </p>
            </div>
          </div>
          <div className="cardForm">
            <form action="">
              <input
                type="text"
                name="nome"
                id="nome"
                className="input"
                placeholder="Qual seu nome e sobrenome?"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="E-mail comercial"
              />
              <input
                type="number"
                name="numero"
                id="numero"
                className="input"
                placeholder="Seu telefone"
              />
              <input
                type="text"
                name="empresa"
                id="empresa"
                className="input"
                placeholder="Nome da sua empresa?"
              />
              <input
                type="text"
                name="segmento"
                id="segmento"
                className="input"
                placeholder="Qual seu segmento?"
              />
              <input
                type="number"
                name="funcionarios"
                id="funcionarios"
                className="input"
                placeholder="Quantos funcionários você tem hoje?"
              />
              <input
                type="number"
                name="faturamento"
                id="faturamento"
                className="input"
                placeholder="Qual faturamento mensal da sua empresa?"
              />

              <button type="submit">receber consultoria gratuita</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
