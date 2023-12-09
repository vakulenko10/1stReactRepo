import React, {useState, useContext, createContext} from 'react'
 const ColorThemeContext = React.createContext()
 const ThemeUpdateContext = React.createContext()   
export function ThemeProvider ({children}){
    const [darkTheme, setDarkTheme] = useState(false)
    function toggleTheme(){

        setDarkTheme((prevDarkTheme)=>!prevDarkTheme)
    }
    return(
        <ColorThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {/* <ThemeUpdateContext.Provider >  */}
                {children}
            {/* </ThemeUpdateContext.Provider> */}
        </ColorThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ColorThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };