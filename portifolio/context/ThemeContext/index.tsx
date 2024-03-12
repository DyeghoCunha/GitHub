import { ReactNode, createContext, useContext, useState } from 'react';
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

interface ThemeProviderProps{
  children:React.ReactNode;
}

export const ThemeProvider = ({ children }:ThemeProviderProps) => {
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
