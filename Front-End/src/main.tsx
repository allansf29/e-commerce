import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { FavoritesProvider } from "./components/FavoritesContext.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <FavoritesProvider>
        <App />
       </FavoritesProvider>
    
  </StrictMode>,
)
