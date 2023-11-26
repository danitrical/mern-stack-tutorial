import { createContext, useContext, useReducer } from "react";


const StateContext = createContext();

// in order to perform some manipulation to the store data
// we use REDUCERS

export const StateProvider = ({
  reducer, initialState, children
}) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext);

// any method whose name starts with 'use' is called a HOOK