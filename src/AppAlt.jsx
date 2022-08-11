import React, { useReducer } from 'react';
import ComponentA from './Components/useReducer/ComponentA/ComponentA.jsx'

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

export default function Main() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="app">
            <div>Count: {count}</div>
            <counterContext.Provider value={{ countDispatch: dispatch }}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}