import React from 'react'
import {ThemeProvider} from '../src/Provider'
import theme from '../dist/themes/baseTheme'

import 'focus-visible'
import './playroom.css'
import '../dist/base.css'

export default ({children}) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>
}
