import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <StoreContextProvider>
    <App />
    </StoreContextProvider>
  </Router>,
);
