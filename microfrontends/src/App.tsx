// src/App.tsx

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
import Login from './Componentes/Login';
import PrivateRoute from './Componentes/PrivateRoute'; // Asegúrate de que la ruta es correcta

function App() {
    const initialTasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
    const { theme } = useContext(ThemeContext);

    return (
        <Router>
            <div className={`app-container ${theme}`}>
                <MainHeader />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={
                        <PrivateRoute>
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
                        </PrivateRoute>
                    } />
                    <Route path="/contact/:name" element={
                        <PrivateRoute>
                            <ContactForm />
                        </PrivateRoute>
                    } />
                    {/* Envuelve las rutas de los componentes restantes con PrivateRoute */}
                    <Route path="/counter" element={
                        <PrivateRoute>
                            <Counter />
                        </PrivateRoute>
                    } />
                    <Route path="/counter-with-reducer" element={
                        <PrivateRoute>
                            <CounterWithReducer />
                        </PrivateRoute>
                    } />
                    <Route path="/callback-component" element={
                        <PrivateRoute>
                            <CallbackComponent />
                        </PrivateRoute>
                    } />
                    <Route path="/layout-effect" element={
                        <PrivateRoute>
                            <LayoutEffectComponent />
                        </PrivateRoute>
                    } />
                    <Route path="/memo-component" element={
                        <PrivateRoute>
                            <MemoComponent />
                        </PrivateRoute>
                    } />
                    <Route path="/ref-component" element={
                        <PrivateRoute>
                            <RefComponent />
                        </PrivateRoute>
                    } />
                    {/* Asegúrate de que todas las rutas necesiten autenticación excepto el login */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
