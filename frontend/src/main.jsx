import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-e8duogmyorgbl74g.us.auth0.com"
    clientId="RJZH1vBMEHQ1L5nR9X3fJS55xgsP0yCw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <StrictMode>
    <App />
  </StrictMode>
  </Auth0Provider>
  ,
)
