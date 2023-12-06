import React, { createContext, useState, ReactNode, useCallback } from 'react';

// Define el tipo para el contexto del tema
type Theme = 'light' | 'dark' | 'blue' | 'green' | 'purple';

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Crea el contexto con un tema por defecto y una función dummy para toggleTheme
export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => { } });

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    // Alternar entre 'light', 'dark', 'blue', 'green', 'purple'
    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => {
            switch (prevTheme) {
                case 'light':
                    return 'dark';
                case 'dark':
                    return 'blue';
                case 'blue':
                    return 'green';
                case 'green':
                    return 'purple';
                case 'purple':
                    return 'light';
                default:
                    return 'light'; // Valor por defecto
            }
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
