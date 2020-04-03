import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import nesting from 'postcss-nesting'
import functions from 'postcss-functions'
import colorFunctions from 'postcss-color-function'
import get from 'lodash.get'
import * as atRules from './lib/atrules'
import core from './lib/core'

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

    const bps = Object.keys(theme.screens).map((bpName) => ({
      name: bpName,
      value: theme.screens[bpName],
    }))

    theme.breakpoints = [...bps].sort((a, b) => {
      if (a.value < b.value) {
        return -1
      }
      if (a.value > b.value) {
        return 1
      }
      return 0
    })

    theme.spacing.nudge1 = 1
    theme.spacing.nudge2 = 2

    result.messages.push({
      type: 'dependency',
      parent: root.source.input.file,
      file: configPath,
    })

    const coreStyles = core({theme})

    const initializedPlugins = [
      atRules.resolveBowlineAtRules({theme, coreStyles}),
      atRules.resolveMqAtRules(theme),
      atRules.resolveSpacingAtRules(theme),
      atRules.resolveResponsiveAtRules(theme),
      atRules.resolveComponentAtRules(theme),

      functions({
        functions: {
          theme: (path, ...defaultValue) => {
            const value = get(
              theme,
              path.trim().replace(/('|")/g, ''),
              defaultValue
            )
            return Array.isArray(value) ? value.join(', ') : value
          },
        },
      }),
      colorFunctions(),
      nesting(),
    ]

    return initializedPlugins.reduce(
      (promise, plugin) => promise.then(() => plugin(result.root, result)),
      Promise.resolve()
    )
  }
})
