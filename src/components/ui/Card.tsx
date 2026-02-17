import type { MemoryCard } from "../../types";

interface CardProps {
  card: MemoryCard;
  onFlip: (id: number) => void;
}

export default function Card({ card, onFlip }: CardProps) {
  const baseClasses =
    "relative h-24 w-24 cursor-pointer transition-all duration-500 [transform-style:preserve-3d]";

  const flipClass =
    card.isFliped || card.isGuessed ? "[transform:rotateY(180deg)]" : "";

  return (
    <div
      className={`${baseClasses} ${flipClass} group`}
      onClick={() => !card.isFliped && !card.isGuessed && onFlip(card.id)}
    >
      <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-blue-100 bg-blue-50 text-3xl font-bold text-blue-400 shadow-sm backface-hidden">
        ?
      </div>

      <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-emerald-400 bg-white text-4xl shadow-lg [transform:rotateY(180deg)] backface-hidden">
        {card.content}

        {card.isGuessed && (
          <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
            ✓
          </div>
        )}
      </div>
    </div>
  );
}
