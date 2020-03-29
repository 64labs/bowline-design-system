const postcss = require("postcss")
const plugin = require("@64labs/bowline-design-system/postcss-plugin")

const css = `
  $fg: map-get(map-get($colors, foreground), 0);

  @each $color $tone in $fg {
    .tone-#{$tone} {
      color: $color;
    }
  }

`

postcss([plugin])
  .process(css, { syntax: require("postcss-scss") })
  .then(css => {
    console.log(css.toString())
  })
