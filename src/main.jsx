import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2 className='Heading'>TO DO LIST</h2>
    <App />
  </React.StrictMode>,
)
