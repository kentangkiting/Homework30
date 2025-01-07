import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Total from "./homework30_1.tsx";
import Contoh from "./homework30_2.tsx";
import JumlahView from "./homework30_3.tsx";
import JumlahMemo from "./homework30_4.tsx";
import ContohContext from "./homework30_5.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>homework30_1</p>
    <Total />
    <p>homework30_2</p>
    <Contoh />
    <p>homework30_3</p>
    <JumlahView />
    <p>homework30_4</p>
    <JumlahMemo />
    <p>homework30_5</p>
    <ContohContext />
  </StrictMode>
);
