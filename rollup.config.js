import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import cssImports from 'postcss-import'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const mainConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/' + pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/' + pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    json(),
    postcss({
      modules: false,
      syntax: 'postcss-scss',
      plugins: [cssImports()],
      extract: 'dist/base.css',
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['react-docgen'],
    }),
    resolve(),
    commonjs(),
    copy({
      targets: [
        {src: 'src/svg/*.svg', dest: 'dist/icons'},
        {src: 'src/config.js', dest: 'dist/themes', rename: 'baseTheme.js'},
      ],
    }),
  ],
}

const pluginConfig = {
  input: 'src/postcss-plugin.js',
  output: {
    file: 'dist/postcss-plugin.js',
    format: 'cjs',
    sourcemap: false,
  },
  plugins: [],
}

const configs = [mainConfig]

// if (isProduction) {
configs.push(pluginConfig)
// }

export default configs
