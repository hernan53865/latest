import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import RouterPages from './router/RouterPages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterPages/>
    </BrowserRouter>
  </React.StrictMode>,
)
