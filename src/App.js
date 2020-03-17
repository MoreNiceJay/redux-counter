import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
export default function App() {
  return <Counter />;
}

function Counter() {
  const count = useSelector(state => state.count);
  return (
    <>
      <h2>Counter : {count}</h2>
      <button> + </button>
      <button> - </button>
    </>
  );
}
