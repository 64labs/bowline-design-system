import 'focus-visible'
import React from 'react'
import {BowlineProvider, defaultTheme} from '../dist'

export default ({children}) => {
  return <BowlineProvider value={defaultTheme}>{children}</BowlineProvider>
}
