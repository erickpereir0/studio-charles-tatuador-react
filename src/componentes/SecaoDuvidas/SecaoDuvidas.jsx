import Acordeao from '../Acordeao/Acordeao.jsx';
import { perguntasFrequentes } from '../../dados/estudio.js';

export default function SecaoDuvidas() {
  return (
    <section
      className="secao secao-duvidas"
      id="duvidas"
      aria-labelledby="duvidas-titulo"
    >
      <div className="conteiner grade-duvidas">
        <div>
          <p className="chamada">ANTES DO PRIMEIRO TRAÇO</p>
          <h2 id="duvidas-titulo">
            Ficou alguma
            <br />
            <em>dúvida?</em>
          </h2>
          <p className="secao-descricao">
            Algumas respostas para você começar com mais clareza.
          </p>
        </div>
        <Acordeao itens={perguntasFrequentes} />
      </div>
    </section>
  );
}
