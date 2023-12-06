import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const MainHeader: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const themeText = (theme: string) => {
        switch (theme) {
            case 'light':
                return 'Modo Oscuro';
            case 'dark':
                return 'Modo Claro';
            case 'blue':
                return 'Modo Azul';
            case 'green':
                return 'Modo Verde';
            case 'purple':
                return 'Modo Morado';
            default:
                return 'Modo Claro'; // Valor por defecto
        }
    };

    return (
        <header className={`header ${theme}`}>
            <h1>Bienvenido a Nuestro Sitio de Micro Frontends</h1>
            <nav>
                <button onClick={toggleTheme}>
                    Cambiar a {themeText(theme)}
                </button>
                {/* Puedes agregar aquí enlaces de navegación si es necesario */}
            </nav>
        </header>
    );
};

export default MainHeader;
