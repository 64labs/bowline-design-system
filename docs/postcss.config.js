const bowline = require(`@64labs/bowline-design-system/postcss-plugin.js`)
const postcssScss = require("postcss-scss")

module.exports = () => ({
  syntax: postcssScss,
  plugins: [bowline()],
})
