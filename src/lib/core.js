import path from 'path'
import postcss from 'postcss'
import parser from 'postcss-selector-parser'
import postcssNested from 'postcss-nested'
import postcssJs from 'postcss-js'
import flatMap from 'lodash.flatmap'
import styleMap from './utils/styleMap'

// plugins
import color from './plugins/color'
import backgroundColor from './plugins/backgroundColor'
import margin from './plugins/margin'
import padding from './plugins/padding'
import sizing from './plugins/sizing'
import display from './plugins/display'
import grid from './plugins/grid'
import flexbox from './plugins/flexbox'
import position from './plugins/position'
import overflow from './plugins/overflow'
import border from './plugins/border'
import borderColor from './plugins/borderColor'
import borderRadius from './plugins/borderRadius'
import boxShadow from './plugins/boxShadow'
import fontFamily from './plugins/fontFamily'
import fontSize from './plugins/fontSize'
import fontWeight from './plugins/fontWeight'
import letterSpacing from './plugins/letterSpacing'
import textAlign from './plugins/textAlign'
import textTransform from './plugins/textTransform'
import components from './plugins/components'

const plugins = [
  color(),
  backgroundColor(),
  margin(),
  padding(),
  sizing(),
  display(),
  grid(),
  flexbox(),
  position(),
  overflow(),
  border(),
  borderColor(),
  borderRadius(),
  boxShadow(),
  fontFamily(),
  fontSize(),
  fontWeight(),
  letterSpacing(),
  textAlign(),
  textTransform(),
  components(),
]

const initPlugin = (root, theme, plugin) => {
  const pluginResult = plugin({theme})

  const styles = postcss.root({
    nodes: parseObjectStyles(pluginResult.styles),
  })

  let result = styles

  let atRules = {}

  if (pluginResult.variants && pluginResult.variants.includes('responsive')) {
    const rules = styles.nodes
    const clonedRules = (Array.isArray(rules) ? rules : [rules]).map((node) =>
      node.clone()
    )
    result = postcss.atRule({name: 'responsive'}).append(clonedRules)
  }

  const r = result.clone()

  r.walkAtRules('media', (atRule) => {
    atRule.remove()
    addToAtRules(atRule, atRules)
  })

  Object.keys(atRules).forEach((key) => {
    r.append(atRules[key])
  })

  if (theme.prefix) {
    r.walkRules((rule) => {
      rule.selector = prefixSelectors(theme.prefix, rule.selector)
    })
  }

  root.append(r)
}

export default ({theme}) => {
  const root = postcss.root()

  plugins.forEach((plugin) => initPlugin(root, theme, plugin))

  return root.nodes
}

function parseObjectStyles(styles) {
  if (!Array.isArray(styles)) {
    return parseObjectStyles([styles])
  }

  return flatMap(styles, (style) => {
    return postcss([postcssNested()]).process(style, {
      parser: postcssJs,
    }).root.nodes
  })
}

function prefixSelectors(prefix, selector) {
  return parser((selectors) => {
    selectors.walkClasses((classSelector) => {
      classSelector.value = `${prefix}${classSelector.value}`
    })
  }).processSync(selector)
}

function addToAtRules(atRule, atRules) {
  const key = atRule.params

  if (!atRules[key]) {
    atRules[key] = postcss.atRule({name: atRule.name, params: atRule.params})
  }
  atRule.nodes.forEach((node) => {
    atRules[key].append(node.clone())
  })

  atRule.remove()
}
