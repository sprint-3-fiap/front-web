import Header from "../components/ui/header";
import Nav from "../components/ui/nav";

function Home() {
  return (
    <div>
      <Header>
        <Nav>
          <a href="./index.html">
            Inicio<span className="bar"></span>
          </a>
          <a href="./agendamento.html">
            Agendamento<span className="bar"></span>
          </a>
          <a href="./exames.html">
            Meus exames<span className="bar"></span>
          </a>
          <a href="./resultados.html">
            Resultados<span className="bar"></span>
          </a>
          <a href="./contato.html">
            Contato<span className="bar"></span>
          </a>
          <a href="./localizacao.html">
            Como Chegar<span className="bar"></span>
          </a>
        </Nav>
      </Header>
      <main>
        <section>
          <p>Conteúdo da página inicial</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
