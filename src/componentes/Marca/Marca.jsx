import { NOME_ESTUDIO } from '../../dados/estudio.js';

export default function Marca({ rotulo = `${NOME_ESTUDIO}, início` }) {
  return (
    <a className="marca marca-charles" href="#inicio" aria-label={rotulo}>
      <span className="marca-abertura">Estúdio de</span>
      <span className="marca-nome">
        Charles<span className="marca-ponto">.</span>
      </span>
      <small>TATUADOR</small>
    </a>
  );
}
