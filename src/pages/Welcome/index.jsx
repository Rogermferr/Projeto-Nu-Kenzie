import { CardHome } from "../../components/CardHome";
import { ImageHome } from "../../components/ImageHome";

export function Welcome({ handleDash }) {
  return (
    <div className="div__app">
      <CardHome handleDash={handleDash} />
      <ImageHome />
    </div>
  );
}
