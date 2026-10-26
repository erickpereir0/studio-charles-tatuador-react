import Marca from '../Marca/Marca.jsx';

export default function Cabecalho() {
  return (
    <>
      <a className="atalho-conteudo" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="cabecalho-site">
        <div className="conteiner cabecalho-conteudo">
          <Marca />
          <nav className="navegacao-principal" aria-label="Navegação principal">
            <a href="#portfolio">Portfólio</a>
            <a href="#orcamento">Orçamento</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="cabecalho-convite" href="#orcamento">
            Vamos criar juntos
          </a>
        </div>
      </header>
    </>
  );
}
