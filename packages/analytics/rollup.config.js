import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
    input: 'index.js',
    output: [
        {
            file: pkg.main,
            format: 'iife',
        },
    ],
    plugins: [resolve(), commonjs(), terser()],
}
