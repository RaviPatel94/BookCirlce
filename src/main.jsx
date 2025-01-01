import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Categoryprovider } from './Components/Context/Category.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categoryprovider>
    <App />
    </Categoryprovider>
  </StrictMode>
)
