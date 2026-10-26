import { createElement } from 'react';
import { ProvedorNotificacao } from './contexto/ContextoNotificacao/ContextoNotificacao.jsx';
import Cabecalho from './componentes/Cabecalho/Cabecalho.jsx';
import Apresentacao from './componentes/Apresentacao/Apresentacao.jsx';
import SecaoEstudio from './componentes/SecaoEstudio/SecaoEstudio.jsx';
import SecaoOrcamento from './componentes/SecaoOrcamento/SecaoOrcamento.jsx';
import SecaoDuvidas from './componentes/SecaoDuvidas/SecaoDuvidas.jsx';
import Rodape from './componentes/Rodape/Rodape.jsx';

// Componente principal que organiza as seções e o estado global das notificações.
// createElement monta a mesma árvore que JSX e mantém o arquivo App.js do enunciado.
export default function App() {
  return createElement(
    ProvedorNotificacao,
    null,
    createElement(Cabecalho),
    createElement(
      'main',
      { id: 'conteudo', tabIndex: -1 },
      createElement(Apresentacao),
      createElement(SecaoEstudio),
      createElement(SecaoOrcamento),
      createElement(SecaoDuvidas),
    ),
    createElement(Rodape),
  );
}
