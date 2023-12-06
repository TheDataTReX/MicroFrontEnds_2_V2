import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainHeader from './Componentes/MainHeader';
import TodoList from './microFrontendDos/TodoList';
import ProfileCard from './microFrontendUno/ProfileCard';
import ContactForm from './Componentes/ContactForm';
import CallbackComponent from './Componentes/CallbackComponent';
import Counter from './Componentes/Counter';
import CounterWithReducer from './Componentes/CounterWithReducer';
import LayoutEffectComponent from './Componentes/LayoutEffectComponent';
import MemoComponent from './Componentes/MemoComponent';
import RefComponent from './Componentes/RefComponent';
import { ThemeContext } from './Componentes/ThemeContext';
import Login from './Componentes/Login'; // Asegúrate de que la ruta es correcta

function App() {
    const initialTasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
    const { theme } = useContext(ThemeContext);

    return (
        <Router>
            <div className={`app-container ${theme}`}>
                <MainHeader />
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Ruta de inicio actualizada al componente Login */}
                    <Route path="/home" element={ // Puedes cambiar esto a cualquier ruta que prefieras
                        <div className="main-content">
                            <div className="ui-section">
                                <ProfileCard
                                    imageUrl="src/assets/rey-leon.jpg"
                                    name="Pepito"
                                    description="Desarrollador de software"
                                />
                                <TodoList initialTasks={initialTasks} />
                            </div>
                            <div className="ui-section">
                                <ProfileCard
                                    imageUrl="src/assets/SHREK.jpg"
                                    name="Mariela"
                                    description="Desarrolladora de software Senior"
                                />
                                <TodoList initialTasks={initialTasks} />
                            </div>
                            <div className="hooks-section">
                                <Counter />
                                <CounterWithReducer />
                                <CallbackComponent />
                                <MemoComponent />
                                <RefComponent />
                                <LayoutEffectComponent />
                            </div>
                        </div>
                    } />
                    <Route path="/contact/:name" element={<ContactForm />} />
                    {/* Otras rutas pueden ir aquí */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
