import React from 'react'
import {BowlineContext} from '../dist'
import theme from '../dist/themes/baseTheme'

import 'focus-visible'
import './playroom.css'
import '../dist/base.css'

const Provider = BowlineContext.Provider

export default ({children}) => {
  return <Provider value={theme}>{children}</Provider>
}
