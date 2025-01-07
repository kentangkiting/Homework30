import { useState } from "react";
import ReactDOM from "react-dom/client";
import useValue from "./homework30_7_1";

const Auth = () => {
  const [value, { setValue }] = useValue(false);

  return (
    <>
      <div>
        <button type="button" onClick={() => setValue(!value)}>
          {value ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Auth;
