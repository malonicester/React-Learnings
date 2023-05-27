import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'

function Button() {
  const themeContext = useContext(ThemeContext);
  return (
    <button style={
        {padding:'10px',borderRadius:'7px',border:'none',background:'#104bc2',color:'white',cursor:"pointer"}
    }
    onClick={themeContext.toggleTheme}
        >
    Toggle Theme
    </button>
  )
}

export default Button