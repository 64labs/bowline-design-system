import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
import scssVariables from 'postcss-advanced-variables'
import calc from 'postcss-calc'
import nesting from 'postcss-nesting'
import mapGet from 'postcss-map-get'
import functions from 'postcss-functions'
import cssImports from 'postcss-import'
import contrast from 'postcss-contrast'
import colorFunctions from 'postcss-color-function'
import defaultConfig from './config'
import {isLight, mod, baseliner} from './style-functions'

export default postcss.plugin('postcss-bowline', (rawopts = {}) => {
  // process css with all plugins
  return (root, result) => {
    const configPath = rawopts.configPath
      ? path.join(rawopts.configPath, 'bowline.config.js')
      : path.resolve(process.cwd(), 'bowline.config.js')

    const hasUserConfig = fs.existsSync(configPath)

    if (hasUserConfig) {
      delete require.cache[require.resolve(configPath)]
    }

    const userConfig = hasUserConfig ? require(configPath) : {}

    const variables = Object.assign({}, defaultConfig, userConfig)

    result.messages.push({
      type: 'dependency',
      parent: root.source.input.file,
      file: configPath,
    })

    const initializedPlugins = [
      cssImports({
        from: rawopts.from || process.cwd(),
      }),
      scssVariables({variables}),
      mapGet(),
      calc({mediaQueries: true, selectors: true}),
      functions({
        functions: {
          isLight,
          mod,
          baseliner: baseliner(variables),
        },
      }),
      contrast(),
      nesting(),
      colorFunctions(),
    ]

    return initializedPlugins.reduce(
      (promise, plugin) => promise.then(() => plugin(result.root, result)),
      Promise.resolve()
    )
  }
})
