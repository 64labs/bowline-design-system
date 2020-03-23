const bowline = require(`@64labs/bowline-design-system/postcss-plugin.js`)

module.exports = () => ({
  syntax: "postcss-scss",
  plugins: [bowline()],
})
