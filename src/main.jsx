import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home />
  </StrictMode>
)
