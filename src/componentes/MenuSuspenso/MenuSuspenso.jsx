import { useEffect, useId, useRef, useState } from 'react';
import Icone from '../Icone/Icone.jsx';

export default function MenuSuspenso({
  opcoes,
  valor,
  aoSelecionar,
  rotulo = 'Filtrar por estilo',
}) {
  const [aberto, definirAberto] = useState(false);
  const referenciaRaiz = useRef(null);
  const referenciaBotao = useRef(null);
  const referenciasOpcoes = useRef([]);
  const idMenu = useId();
  const selecionada = opcoes.find((opcao) => opcao.valor === valor);
  useEffect(() => {
    if (!aberto) return undefined;
    referenciasOpcoes.current[
      opcoes.findIndex((opcao) => opcao.valor === valor)
    ]?.focus();

    function fecharAoSair(evento) {
      if (
        !(evento.target instanceof Node) ||
        !referenciaRaiz.current?.contains(evento.target)
      ) {
        definirAberto(false);
      }
    }
    document.addEventListener('pointerdown', fecharAoSair);
    document.addEventListener('focusin', fecharAoSair);
    return () => {
      document.removeEventListener('pointerdown', fecharAoSair);
      document.removeEventListener('focusin', fecharAoSair);
    };
  }, [aberto, opcoes, valor]);

  function escolher(opcao) {
    aoSelecionar(opcao.valor);
    opcao.aoSelecionar?.();
    definirAberto(false);
    referenciaBotao.current?.focus();
  }

  function tratarTeclasMenu(evento) {
    const indice = referenciasOpcoes.current.findIndex(
      (elemento) => elemento === document.activeElement,
    );
    let proximoIndice;
    if (evento.key === 'Escape') {
      evento.preventDefault();
      definirAberto(false);
      referenciaBotao.current?.focus();
      return;
    }
    if (evento.key === 'ArrowDown')
      proximoIndice = (indice + 1) % opcoes.length;
    else if (evento.key === 'ArrowUp')
      proximoIndice = (indice - 1 + opcoes.length) % opcoes.length;
    else if (evento.key === 'Home') proximoIndice = 0;
    else if (evento.key === 'End') proximoIndice = opcoes.length - 1;
    else return;
    evento.preventDefault();
    referenciasOpcoes.current[proximoIndice]?.focus();
  }

  return (
    <div className="menu-suspenso" ref={referenciaRaiz}>
      <button
        className="menu-suspenso-botao"
        type="button"
        ref={referenciaBotao}
        aria-label={`${rotulo}: ${selecionada?.rotulo ?? 'Selecione'}`}
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-controls={idMenu}
        onClick={() => definirAberto((anterior) => !anterior)}
        onKeyDown={(evento) => {
          if (evento.key === 'ArrowDown' || evento.key === 'ArrowUp') {
            evento.preventDefault();
            definirAberto(true);
          }
          if (evento.key === 'Escape') definirAberto(false);
        }}
      >
        <span>{selecionada?.rotulo ?? 'Selecione'}</span>
      </button>
      {aberto && (
        <div
          className="menu-suspenso-opcoes"
          id={idMenu}
          role="menu"
          aria-label={rotulo}
          onKeyDown={tratarTeclasMenu}
        >
          {opcoes.map((opcao, indice) => (
            <button
              key={opcao.valor}
              ref={(elemento) => {
                referenciasOpcoes.current[indice] = elemento;
              }}
              type="button"
              role="menuitemradio"
              aria-checked={valor === opcao.valor}
              tabIndex={-1}
              onClick={() => escolher(opcao)}
            >
              <span>{opcao.rotulo}</span>
              {valor === opcao.valor && <Icone nome="confirmar" tamanho={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
