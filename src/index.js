import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AccountManager } from './modules/account';

// Styles
import './styles/styles.css';
import './styles/palettes/grayscale.css'
import './styles/buttons.css'

window.accountManager = new AccountManager();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
