import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcssPresetEnv from 'postcss-preset-env';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      mainFields: ['module', 'jsnext:main', 'main'],
    }),
    commonjs({
      include: '/node_modules/',
    }),
    typescript(),
    terser(),
    postcss({
      extract: true,
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      },
      use: ['sass'],
      minimize: true,
      plugins: [
        postcssPresetEnv({
          stage: 0,
          features: {
            'custom-properties': true,
          },
        }),
      ],
    }),
  ],
  external: ['react', 'react-dom'],
};