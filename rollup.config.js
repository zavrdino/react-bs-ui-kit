import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      exports: 'named',
      sourcemap: false,
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
      modules: true,
      use: ['sass'],
      minimize: true
    }),
  ],
  external: ['react', 'react-dom'],
};