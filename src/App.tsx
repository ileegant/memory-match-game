import { useState } from "react";
import "./App.css";
import useGenerateCards from "./hooks/useGenerateCards";
import Card from "./components/ui/Card";

function App() {
  const [count, setCount] = useState(64);
  const { cards, onFlip } = useGenerateCards({ count });
  const cols = Math.sqrt(count);

  return (
    <div className="flex items-center justify-center">
      <div className="w-min p-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 2fr)`,
            gap: "10px",
          }}
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} onFlip={onFlip} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
