import 'focus-visible'
import React from 'react'
import {BowlineProvider} from '../dist'
import theme from '../dist/themes/baseTheme'

export default ({children}) => {
  return <BowlineProvider theme={theme}>{children}</BowlineProvider>
}
