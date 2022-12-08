import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext();

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

const GlobalContextProvider = ({ children }) => {

  const [data, setData] = useState([])

  const initialState = '';
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {
    state,
    dispatch,
    data
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <GlobalContext.Provider value={store}>
      <div className={state}>
        {children}
      </div>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider