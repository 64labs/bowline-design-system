const postcss = require('postcss')

export const resolveResponsiveAtRules = (config) => (css) => {
  const responsiveRules = postcss.root()
  const finalRules = []
  css.walkAtRules('responsive', (atRule) => {
    atRule.nodes.forEach((node) => responsiveRules.append(node.clone()))
    atRule.before(atRule.nodes)
    atRule.remove()
  })
  Object.keys(config.breakpoints).forEach((bpName) => {
    const mediaQueryAtRule = postcss.atRule({
      name: 'media',
      params: `(min-width: ${config.breakpoints[bpName]}px)`,
    })
    const clonedRoot = responsiveRules.clone()
    clonedRoot.walkRules((rule) => {
      rule.selectors = [`${rule.selectors}\\:${bpName}`]
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
