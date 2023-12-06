// src/actions/loginActions.ts

// Definir tipos de acción
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Acción para iniciar el proceso de login
export const loginRequest = (credentials: { username: string; password: string }) => ({
    type: LOGIN_REQUEST,
    payload: credentials
});

// Acción para un login exitoso
export const loginSuccess = (userDetails: { username: string; token: string }) => ({
    type: LOGIN_SUCCESS,
    payload: userDetails
});

// Acción para un login fallido
export const loginFailure = (error: string) => ({
    type: LOGIN_FAILURE,
    payload: error
});
