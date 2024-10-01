"use client"

import {
  useState,
  useCallback,
} from "react";

import Scene from "./Scene";
import ScorePopup from "./ScorePopup";

import { Button } from "./ui/button";

export default function MainComponent() {
  const [score, setScore] = useState<number>(0);
  // This array of numbers tracks score popups
  const [items, setItems] = useState<number[]>([]);

  // Creates another score popup
  const addDiv = useCallback(() => {
    // using timestamp as a unique ID
    setItems([...items, new Date().getTime()]);
  }, [items]);

  // Deletes score popup
  const removeDiv = useCallback((itemId: number) => {
    // filter out the div which matches the ID
    setItems(items.filter((id) => id !== itemId));
  }, [items]);

  function addScore() {
    setScore(score+1);
    addDiv();
  }

  return (
    <div className="h-[90vh] flex flex-col items-center gap-10">
      <h2 className="text-5xl font-black">Score: {score}</h2>
      <Scene score={score} />
        {items.map((id) => (
          <ScorePopup key={id} id={id} removeDiv={removeDiv} />
        ))}
      <Button variant="outline" className="text-5xl w-28 h-28" size="icon" onClick={() => addScore()}>+</Button>
    </div>
  )
}
