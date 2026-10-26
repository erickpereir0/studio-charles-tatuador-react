import { useId, useRef, useState } from 'react';

// Os títulos e painéis vêm por propriedades; a aba ativa pertence ao estado local.
export default function Abas({ itens, rotulo = 'Seções do estúdio' }) {
  const [idAtivo, definirIdAtivo] = useState(itens[0]?.id);
  const prefixo = useId();
  const botoes = useRef([]);

  function tratarTecla(evento, indice) {
    let proximoIndice;
    if (evento.key === 'ArrowRight')
      proximoIndice = (indice + 1) % itens.length;
    else if (evento.key === 'ArrowLeft')
      proximoIndice = (indice - 1 + itens.length) % itens.length;
    else if (evento.key === 'Home') proximoIndice = 0;
    else if (evento.key === 'End') proximoIndice = itens.length - 1;
    else return;
    evento.preventDefault();
    definirIdAtivo(itens[proximoIndice].id);
    botoes.current[proximoIndice]?.focus();
  }

  return (
    <div className="abas">
      <div className="lista-abas" role="tablist" aria-label={rotulo}>
        {itens.map((item, indice) => (
          <button
            key={item.id}
            ref={(elemento) => {
              botoes.current[indice] = elemento;
            }}
            type="button"
            role="tab"
            id={`${prefixo}-aba-${item.id}`}
            aria-controls={`${prefixo}-painel-${item.id}`}
            aria-selected={idAtivo === item.id}
            tabIndex={idAtivo === item.id ? 0 : -1}
            onClick={() => definirIdAtivo(item.id)}
            onKeyDown={(evento) => tratarTecla(evento, indice)}
          >
            {item.rotulo}
            <span className="numero-aba" aria-hidden="true">
              0{indice + 1}
            </span>
          </button>
        ))}
      </div>
      {itens.map((item) => (
        <div
          key={item.id}
          className="painel-aba"
          role="tabpanel"
          id={`${prefixo}-painel-${item.id}`}
          aria-labelledby={`${prefixo}-aba-${item.id}`}
          tabIndex={0}
          hidden={idAtivo !== item.id}
        >
          {item.conteudo}
        </div>
      ))}
    </div>
  );
}
