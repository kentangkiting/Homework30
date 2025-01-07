import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "tambah":
      return { count: state.count + 1 };
    case "kurang":
      return { count: state.count - 1 };
  }
}
function HitungComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Hitung: {state.count}</p>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
    </div>
  );
}

export default HitungComponent;
