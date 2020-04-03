const path = require('path')
const fs = require('fs')
const postcss = require('postcss')

export const resolveResponsiveAtRules = (config) => (css) => {
  const responsiveRules = postcss.root()
  const finalRules = []
  css.walkAtRules('responsive', (atRule) => {
    atRule.nodes.forEach((node) => {
      const clonedNode = node.clone()
      responsiveRules.append(clonedNode)
    })
    atRule.before(atRule.nodes)
    atRule.remove()
  })
  config.breakpoints.forEach((bp) => {
    const mediaQueryAtRule = postcss.atRule({
      name: 'media',
      params: `(min-width: ${bp.value}px)`,
    })
    const clonedRoot = responsiveRules.clone()
    clonedRoot.walkRules((rule) => {
      rule.selectors = rule.selectors.map((sel) => {
        if (/^\./.test(sel)) {
          return sel.replace(/^\./, `.${bp.name}\\:`)
        }
        return sel
      })
    })
    mediaQueryAtRule.append(clonedRoot)
    finalRules.push(mediaQueryAtRule)
  })
  css.append(finalRules)
}

export const resolveSpacingAtRules = (config) => (css) => {
  css.walkAtRules('spacing', (atRule) => {
    atRule.nodes.forEach((node) => {
      Object.keys(config.spacing).forEach((token) => {
        const s = postcss.rule({selector: `${node.selectors}-${token}`})
        const spaceValue = config.spacing[token]
        const unit = typeof spaceValue === 'number' ? 'px' : ''
        const regex = new RegExp('\\$' + atRule.params)
        s.append(node.clone().nodes)
        s.replaceValues(regex, {}, (str) => `${spaceValue}${unit}`)
        atRule.before(s)
      })
    })
    atRule.remove()
  })
}

export const resolveMqAtRules = (config) => (css) => {
  css.walkAtRules('mq', (atRule) => {
    const screen = atRule.params

    if (!_.has(theme.screens, screen)) {
      throw atRule.error(`No \`${screen}\` screen found.`)
    }

    atRule.name = 'media'
    atRule.params = `(min-width: ${theme.screens[mq]}px)`
  })
}

export const resolveBowlineAtRules = ({coreStyles}) => (css) => {
  css.walkAtRules('import', (atRule) => {
    if (
      atRule.params === '"bowline/base"' ||
      atRule.params === "'bowline/base'"
    ) {
      atRule.name = 'bowline'
      atRule.params = 'base'
    }
  })

  css.walkAtRules('bowline', (atRule) => {
    if (atRule.params === 'base') {
      const nodes = postcss.root({nodes: coreStyles})
      const bowlineCssPath = path.resolve(__dirname, 'bowline.css')
      const bowlineCss = fs.readFileSync(bowlineCssPath)

      nodes.append(postcss.parse(bowlineCss, {from: bowlineCssPath}))

      nodes.walk((node) => {
        node.source = atRule.source
      })

      atRule.before(nodes)

      atRule.remove()
    }
  })
}
