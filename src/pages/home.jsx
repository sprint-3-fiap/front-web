import Header from "../components/ui/header";
import Nav from "../components/ui/nav";
import NavItem from "../components/ui/navItem";

function Home() {
  return (
    <div>
      <Header>
        <Nav>
          <NavItem to="/" text="Inicio" />
          <NavItem to="/agendamento" text="Agendamento" />
          <NavItem to="/meus-exames" text="Meus Exames" />
          <NavItem to="/resultados" text="Resultados" />
          <NavItem to="/contato" text="Contato" />
          <NavItem to="/chegar" text="Como Chegar" />
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
