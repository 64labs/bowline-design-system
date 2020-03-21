import 'focus-visible'
import React from 'react'
import {BowlineProvider} from '../dist'
import theme from '../dist/themes/defaultTheme'

export default ({children}) => {
  return <BowlineProvider theme={theme}>{children}</BowlineProvider>
}
