import { useState } from "react";
import "./App.css";
import useGenerateCards from "./hooks/useGenerateCards";
import Card from "./components/ui/Card";

function App() {
  const [count, setCount] = useState(6);
  const { cards, onFlip } = useGenerateCards({ count });

  return (
    <>
      {cards.map((card) => {
        return <Card card={card} onFlip={onFlip} />;
      })}
    </>
  );
}

export default App;
