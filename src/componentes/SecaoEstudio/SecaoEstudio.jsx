import Abas from '../Abas/Abas.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import { artistas } from '../../dados/estudio.js';
import { useNotificacao } from '../../contexto/ContextoNotificacao/ContextoNotificacao.jsx';

function Artistas() {
  const { mostrarNotificacao } = useNotificacao();

  return (
    <div className="grade-artistas">
      {artistas.map((artista) => (
        <article className="cartao-artista" key={artista.id}>
          <div className="monograma-artista" aria-hidden="true">
            <span>{artista.iniciais}</span>
          </div>
          <p className="chamada">{artista.estilo}</p>
          <h3>{artista.nome}</h3>
          <p>{artista.descricao}</p>
          <button
            type="button"
            className="link-texto"
            onClick={() =>
              mostrarNotificacao(
                `Gostou do estilo de ${artista.nome}? Descreva sua preferência no formulário de orçamento.`,
                'informacao',
              )
            }
          >
            Sobre esse estilo
          </button>
          <small>Perfil fictício</small>
        </article>
      ))}
    </div>
  );
}

function Sobre() {
  return (
    <div className="painel-sobre">
      <div>
        <p className="chamada">SUA PERSONALIDADE VEM PRIMEIRO</p>
        <h3>
          Uma ideia sua.
          <br />
          Uma criação com intenção.
        </h3>
        <p>
          O Estúdio de Charles tatuador é um conceito de estúdio para
          transformar referências, memórias e vontades em tatuagens com
          personalidade.
        </p>
        <p>
          Esta apresentação é ilustrativa. A galeria reúne as fotos fornecidas
          para a atividade, e os perfis demonstram a experiência de conhecer o
          estúdio e preparar um pedido de orçamento.
        </p>
      </div>
      <ol className="lista-etapas">
        <li>
          <span>01</span>
          <div>
            <h4>A gente conversa</h4>
            <p>Você conta sua ideia e as referências que fazem sentido.</p>
          </div>
        </li>
        <li>
          <span>02</span>
          <div>
            <h4>O desenho ganha forma</h4>
            <p>Estilo, composição e local entram na criação.</p>
          </div>
        </li>
        <li>
          <span>03</span>
          <div>
            <h4>O próximo passo é combinado</h4>
            <p>
              Em um atendimento real, a equipe definiria os detalhes com você.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default function SecaoEstudio() {
  const itens = [
    { id: 'tatuagens', rotulo: 'Tatuagens', conteudo: <Portfolio /> },
    { id: 'artistas', rotulo: 'Artistas', conteudo: <Artistas /> },
    { id: 'estudio', rotulo: 'O estúdio', conteudo: <Sobre /> },
  ];

  return (
    <section
      className="secao secao-estudio"
      id="portfolio"
      aria-labelledby="estudio-titulo"
    >
      <div className="conteiner">
        <div className="secao-cabecalho">
          <div>
            <p className="chamada">IDEIAS QUE GANHAM FORMA</p>
            <h2 id="estudio-titulo">
              Conheça o <em>estúdio.</em>
            </h2>
          </div>
          <p>
            Explore os traços.
            <br />
            Encontre o seu.
          </p>
        </div>
        <Abas itens={itens} />
      </div>
    </section>
  );
}
