import { useRef, useState } from 'react';
import {
  OPCOES_LOCAL,
  FORMULARIO_INICIAL,
  OPCOES_ESTILO,
  calcularProgressoFormulario,
  validarFormulario,
} from '../../utilitarios/formulario.js';
import { useNotificacao } from '../../contexto/ContextoNotificacao/ContextoNotificacao.jsx';
import BarraProgresso from '../BarraProgresso/BarraProgresso.jsx';

export default function SecaoOrcamento() {
  const [valores, definirValores] = useState({
    ...FORMULARIO_INICIAL,
  });
  const [erros, definirErros] = useState({});
  const referenciaFormulario = useRef(null);
  const { mostrarNotificacao } = useNotificacao();
  const progresso = calcularProgressoFormulario(valores);

  function tratarAlteracao(evento) {
    const { name: nome, value: valor } = evento.currentTarget;
    const proximosValores = { ...valores, [nome]: valor };
    definirValores(proximosValores);
    if (erros[nome]) {
      definirErros((anteriores) => ({
        ...anteriores,
        [nome]: validarFormulario(proximosValores)[nome],
      }));
    }
  }

  function tratarEnvio(evento) {
    evento.preventDefault();
    const proximosErros = validarFormulario(valores);
    definirErros(proximosErros);
    const primeiroErro = Object.keys(proximosErros)[0];
    if (primeiroErro) {
      mostrarNotificacao(
        'Preencha os quatro campos para concluir a simulação.',
        'erro',
      );
      const campoComErro =
        referenciaFormulario.current?.elements.namedItem(primeiroErro);
      if (campoComErro instanceof HTMLElement) campoComErro.focus();
      return;
    }
    // Demonstração local: não envia dados nem promete um agendamento real.
    mostrarNotificacao(
      'Envio simulado com sucesso! Nenhum pedido real foi enviado.',
      'sucesso',
    );
  }

  function erroDoCampo(nome) {
    return erros[nome] ? (
      <span className="campo-erro" id={`${nome}-erro`}>
        {erros[nome]}
      </span>
    ) : null;
  }

  return (
    <section
      className="secao secao-orcamento"
      id="orcamento"
      aria-labelledby="orcamento-titulo"
    >
      <div className="conteiner grade-orcamento">
        <div className="orcamento-introducao">
          <p className="chamada">DO PAPEL PARA A PELE</p>
          <h2 id="orcamento-titulo">
            Sua próxima tatuagem
            <br />
            começa com
            <br />
            <em>uma ideia.</em>
          </h2>
          <p>
            Conte um pouco do que você imagina. O primeiro passo é dar espaço
            para a sua história.
          </p>
          <div className="orcamento-assinatura" aria-hidden="true">
            <span>
              Seu corpo.
              <br />
              Seu traço.
            </span>
          </div>
        </div>
        <form
          className="formulario-orcamento"
          ref={referenciaFormulario}
          onSubmit={tratarEnvio}
          noValidate
          aria-label="Simular pedido de orçamento"
        >
          <BarraProgresso valor={progresso} />
          <div className="grade-formulario">
            <div className="campo">
              <label htmlFor="orcamento-nome">Seu nome</label>
              <input
                id="orcamento-nome"
                name="nome"
                type="text"
                autoComplete="given-name"
                maxLength={80}
                required
                placeholder="Como podemos te chamar?"
                value={valores.nome}
                onChange={tratarAlteracao}
                aria-invalid={Boolean(erros.nome)}
                aria-describedby={erros.nome ? 'nome-erro' : undefined}
              />
              {erroDoCampo('nome')}
            </div>
            <div className="campo">
              <label htmlFor="orcamento-estilo">Estilo</label>
              <select
                id="orcamento-estilo"
                name="estilo"
                required
                value={valores.estilo}
                onChange={tratarAlteracao}
                aria-invalid={Boolean(erros.estilo)}
                aria-describedby={erros.estilo ? 'estilo-erro' : undefined}
              >
                <option value="">Selecione o estilo</option>
                {OPCOES_ESTILO.map((opcao) => (
                  <option key={opcao.valor} value={opcao.valor}>
                    {opcao.rotulo}
                  </option>
                ))}
              </select>
              {erroDoCampo('estilo')}
            </div>
            <div className="campo campo-inteiro">
              <label htmlFor="orcamento-local">Local do corpo</label>
              <select
                id="orcamento-local"
                name="localCorpo"
                required
                value={valores.localCorpo}
                onChange={tratarAlteracao}
                aria-invalid={Boolean(erros.localCorpo)}
                aria-describedby={
                  erros.localCorpo ? 'localCorpo-erro' : undefined
                }
              >
                <option value="">Onde você imagina sua tatuagem?</option>
                {OPCOES_LOCAL.map((localCorpo) => (
                  <option key={localCorpo} value={localCorpo}>
                    {localCorpo}
                  </option>
                ))}
              </select>
              {erroDoCampo('localCorpo')}
            </div>
            <div className="campo campo-inteiro">
              <label htmlFor="orcamento-ideia">Conte sua ideia</label>
              <textarea
                id="orcamento-ideia"
                name="ideia"
                rows={4}
                minLength={10}
                maxLength={600}
                required
                placeholder="Um desenho, uma memória, uma referência..."
                value={valores.ideia}
                onChange={tratarAlteracao}
                aria-invalid={Boolean(erros.ideia)}
                aria-describedby={`ideia-dica${erros.ideia ? ' ideia-erro' : ''}`}
              />
              <div className="campo-dica" id="ideia-dica">
                <span>Pelo menos 10 caracteres.</span>
                <span>{valores.ideia.length}/600</span>
              </div>
              {erroDoCampo('ideia')}
            </div>
          </div>
          <button className="botao botao-principal botao-enviar" type="submit">
            Simular envio do pedido
          </button>
          <p className="formulario-aviso">
            Demonstração. Nenhum pedido real é enviado e os dados não são
            armazenados.
          </p>
        </form>
      </div>
    </section>
  );
}
