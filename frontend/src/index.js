import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Context - Current User
import { AuthProvider } from "./context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App/>
      </AuthProvider>          
    </HashRouter>
  </React.StrictMode>
);
