import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import AppContext from "./AppContextProvider.jsx";
import AppContextProvider from "./AppContextProvider.jsx";
import ThemeContextProvider from "./Context/ThemeContextProvider.jsx";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
);
