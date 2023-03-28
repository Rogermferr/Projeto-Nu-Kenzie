import "./styles/reset.css";
import "./styles/globalStyles.css";
import "./styles/App.css";
import "./styles/Home.css";

import { useState } from "react";
import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";

function App() {
  const [page, setPage] = useState(false);
  const [finances, setFinances] = useState([]);

  function handleDash() {
    setPage(true);
  }

  function handleHome() {
    setPage(false);
  }

  function totalValue() {
    const operation = finances.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.value;
    }, 0);

    return operation;
  }

  return (
    <div className="App">
      {page ? (
        <Home
          handleHome={handleHome}
          totalValue={totalValue}
          finances={finances}
          setFinances={setFinances}
        />
      ) : (
        <Welcome handleDash={handleDash} />
      )}
    </div>
  );
}

export default App;
