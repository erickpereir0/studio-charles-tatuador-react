// Função pura: protege os limites da paginação, inclusive com lista vazia.
export function paginar(itens, paginaSolicitada, itensPorPagina = 6) {
  if (!Number.isInteger(itensPorPagina) || itensPorPagina < 1) {
    throw new RangeError('A quantidade de itens por página deve ser um inteiro positivo.');
  }

  const totalPaginas = Math.max(1, Math.ceil(itens.length / itensPorPagina));
  const pagina = Number.isFinite(paginaSolicitada) ? Math.trunc(paginaSolicitada) : 1;
  const paginaAtual = Math.min(totalPaginas, Math.max(1, pagina));
  const inicio = (paginaAtual - 1) * itensPorPagina;

  return {
    paginaAtual,
    totalPaginas,
    itens: itens.slice(inicio, inicio + itensPorPagina),
    totalItens: itens.length,
    primeiroItem: itens.length ? inicio + 1 : 0,
    ultimoItem: Math.min(inicio + itensPorPagina, itens.length),
  };
}
