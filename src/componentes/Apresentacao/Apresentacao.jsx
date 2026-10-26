import { tatuagemDestaque } from '../../dados/estudio.js';

export default function Apresentacao() {
  if (!tatuagemDestaque) {
    throw new Error(
      'A tatuagem de destaque não foi encontrada nos dados do estúdio.',
    );
  }

  return (
    <section
      className="apresentacao"
      id="inicio"
      aria-labelledby="apresentacao-titulo"
    >
      <div className="conteiner grade-apresentacao">
        <div className="apresentacao-texto">
          <p className="chamada">
            <span className="ponto-pequeno" /> ESTÚDIO DE CHARLES TATUADOR
          </p>
          <h1 id="apresentacao-titulo">
            Sua história,
            <br />
            <em>na pele.</em>
          </h1>
          <p className="apresentacao-descricao">
            Tem coisas que a gente escolhe levar para sempre.{' '}
          </p>
          <div className="apresentacao-acoes">
            <a className="botao botao-principal" href="#orcamento">
              Pedir orçamento
            </a>
            <a className="link-texto" href="#portfolio">
              Explorar trabalhos
            </a>
          </div>
          <div className="apresentacao-estilos">
            <span>PERSONAGENS</span>
            <span>HUMOR</span>
            <span>PERSONALIDADE</span>
          </div>
        </div>
        <div className="apresentacao-arte apresentacao-arte--foto">
          <img
            src={tatuagemDestaque.imagem}
            alt={tatuagemDestaque.descricaoAlternativa}
            width={tatuagemDestaque.largura}
            height={tatuagemDestaque.altura}
            fetchPriority="high"
          />
          <div className="legenda-foto">
            <span>
              CRIATIVIDADE NA PELE.
              <br />
              <strong>DO SEU JEITO.</strong>
            </span>
            <small>FOTO DE REFERÊNCIA</small>
          </div>
        </div>
      </div>
      <div className="apresentacao-base conteiner">
        <span>CADA TRAÇO TEM UM PORQUÊ.</span>
        <a href="#portfolio" aria-label="Conhecer o portfólio">
          <span>Conheça o estúdio</span>
        </a>
      </div>
    </section>
  );
}
