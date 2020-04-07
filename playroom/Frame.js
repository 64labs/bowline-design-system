import React from 'react'
import {BowlineProvider} from '../dist/index'

import defaultTheme from '../dist/themes/baseTheme'

import 'focus-visible'

import './playroom.css'

const svgIcons = require.context('../dist/icons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

const themes = {
  defaultTheme,
}

export default ({children, theme}) => {
  if (theme === 'defaultTheme') {
    require('./base/defaultTheme.css')
  }
  return <BowlineProvider theme={themes[theme]}>{children}</BowlineProvider>
}
