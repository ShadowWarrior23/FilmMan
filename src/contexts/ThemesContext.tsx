import { useContext, createContext, useState, useEffect, type ReactNode } from 'react';

interface themeContType{
    theme: 'light' | 'dark';
    chTheme: () => void;
}

type PropsType = {
    children: ReactNode;
}

const themeContext = createContext<themeContType | undefined>(undefined);
export const ThemesProvider:React.FC<PropsType> = ({children}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  function chTheme(){
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.className = theme; //html tag (<html>)
  }, [theme]);

  return (
    <themeContext.Provider value={{theme, chTheme}}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemes = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error('Missing provider!')
    return context;
}