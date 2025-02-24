import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Home from './Home'




// import App from './App.jsx'

createRoot( document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
)
