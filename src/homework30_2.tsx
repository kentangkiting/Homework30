import { useState, useEffect } from "react";
function Contoh() {
  const [message, setMessage] = useState("Mount");

  useEffect(() => {
    document.title = message;
    return () => {
      console.log("Unmount");
    };
  }, [message]);

  const handleClick = () => {
    setMessage("Updated");
  };
  return (
    <div>
      <p>Message: {message}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Contoh;
