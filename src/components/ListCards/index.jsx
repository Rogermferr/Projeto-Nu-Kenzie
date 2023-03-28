import trash from "/src/assets/fig/trash.svg";

export function ListCards({ finances, setFinances }) {
  function deleteFinance(removeFinance) {
    const filteredFinance = finances.filter((element) => {
      if (element !== removeFinance) {
        return element;
      }
    });

    setFinances(filteredFinance);
  }

  return (
    <div className="div__list--container">
      <h2>Resumo financeiro</h2>

      <ul className="list__container">
        {finances.map((element) =>
          element.type === "Entrada" ? (
            <li className="list__item profit" key={element.id}>
              <div className="list__item--div">
                <h3>{element.desc}</h3>
                <span>{element.type}</span>
              </div>

              <span>R$ {element.value}</span>
              <img
                src={trash}
                alt="excluir"
                onClick={() => deleteFinance(element)}
              />
            </li>
          ) : (
            <li className="list__item expense" key={element.id}>
              <div className="list__item--div">
                <h3>{element.desc}</h3>
                <span>{element.type}</span>
              </div>

              <span>R$ {element.value}</span>
              <img
                src={trash}
                alt="excluir"
                onClick={() => deleteFinance(element)}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
