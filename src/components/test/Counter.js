"use client"; // → flag
import { useState } from "react";
import { Title } from "./Title";
import Button from "./Button";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <Title text={"Contador"} />
      <div className="w-full flex gap-x-4 items-center justify-center my-4 py-2">
        <Button onClick={() => setCount(count - 1)}> - </Button>
        <span className="font-bold text-xl">{count}</span>
        <Button onClick={() => setCount(count + 1)}> + </Button>
      </div>
    </div>
  );
}
