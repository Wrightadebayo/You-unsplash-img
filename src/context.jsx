// 

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode=()=>{
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  console.log(prefersDarkMode)
  return prefersDarkMode
}


export const AppProvider = ({ children }) => {
  const [isDarkTheme, setisDarkTheme] = useState(getInitialDarkMode());
const [searchTerm,setSearchTerm] = useState('cats')
  const toggleTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setisDarkTheme(newDarkTheme);
    
    

  };
useEffect(()=>{
  document.body.classList.toggle('dark-theme',isDarkTheme)
},[isDarkTheme])
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme,searchTerm,setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
