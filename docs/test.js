const postcss = require("postcss")
const plugin = require("@64labs/bowline-design-system/postcss-plugin")

const css = `
  @import '@64labs/bowline-design-system/base.css';

  .foo {
    color: red;
  }
`

postcss([plugin])
  .process(css, { syntax: require("postcss-scss") })
  .then(css => {
    console.log(css.toString())
  })
