import React, { useContext, useReducer } from 'react'
import sidebarReducer from '../reducers/sidebarReducer'
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actions/index'

// estado inicial
const initialState = {
  isSidebarOpen: false
}

// me creo el contexto
const SidebarContext = React.createContext()

// proveo el contexto
export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState)

  const openSidebar = () => {
    dispatch({
      type: OPEN_SIDEBAR
    })
  }

  const closeSidebar = () => {
    dispatch({
      type: CLOSE_SIDEBAR
    })
  }

  return (
    <SidebarContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar
    }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

// me creo un hook
export const useSidebarContext = () => {
  return useContext(SidebarContext)
}
