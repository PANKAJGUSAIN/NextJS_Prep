"use client";

import { createContext, useContext } from "react";

const defaultTheme = { colors: { primary: "#007bff", secondary: "#6c757d" } }

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) =>{
    const setTheme = () =>{
        return "new theme setter"
    }
    return (
        <ThemeContext.Provider value={{defaultTheme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = ()=>useContext(ThemeContext);

export {useTheme , ThemeProvider}