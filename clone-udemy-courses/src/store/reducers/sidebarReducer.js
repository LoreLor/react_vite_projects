import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actions/index'
const initialState = {
  isSidebarOpen: false
}

const sidebarReducer = (state = initialState, action) => {
  // mejor rendimiento usar if
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true
      }

    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false
      }

    default: {
      return state
    }
  }
}

export default sidebarReducer
