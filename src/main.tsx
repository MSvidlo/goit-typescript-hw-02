import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css';
import Modal from 'react-modal';

const rootElement = document.getElementById('root') as HTMLElement;
Modal.setAppElement(rootElement);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
