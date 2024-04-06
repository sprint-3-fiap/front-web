const Header = ({ children }) => {
    return (
      <header className="HeaderContainer">
        <div id="logoContainer">
          <img id="logo" src="./images/logo.png" alt="Logo" />
        </div>
        {children}
        <p>Bem Vindo, Leonardo</p>
      </header>
    );
  };
  
  export default Header;
  