import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import scssVariables from 'postcss-advanced-variables'
import calc from 'postcss-calc'
import nesting from 'postcss-nesting'
import mapGet from 'postcss-map-get'
import functions from 'postcss-functions'
import cssImports from 'postcss-import'
import colorFunctions from 'postcss-color-function'
import {resolveSpacingAtRules, resolveResponsiveAtRules} from './lib/atrules'

import {isLight, mod, baseliner, themeFunction} from './style-functions'

export default postcss.plugin('postcss-bowline', (rawopts = {}) => {
  // process css with all plugins
  return (root, result) => {
    const defaultConfigPath = path.resolve(__dirname, 'themes/baseTheme.js')
    const configPath = rawopts.configPath
      ? path.join(rawopts.configPath, 'bowline.config.js')
      : path.resolve(process.cwd(), 'bowline.config.js')

    const hasUserConfig = fs.existsSync(configPath)

    if (hasUserConfig) {
      delete require.cache[require.resolve(configPath)]
    }

    delete require.cache[require.resolve(defaultConfigPath)]

    const defaultConfig = require(defaultConfigPath)
    const userConfig = hasUserConfig ? require(configPath) : {}

    const theme = Object.assign({}, defaultConfig, userConfig)

    // create a special 'spacingNumbers' objects from theme spacing to only include int value (not vh or %)
    theme.spacingNumbers = Object.keys(theme.spacing).reduce((a, b) => {
      if (typeof theme.spacing[b] === 'string') {
        return a
      }
      return {...a, [b]: theme.spacing[b]}
    }, {})

    result.messages.push({
      type: 'dependency',
      parent: root.source.input.file,
      file: configPath,
    })

    const initializedPlugins = [
      cssImports({
        from: rawopts.from || process.cwd(),
      }),
      scssVariables({variables: theme, unresolved: 'ignore'}),
      mapGet(),
      calc({mediaQueries: true, selectors: true}),
      functions({
        functions: {
          isLight,
          mod,
          baseliner: baseliner(theme),
          theme: themeFunction(theme),
        },
      }),
      resolveSpacingAtRules(theme),
      resolveResponsiveAtRules(theme),
      nesting(),
      colorFunctions(),
    ]

    return initializedPlugins.reduce(
      (promise, plugin) => promise.then(() => plugin(result.root, result)),
      Promise.resolve()
    )
  }
})
