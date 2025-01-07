import { createContext, useContext, useState } from "react";
const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});
const Theme = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark" : "Light"}
      </button>
    </>
  );
};

const ContohContext = () => {
  const [darkMode, setDarkMode] = useState(false);
  const value = { darkMode, setDarkMode };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <Theme />
      </ThemeContext.Provider>
    </>
  );
};

export default ContohContext;
