import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Total() {
  // arr type datanya adalah array
  const [arr, setArr] = useState([1]);

  function handleClick() {
    setArr([...arr, 1]);
  }

  return (
    <div>
      <p>Total Length Array {arr.length}</p>
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
}

export default Total;
