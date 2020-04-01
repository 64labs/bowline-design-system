const postcss = require("postcss")
const plugin = require("@64labs/bowline-design-system/postcss-plugin")

const css = `
@each $v $i in $breakpoints {
  @if $i == 0 {
    @media (max-width: calc(map-get($v, value) - 1)px) {
      content: 'foo';
    }
  } @else if $i != $lastBreakpointIndex {
    $n: theme('breakpoints[$i].name');
    @media (min-width: map-get($v, value)px) and (max-width: 10px) {
      ._stack-item:first-child {
        &.#{$n}\:display-none + ._stack-item {
          margin-top: 0 !important;
        }
        &.#{$n}\:display-none + ._stack-divider {
          display: none;
          & + ._stack-item {
            margin-top: 0;
          }
        }
      }
    }
  }
}
`

postcss([plugin])
  .process(css, { syntax: require("postcss-scss") })
  .then(css => {
    console.log(css.toString())
  })

// @media (max-width: calc(map-get($breakpoints, 1) - 1)px) {
//   ._stack-item:first-child {
//     &.display-none + ._stack-item {
//       margin-top: 0 !important;
//     }
//     &.display-none + ._stack-divider {
//       display: none;
//       & + ._stack-item {
//         margin-top: 0;
//       }
//     }
//   }
// }
