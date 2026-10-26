import { useEffect, useState } from 'react';
import Icone from '../Icone/Icone.jsx';

const titulos = {
  sucesso: 'Tudo certo',
  erro: 'Revise seu pedido',
  informacao: 'Uma informação para você',
};

export default function Notificacao({
  id,
  mensagem,
  tipo = 'informacao',
  duracao = 6000,
  aoFechar,
}) {
  const [pausada, definirPausada] = useState(false);
  // A limpeza cancela o temporizador ao fechar, trocar a mensagem ou desmontar.
  useEffect(() => {
    if (pausada) return undefined;
    const temporizador = window.setTimeout(aoFechar, duracao);
    return () => window.clearTimeout(temporizador);
  }, [id, duracao, pausada, aoFechar]);

  return (
    <div
      className={`notificacao notificacao--${tipo}`}
      onMouseEnter={() => definirPausada(true)}
      onMouseLeave={() => definirPausada(false)}
      onFocusCapture={() => definirPausada(true)}
      onBlurCapture={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget))
          definirPausada(false);
      }}
    >
      <span className="notificacao-icone" aria-hidden="true">
        {tipo === 'sucesso' ? (
          <Icone nome="confirmar" />
        ) : tipo === 'erro' ? (
          '!'
        ) : (
          'i'
        )}
      </span>
      <div className="notificacao-texto">
        <strong>{titulos[tipo] ?? titulos.informacao}</strong>
        <p>{mensagem}</p>
      </div>
      <button
        className="botao-icone"
        type="button"
        onClick={aoFechar}
        aria-label="Fechar notificação"
      >
        <Icone nome="fechar" tamanho={18} />
      </button>
    </div>
  );
}
