import React, { createContext, useContext, useReducer } from "react";

//initialize the data layer
export const StateContext = createContext();

//put everything into the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pulls the information from data layer
export const useStateValue = () => useContext(StateContext);