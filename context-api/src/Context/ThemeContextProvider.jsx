import React from "react";

export const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
