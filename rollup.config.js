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
      exclude: /bowline\.css/,
      modules: {
        generateScopedName: '[emoji]-[hash:base64:5]',
        hashPrefix: 'prefix',
      },
      plugins: [cssImports()],
      extract: 'dist/components.css',
    }),
    postcss({
      include: /bowline\.css/,
      modules: false,
      plugins: [cssImports()],
      extract: 'dist/bowline.css',
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins:
        process.env.DOCS_BUILD || process.env.NODE_ENV !== 'production'
          ? ['react-docgen']
          : [],
    }),
    resolve(),
    commonjs(),
    copy({
      targets: [
        {src: 'package.json', dest: 'dist'},
        {src: 'README.md', dest: 'dist'},
        {src: 'src/svg/*.svg', dest: 'dist/icons'},
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

const themeConfig = {
  input: 'src/config.js',
  output: {
    file: 'dist/themes/baseTheme.js',
    format: 'cjs',
    sourcemap: false,
  },
  plugins: [],
}

const configs = [mainConfig, pluginConfig, themeConfig]

export default configs
