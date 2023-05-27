import { createContext, useState } from "react";

export const AuthContext = createContext();
import React from "react";

function AuthContextProvider({ children }) {
  const [authentication, SetAuthentication] = useState(false);
  const toggleAuthentication = ()=>{
        SetAuthentication(!authentication);
  }
  console.log(AuthContext.Provider);
  return (
    <AuthContext.Provider value={{ authentication,toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
