import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Soru from './Soru.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Soru />
  </StrictMode>,
)
