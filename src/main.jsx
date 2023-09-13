import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import './assets/mediaqueries.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='open-mic-redux'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)
