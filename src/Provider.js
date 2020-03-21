import React, {useContext} from 'react'

const ctx = React.createContext()

const Provider = ctx.Provider

export const ThemeProvider = ({theme, ...props}) => (
  <Provider value={theme} {...props} />
)

export const useTheme = () => {
  return useContext(ctx)
}
