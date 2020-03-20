import React, {useContext} from 'react'

const backgroundContext = React.createContext()

export const BackgroundProvider = backgroundContext.Provider

export const renderBackgroundProvider = (background, element) =>
  background && background !== 'transparent' ? (
    <BackgroundProvider value={background}>{element}</BackgroundProvider>
  ) : (
    element
  )

export const useBackground = () => useContext(backgroundContext)
