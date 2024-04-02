"use client"
import { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from '@/styles/theme';

type ThemeContextType = {
  theme: boolean
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: true,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
