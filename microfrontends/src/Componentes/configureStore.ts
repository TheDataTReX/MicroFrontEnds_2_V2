// src/store/configureStore.ts

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from '../Componentes/loginReducer';

const rootReducer = combineReducers({
    // Aquí puedes añadir más reducers conforme tu aplicación crezca
    login: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk) // Aquí puedes añadir más middlewares si es necesario
    );

    return store;
}
