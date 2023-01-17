import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TicketApp from './TicketApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <TicketApp />
    </BrowserRouter>
)
