import { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

const reducer = (state, { type }) => {
  switch (type) {
    case 'dark':
      return 'dark'

    case 'light':
      return ''

    default:
      return state;
  }

}

const DarkModeProvider = ({ children }) => {

  const initialState = '';
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {
    state,
    dispatch
  }

  return (
    <DarkModeContext.Provider value={store}>
      <div className={state}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider