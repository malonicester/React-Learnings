import React from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  return <AppContext.Provider value="batman">
                {children}
         </AppContext.Provider>;
}

export default AppContextProvider;
