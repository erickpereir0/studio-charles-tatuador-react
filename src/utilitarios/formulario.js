export const OPCOES_ESTILO = [
  { valor: 'tracos-finos', rotulo: 'Traços finos' },
  { valor: 'preto-solido', rotulo: 'Preto sólido' },
  { valor: 'tradicional', rotulo: 'Tradicional' },
];

export const OPCOES_LOCAL = ['Antebraço', 'Braço', 'Perna', 'Costas', 'Ombro', 'Outro local'];

export const FORMULARIO_INICIAL = { nome: '', estilo: '', localCorpo: '', ideia: '' };

export function validarFormulario(valores) {
  const erros = {};
  if (typeof valores.nome !== 'string' || valores.nome.trim().length < 2) {
    erros.nome = 'Informe um nome com pelo menos 2 caracteres.';
  }
  if (!OPCOES_ESTILO.some((opcao) => opcao.valor === valores.estilo)) {
    erros.estilo = 'Selecione um dos estilos disponíveis.';
  }
  if (!OPCOES_LOCAL.includes(valores.localCorpo)) {
    erros.localCorpo = 'Selecione o local do corpo.';
  }
  if (typeof valores.ideia !== 'string' || valores.ideia.trim().length < 10) {
    erros.ideia = 'Descreva sua ideia com pelo menos 10 caracteres.';
  }
  return erros;
}

// O progresso é derivado dos campos válidos: 0, 25, 50, 75 ou 100.
// Não é necessário criar outro estado ou um efeito para guardar esse cálculo.
export function calcularProgressoFormulario(valores) {
  return (4 - Object.keys(validarFormulario(valores)).length) * 25;
}

export function limitarProgresso(valor) {
  const numero = Number(valor);
  return Number.isFinite(numero) ? Math.min(100, Math.max(0, numero)) : 0;
}
