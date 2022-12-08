import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalContextProvider from './Components/utils/global.context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>
);


