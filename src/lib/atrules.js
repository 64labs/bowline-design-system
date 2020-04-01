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
