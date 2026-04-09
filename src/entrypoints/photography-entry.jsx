import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from '../pages/photography.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Index />
    </StrictMode>,
)
