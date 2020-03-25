import React from 'react'
import {BowlineProvider} from '../dist'
import theme from '../dist/themes/baseTheme'

import 'focus-visible'
import './playroom.css'
import '../dist/base.css'

const svgIcons = require.context('../dist/icons', false, /.*\.svg$/)
svgIcons.keys().map(svgIcons)

export default ({children}) => {
  return <BowlineProvider value={theme}>{children}</BowlineProvider>
}
