import logo from "/src/assets/fig/Nu Kenzie Home.svg";

export function CardHome({ handleDash }) {
  return (
    <section className="card__home">
      <img src={logo} alt="Logo NuKenzie" />
      <h1>Centralize o controle das suas finanças</h1>
      <p>de forma rápida e segura</p>
      <button onClick={handleDash}>Iniciar</button>
    </section>
  );
}
