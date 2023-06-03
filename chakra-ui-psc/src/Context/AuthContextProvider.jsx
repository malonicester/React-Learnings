import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;