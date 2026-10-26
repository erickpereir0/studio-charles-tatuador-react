import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import Notificacao from '../../componentes/Notificacao/Notificacao.jsx';

const ContextoNotificacao = createContext(null);
// Bônus: estado global compartilhado por formulário, artistas e rodapé.
export function ProvedorNotificacao({ children: filhos }) {
  const [notificacao, definirNotificacao] = useState(null);
  const proximoId = useRef(0);
  const mostrarNotificacao = useCallback((mensagem, tipo = 'informacao') => {
    proximoId.current += 1;
    definirNotificacao({ id: proximoId.current, mensagem, tipo });
  }, []);
  const ocultarNotificacao = useCallback(() => definirNotificacao(null), []);
  const valorContexto = useMemo(
    () => ({ mostrarNotificacao }),
    [mostrarNotificacao],
  );

  return (
    <ContextoNotificacao.Provider value={valorContexto}>
      {filhos}
      <div
        className="regiao-notificacoes"
        aria-live="polite"
        aria-atomic="true"
      >
        {notificacao && (
          <Notificacao
            key={notificacao.id}
            {...notificacao}
            aoFechar={ocultarNotificacao}
          />
        )}
      </div>
    </ContextoNotificacao.Provider>
  );
}
export function useNotificacao() {
  const contexto = useContext(ContextoNotificacao);
  if (!contexto) {
    throw new Error(
      'useNotificacao precisa estar dentro de ProvedorNotificacao.',
    );
  }
  return contexto;
}
