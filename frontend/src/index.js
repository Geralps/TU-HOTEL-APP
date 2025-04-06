// frontend/src/index.js o main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 
import App from './App';
// ... resto del código

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider> 
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
