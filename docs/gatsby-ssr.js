const React = require("react")
const { BowlineProvider } = require("@64labs/bowline-design-system")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => {
  return <BowlineProvider>{element}</BowlineProvider>
}

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ position: "absolute", width: 0, height: 0 }}
      id="__SVG_SPRITE_NODE__"
      aria-hidden="true"
    ></svg>,
  ])
}
