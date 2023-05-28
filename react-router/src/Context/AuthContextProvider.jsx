import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth((auth) => !auth);
  }

  return <AuthContext.Provider value={{auth,toggleAuth}}>
                {children}
        </AuthContext.Provider>;
};

export default AuthContextProvider;
