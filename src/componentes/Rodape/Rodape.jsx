import { useNotificacao } from '../../contexto/ContextoNotificacao/ContextoNotificacao.jsx';
import { NOME_ESTUDIO } from '../../dados/estudio.js';
import Marca from '../Marca/Marca.jsx';

export default function Rodape() {
  const { mostrarNotificacao } = useNotificacao();

  return (
    <footer className="rodape-site">
      <div className="conteiner rodape-conteudo">
        <Marca rotulo={`${NOME_ESTUDIO}, voltar ao início`} />
        <p>
          Tatuagens com personalidade.
          <br />
          <span>Estúdio ilustrativo </span>
        </p>
        <button
          className="rodape-informacoes"
          type="button"
          onClick={() =>
            mostrarNotificacao(
              'As imagens são referências e os pedidos são simulados.',
              'informacao',
            )
          }
        >
          Sobre este projeto
        </button>
      </div>
    </footer>
  );
}
