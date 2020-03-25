const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const bowline = require('./dist/postcss-plugin')

module.exports = {
  components: './playroom/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Bowline Design System',
  widths: [375, 768, 1024],
  port: 9000,
  openBrowser: false,
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/Frame.js',
  exampleCode: `
    <Stack padding={["large", "xlarge"]} align="center">
      <Text heading size="large">
        Don't sass me!
      </Text>
      <Inline space="small">
        <Button>Increase sass</Button>
        <Button weight="weak">Refrain</Button>
      </Inline>
    </Stack>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {modules: false}],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: false,
                symbolId: (filePath) => path.basename(filePath, '.svg'),
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [{inlineStyles: true}],
              },
            },
          ],
        },
        {
          test: /\.css?$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
            {
              loader: 'postcss-loader',
              options: {
                syntax: 'postcss-scss',
                plugins: [
                  bowline({
                    from: path.resolve(__dirname, '../'),
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [new SpriteLoaderPlugin({plainSprite: true})],
  }),
}
