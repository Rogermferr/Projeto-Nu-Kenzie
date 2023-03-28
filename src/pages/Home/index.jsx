import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { ListCards } from "../../components/ListCards";

export function Home({ handleHome, totalValue, finances, setFinances }) {
  return (
    <div className="div__app--home">
      <Header handleHome={handleHome} />
      <Form
        finances={finances}
        setFinances={setFinances}
        totalValue={totalValue}
      />
      <ListCards finances={finances} setFinances={setFinances} />
    </div>
  );
}
