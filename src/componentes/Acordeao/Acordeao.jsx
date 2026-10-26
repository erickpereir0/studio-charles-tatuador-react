import { useId, useState } from 'react';
import Icone from '../Icone/Icone.jsx';

export default function Acordeao({ itens }) {
  const [idAberto, definirIdAberto] = useState(itens[0]?.id ?? null);
  const prefixo = useId();

  return (
    <div className="acordeao">
      {itens.map((item, indice) => {
        const aberto = item.id === idAberto;
        return (
          <div
            className={`acordeao-item${aberto ? ' aberto' : ''}`}
            key={item.id}
          >
            <h3>
              <button
                className="acordeao-botao"
                type="button"
                id={`${prefixo}-botao-${item.id}`}
                aria-expanded={aberto}
                aria-controls={`${prefixo}-conteudo-${item.id}`}
                onClick={() => definirIdAberto(aberto ? null : item.id)}
              >
                <span className="numero-duvida" aria-hidden="true">
                  0{indice + 1}
                </span>
                <span>{item.titulo}</span>
                <span className="acordeao-simbolo">
                  <Icone nome="mais" tamanho={18} />
                </span>
              </button>
            </h3>
            <div
              className={`acordeao-painel${aberto ? ' aberto' : ''}`}
              role="region"
              id={`${prefixo}-conteudo-${item.id}`}
              aria-labelledby={`${prefixo}-botao-${item.id}`}
              aria-hidden={!aberto}
              inert={!aberto}
            >
              <div>
                <p>{item.conteudo}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
