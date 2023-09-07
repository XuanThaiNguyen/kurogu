"use client";

import {createContext, useEffect, useState} from "react";

type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  toggle?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light'
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({children}: {children: any}) => {
  const [theme, setTheme] = useState<any>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme!);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};