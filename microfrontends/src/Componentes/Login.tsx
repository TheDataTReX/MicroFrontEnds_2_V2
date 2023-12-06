// src/components/Login.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { loginSuccess, loginFailure } from '../Componentes/loginActions';

// Credenciales de prueba
const USERNAME_TEST = 'usuarioPrueba';
const PASSWORD_TEST = 'contraseñaSegura123';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Instancia de useNavigate

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Verifica las credenciales antes de despachar
        if (username === USERNAME_TEST && password === PASSWORD_TEST) {
            // Despacha acción de éxito si las credenciales son correctas
            dispatch(loginSuccess({ username, token: 'token-falso' }));
            navigate('/home'); // Redirige a la vista principal
        } else {
            // Despacha acción de fracaso si las credenciales no coinciden
            dispatch(loginFailure('Nombre de usuario o contraseña incorrectos'));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
