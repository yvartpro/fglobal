import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './GlobalContext.jsx'
import { WhatsAppProvider } from './WhatsAppNumberContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <WhatsAppProvider>
        <App/>
      </WhatsAppProvider>
    </GlobalProvider>
  </StrictMode>
)
