const postcss = require("postcss")
const plugin = require("@64labs/bowline-design-system/postcss-plugin")

const css = `
@each $value $label in $shadows {
  .shadow-#{$label} {
    box-shadow: theme('shadows.$label.style') theme('shadows.$label.color');
  }

  @each $color $tone in $base-colors {
    .shadow-#{$label}-on-#{$tone} {
      box-shadow: theme('shadows.$label.style') isLight(
          $color,
          theme('shadows.$label.color'),
          theme('shadows.$label.colorInverted', white)
        );
    }
  }
}
`

postcss([plugin])
  .process(css, { syntax: require("postcss-scss") })
  .then(css => {
    console.log(css.toString())
  })
