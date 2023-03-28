import logoNuKenzie from "/src/assets/fig/Nu Kenzie.svg";

export function Header({ handleHome }) {
  return (
    <header className="header__container">
      <img src={logoNuKenzie} alt="Logo Nu Kenzie" />
      <button onClick={handleHome}>Início</button>
    </header>
  );
}
