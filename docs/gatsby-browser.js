const React = require("react")
const { BowlineProvider } = require("@64labs/bowline-design-system")
const Layout = require("./src/components/layout").default

require("focus-visible")
require("typeface-open-sans")

const svgIcons = require.context(
  "@64labs/bowline-design-system/icons",
  false,
  /.*\.svg$/
)
svgIcons.keys().map(svgIcons)

exports.wrapRootElement = ({ element }) => {
  return <BowlineProvider>{element}</BowlineProvider>
}

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
