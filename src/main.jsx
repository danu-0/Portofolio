import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/index.css'
import Home from './Home'
import Detail from './components/detailsProject'
import DarkModeProvider from './context/darkMode'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DarkModeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Detail />} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
