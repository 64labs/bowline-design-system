const fs = require("fs")
const postcss = require("postcss")
const plugin = require("@64labs/bowline-design-system/postcss-plugin")

const css = `
  @bowline base;
`

postcss([plugin])
  .process(css, { syntax: require("postcss-scss") })
  .then(result => {
    // console.log(result.toString())
    fs.writeFile("./test.css", result.css, () => true)
    // if (result.map) {
    //   fs.writeFile("./test.css.map", result.map, () => true)
    // }
  })
