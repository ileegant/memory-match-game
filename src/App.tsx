import { useState } from "react";
import "./App.css";
import useGenerateCards from "./hooks/useGenerateCards";
import Card from "./components/ui/Card";
import { ListOfDifficulties } from "./data/config";
import Timer from "./components/ui/Timer";

function App() {
  const [count, setCount] = useState(64); // diff easy: 4 medium: 16 hard: 36 extreem: 64
  const { cards, onFlip } = useGenerateCards({ count });
  const cols = Math.ceil(Math.sqrt(count));

  return (
    <div className="flex flex-col items-center justify-center">
      <select
        name="difficulty"
        id="diff"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      >
        <option value={ListOfDifficulties.easy}>Easy (2x2)</option>
        <option value={ListOfDifficulties.medium}>Medium (4x4)</option>
        <option value={ListOfDifficulties.hard}>Hard (6x6)</option>
        <option value={ListOfDifficulties.extreme}>EXTREME (8x8)</option>
      </select>

      <Timer />

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
