//Mediante el store.js voy a cargar las variables globales al initialState y tambien recuperar data
//No necesito librerias externas para implementar el Context API, aqui se crea un contexto global y se guardaran las variables globales
import React, { createContext, useContext, useReducer } from 'react';

//Creo una variable de contexto global
export const StateContext = createContext();

//Provider: est componente sirve para insertar data al contexto global, ademas lo que se hace
//es suscribir todos loc componentes del proyecto
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children} {/* Componentes del proyecto */}
    </StateContext.Provider>
);

//useContext: nos brinda el acceso a la variable global almacenada en el initialState  
export const useStateValue = () => useContext(StateContext);