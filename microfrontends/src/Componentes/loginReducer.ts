// src/reducers/loginReducer.ts
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Componentes/loginActions';

export interface LoginState {
    loading: boolean;
    isAuthenticated: boolean; // Asegúrate de que esta propiedad esté declarada aquí
    user?: { username: string; token: string };
    error?: string;
}

const initialState: LoginState = {
    loading: false,
    isAuthenticated: false, // El estado inicial es 'false' porque el usuario no está autenticado
    user: undefined,
    error: undefined,
};

export const loginReducer = (state = initialState, action: any): LoginState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: undefined }; // Inicia la carga y limpia los errores
        case LOGIN_SUCCESS:
            // Establece 'isAuthenticated' a 'true' y guarda los detalles del usuario
            return { ...state, loading: false, isAuthenticated: true, user: action.payload, error: undefined };
        case LOGIN_FAILURE:
            // Establece 'isAuthenticated' a 'false' y guarda el mensaje de error
            return { ...state, loading: false, isAuthenticated: false, user: undefined, error: action.payload };
        default:
            return state; // No cambia el estado si la acción no es relevante
    }
};
