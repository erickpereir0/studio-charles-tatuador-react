import { useState } from 'react';
import { CATEGORIAS_GALERIA, tatuagens } from '../../dados/estudio.js';
import { paginar } from '../../utilitarios/paginacao.js';
import MenuSuspenso from '../MenuSuspenso/MenuSuspenso.jsx';
import Paginacao from '../Paginacao/Paginacao.jsx';

const opcoesFiltro = [
  { valor: 'todos', rotulo: 'Todos os temas' },
  ...CATEGORIAS_GALERIA,
];

export default function Portfolio() {
  const [categoria, definirCategoria] = useState('todos');
  const [pagina, definirPagina] = useState(1);
  const filtradas =
    categoria === 'todos'
      ? tatuagens
      : tatuagens.filter((tatuagem) => tatuagem.categoria === categoria);
  const paginacao = paginar(filtradas, pagina, 6);

  function alterarCategoria(proximaCategoria) {
    definirCategoria(proximaCategoria);
    definirPagina(1); // O novo tema pode ter menos páginas que a galeria completa.
  }

  return (
    <div className="portfolio-conteudo">
      <div className="portfolio-ferramentas">
        <p aria-live="polite">
          <strong>{paginacao.totalItens} referências na galeria</strong>
          <span>Ideias e tatuagens com personalidade.</span>
        </p>
        <MenuSuspenso
          rotulo="Filtrar por tema"
          opcoes={opcoesFiltro}
          valor={categoria}
          aoSelecionar={alterarCategoria}
        />
      </div>
      <div className="grade-tatuagens" aria-label="Fotografias da galeria">
        {paginacao.itens.map((tatuagem) => (
          <figure
            className="cartao-tatuagem cartao-tatuagem--foto"
            key={tatuagem.id}
          >
            <a
              className="imagem-tatuagem imagem-tatuagem--foto"
              href={tatuagem.imagem}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                'Abrir ' + tatuagem.titulo + ' em tamanho completo, em nova aba'
              }
            >
              <img
                src={tatuagem.imagem}
                alt={tatuagem.descricaoAlternativa}
                loading="lazy"
                width={tatuagem.largura}
                height={tatuagem.altura}
              />
            </a>
            <figcaption>
              <span className="categoria-foto">{tatuagem.rotuloCategoria}</span>
              <h3>{tatuagem.titulo}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="portfolio-base">
        <p className="quantidade-resultados" aria-live="polite">
          Mostrando {paginacao.primeiroItem}–{paginacao.ultimoItem} de{' '}
          {paginacao.totalItens} imagens
        </p>
        <Paginacao
          totalPaginas={paginacao.totalPaginas}
          paginaAtual={paginacao.paginaAtual}
          aoMudarPagina={definirPagina}
        />
      </div>
      <p className="nota-ilustracao">
        Fotos de referência. Toque em uma imagem para vê-la em tamanho completo.
      </p>
    </div>
  );
}
