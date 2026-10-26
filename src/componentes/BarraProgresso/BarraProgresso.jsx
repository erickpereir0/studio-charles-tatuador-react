import { limitarProgresso } from '../../utilitarios/formulario.js';

// Componente controlado: o percentual é recebido por propriedades, entre 0 e 100.
export default function BarraProgresso({ valor, rotulo = 'Seu pedido' }) {
  const progresso = limitarProgresso(valor);

  return (
    <div className="grupo-progresso">
      <div className="rotulo-progresso">
        <span>{rotulo}</span>
        <strong aria-hidden="true">{progresso}%</strong>
      </div>
      <progress
        className="barra-progresso"
        value={progresso}
        max="100"
        aria-label="Preenchimento do pedido de orçamento"
      >
        {progresso}%
      </progress>
      <p>{Math.round(progresso / 25)} de 4 informações concluídas</p>
    </div>
  );
}
