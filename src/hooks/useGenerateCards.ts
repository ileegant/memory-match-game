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
    const flippedCount = cards.filter((c) => c.isFliped && !c.isGuessed).length;

    if (flippedCount < 2) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === id ? { ...card, isFliped: true } : card
        )
      );
    }
  };

  useEffect(() => {
    const flippedCards = cards.filter((c) => c.isFliped && !c.isGuessed);

    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;

      if (card1.content === card2.content) {
        setCards((prev) =>
          prev.map((c) =>
            c.content === card1.content ? { ...c, isGuessed: true } : c
          )
        );
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.isFliped && !c.isGuessed ? { ...c, isFliped: false } : c
            )
          );
        }, 1000);
      }
    }
  }, [cards]);

  return { cards, onFlip };
}
