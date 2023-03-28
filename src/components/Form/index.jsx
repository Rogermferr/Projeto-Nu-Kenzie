import { v4 as uuid } from "uuid";
import { useState } from "react";

export function Form({ handleFinance, finances, setFinances, totalValue }) {
  const [finance, setFinance] = useState({
    id: "",
    desc: "",
    value: 0,
    type: "Entrada",
  });

  function handleFinance(event) {
    event.preventDefault();

    setFinance((prevState) => ({
      ...prevState,
      id: uuid(),
    }));

    if (finance.type === "Despesa" && finance.value > 0) {
      finance.value *= -1;
    } else if (finance.type === "Entrada" && finance.value < 0) {
      finance.value *= -1;
    }

    setFinances([...finances, finance]);
  }

  return (
    <div>
      <form className="form__container" onSubmit={handleFinance}>
        <label htmlFor="desc">Descrição</label>
        <input
          type="text"
          id="desc"
          placeholder="Digite aqui sua descrição"
          required
          onChange={(event) =>
            setFinance((prevState) => ({
              ...prevState,
              desc: event.target.value,
            }))
          }
        />
        <span>Ex: Compra de roupas</span>

        <div className="div__form">
          <div className="div__form--price">
            <label htmlFor="price">Valor</label>
            <input
              type="text"
              id="price"
              placeholder="Digite o valor"
              required
              onChange={(event) =>
                setFinance((prevState) => ({
                  ...prevState,
                  value: Number(event.target.value),
                }))
              }
            />
          </div>

          <div className="div__form--type">
            <label htmlFor="select">Tipo de valor</label>
            <select
              id="select"
              onChange={(event) =>
                setFinance((prevState) => ({
                  ...prevState,
                  type: event.target.value,
                }))
              }>
              <option>Entrada</option>
              <option>Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>

      <div className="div__total--value">
        <div className="div__total--desc">
          <h2>Valor Total</h2>
          <span>O valor se refere ao saldo</span>
        </div>

        <span>R$ {totalValue()}</span>
      </div>
    </div>
  );
}
