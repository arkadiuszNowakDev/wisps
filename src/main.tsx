import { StrictMode } from 'react'

import App from '@src/App'
import { createRoot } from 'react-dom/client'

import '@src/common/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
