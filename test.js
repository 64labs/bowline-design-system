const postcss = require('postcss')
const plugin = require('./dist/postcss-plugin')

const css = `
@each $v $k in $border {
  @if $k == radius {
    @each $i $j in $v {
      .radius-#{$j} {
        border-radius: $i;
      }
    }
  }
}
`

postcss([plugin])
  .process(css, {syntax: require('postcss-scss')})
  .then((css) => {
    console.log(css.toString())
  })
