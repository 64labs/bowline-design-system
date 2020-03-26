import React from 'react'
import {ThemeProvider} from '../src/Provider'
import theme from '../dist/themes/baseTheme'

import 'focus-visible'
import './playroom.css'

const svgIcons = require.context('../dist/icons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

export default ({children}) => {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>
}
