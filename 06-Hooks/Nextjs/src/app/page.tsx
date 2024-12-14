"use client"
import Counter from "@/components/Counter";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(10);

  function change() {
    setValue(50);
  }
  return (
    <div>
      {/* <h1>Hello World {value}</h1>
      <button onClick={change} className="active:scale-75">Change Value</button>
      */}
      {/* <Counter />  */}
      <Todo />
    </div>
  );
}
