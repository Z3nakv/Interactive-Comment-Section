import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './components/context/context.jsx'
import ModalState from './components/context/contextModal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
    <ModalState>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ModalState>
  </GlobalState>
)
