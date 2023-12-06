// src/reducers/loginReducer.ts
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Componentes/loginActions';

export interface LoginState {
    loading: boolean;
    user?: { username: string; token: string };
    error?: string;
}

const initialState: LoginState = {
    loading: false,
    isAuthenticated: false,
};

export const loginReducer = (state = initialState, action: any): LoginState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload, isAuthenticated: false };
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
