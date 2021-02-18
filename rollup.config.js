import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './src/umd-viewer-src.min.js',
  output: {
    file: './dist/umd-viewer.min.js',
    format: 'es'
  },
  plugins: [nodeResolve(), commonjs(), json()]
};