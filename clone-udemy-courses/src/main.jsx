import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SidebarProvider } from './store/context/sidebarContext'
import { CoursesProvider } from './store/context/coursesContext'
import { CartProvider } from './store/context/cartContext'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
  </React.StrictMode>
)
