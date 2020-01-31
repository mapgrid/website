import dotenv from 'dotenv'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

dotenv.config({ path: '../../.env' })

export default {
    input: 'index.js',
    output: [
        {
            file: pkg.main,
            format: 'iife',
        },
    ],
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        replace({
            'process.env.REFERRALS_ORIGIN': JSON.stringify(
                process.env.REFERRALS_ORIGIN,
            ),
        }),
        terser(),
    ],
}
