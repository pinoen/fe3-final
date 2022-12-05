import { createContext, useReducer } from "react";

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext(undefined);

const reducer = (state, { type }) => {

}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {
    state,
    dispatch
  }

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};
