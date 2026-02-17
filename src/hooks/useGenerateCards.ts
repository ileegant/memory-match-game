import { useEffect, useState } from "react";
import type { MemoryCard } from "../types";

type useGenerateCardsProps = {
  count: number;
};

export default function useGenerateCards({ count }: useGenerateCardsProps) {
  const [cards, setCards] = useState<MemoryCard[]>([]);

  const emojis = [
    "🚀",
    "🎸",
    "🍎",
    "👻",
    "🍕",
    "🎲",
    "🦊",
    "💎",
    "🌈",
    "🌋",
    "⚓",
    "🍄",
    "🏀",
    "🥑",
    "🧨",
    "🛸",
  ];

  useEffect(() => {
    const selectedEmojis = emojis.slice(0, count);

    const gameCards: MemoryCard[] = [...selectedEmojis, ...selectedEmojis].map(
      (emoji, index) => ({
        id: index,
        content: emoji,
        isFliped: false,
        isGuessed: false,
      })
    );
    setCards(gameCards);
  }, [count]);

  const onFlip = (id: number) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFliped: !card.isFliped } : card
      )
    );
  };

  return { cards, onFlip };
}
