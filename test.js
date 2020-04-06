const fs = require('fs')
const postcss = require('postcss')
const cssnano = require('cssnano')
const plugin = require('./dist/postcss-plugin')

const css = `
  @bowline base;
`

postcss([plugin()])
  .process(css)
  .then((result) => {
    console.log(result.css)
    // fs.writeFile('./test.css', result.css, () => true)
  })
