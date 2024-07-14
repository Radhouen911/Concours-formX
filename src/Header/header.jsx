function Header() {
  return (
    <div className="Header">
      <a href="http://www.femmes.gov.tn/fr/">
        <img
          src="./public/logo.png"
          alt="Logo de la ministère de la femme et de l'enfant"
          width="200px"
        />
      </a>
      <input type="button" className="btn" value="Admin Panel" />{" "}
      {/* this functionality isn't yet developped neither prepared */}
    </div>
  );
}
export default Header;
