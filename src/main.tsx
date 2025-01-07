import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Total from "./homework30_1.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>homework30_1</p>
    <Total />
    <p>homework30_2</p>
  </StrictMode>
);
