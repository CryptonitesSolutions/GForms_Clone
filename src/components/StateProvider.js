import React,{useContext,useReducer,createContext} from 'react';
import { initialstate } from './reducer';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialstate, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialstate)}>{children}</StateContext.Provider>
)

export const useStateValue = ()=>useContext(StateContext);