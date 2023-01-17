import { createContext, useState } from 'react'

export const UiContext = createContext()

const UiProvider = ({ children }) => {
  const [ hideMenuState, setHideMenuState ] = useState(true)

  const showMenu = () => {
    setHideMenuState( false )
  }

  const hideMenu = () => {
    setHideMenuState( true )
  }

  return (
    <UiContext.Provider value={{ hideMenuState, showMenu, hideMenu }}>
      { children }
    </UiContext.Provider>
  )
}

export default UiProvider