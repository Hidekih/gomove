import { useContext, createContext, ReactNode, useState, useCallback } from 'react';
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

interface ThemeContextProps {
  theme: ThemeDatas;
  changeTheme(): void;
}

export interface ThemeDatas {
  name: string;
  background: string;
  backgroundSecundary: string;
  modalBg: string;
  grayLine: string;
  boxShadow: string;
  title: string;
  text: string;
  textHighlight: string;
  buttonTitle: string;
  red: string;
  green: string;
  blue: string;
  blueDark: string;
  blueTwitter: string;
  blueLight: string;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

interface ThemeContextProviderProps{
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [ theme, setTheme ] = useState<ThemeDatas>(light);

  const changeTheme = useCallback(() => {
    setTheme(theme === light ? dark : light);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export function useStyledTheme() {
  const context = useContext(ThemeContext);

  if(!context){
    throw new Error("Use useStyledTheme em um componente dentro do ThemeContextProvider");
  }

  return context;
}