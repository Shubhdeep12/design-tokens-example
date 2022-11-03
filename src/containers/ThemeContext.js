import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState('light')
    const themeContextValue = {
        toggleTheme: () => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        },
        setTheme,
        isDark: theme === 'dark',
    };
    return (
        <ThemeContext.Provider value={themeContextValue}>
          {props.children}
        </ThemeContext.Provider>
      );
}

export const useTheme = () => {
    return useContext(ThemeContext);
  };
  