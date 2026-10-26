export default function Paginacao({
  totalPaginas,
  paginaAtual,
  aoMudarPagina,
}) {
  return (
    <nav className="paginacao" aria-label="Paginação do portfólio">
      <button
        type="button"
        disabled={paginaAtual <= 1}
        onClick={() => aoMudarPagina(paginaAtual - 1)}
      >
        <span>Anterior</span>
      </button>
      <div className="numeros-paginas">
        {Array.from({ length: totalPaginas }, (_, indice) => indice + 1).map(
          (pagina) => (
            <button
              type="button"
              key={pagina}
              aria-label={`Ir para a página ${pagina}`}
              aria-current={pagina === paginaAtual ? 'page' : undefined}
              onClick={() => aoMudarPagina(pagina)}
            >
              {pagina}
            </button>
          ),
        )}
      </div>
      <button
        type="button"
        disabled={paginaAtual >= totalPaginas}
        onClick={() => aoMudarPagina(paginaAtual + 1)}
      >
        <span>Próxima</span>
      </button>
    </nav>
  );
}
