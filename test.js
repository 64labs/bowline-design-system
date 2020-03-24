const postcss = require('postcss')
const plugin = require('./dist/postcss-plugin')

const css = `
@each $v $k in $fontWeights {
  .text-weight-#{$k} {
    font-weight: $v;
  }
}
`

postcss([plugin])
  .process(css, {syntax: require('postcss-scss')})
  .then((css) => {
    console.log(css.toString())
  })
