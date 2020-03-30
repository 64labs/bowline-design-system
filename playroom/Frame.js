import React from 'react'
import {BowlineProvider} from '../dist/index'

import defaultTheme from '../dist/themes/baseTheme'
import mkgEcommTheme from './mkgEcomm/bowline.config'

import 'focus-visible'

import './playroom.css'

const svgIcons = require.context('../dist/icons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

const themes = {
  defaultTheme,
  mkgEcommTheme,
}

export default ({children, theme}) => {
  if (theme === 'defaultTheme') {
    require('./base/defaultTheme.css')
  }
  if (theme === 'mkgEcommTheme') {
    require('./mkgEcomm/mkgEcommTheme.css')
  }

  return <BowlineProvider value={themes[theme]}>{children}</BowlineProvider>
}
