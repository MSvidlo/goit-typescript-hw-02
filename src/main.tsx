import React from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom';
import App from './App.js'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
