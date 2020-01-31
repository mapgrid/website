import dotenv from 'dotenv'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

dotenv.config({ path: '../../.env' })
const prod = process.env.NODE_ENV === 'production'
const watch = process.env.ROLLUP_WATCH

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        sourcemap: true,
        format: 'iife',
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({ postcss: true }),
            dev: !prod,
            css: css => {
                css.write('public/bundle.css')
            },
        }),
        resolve({
            dedupe: ['svelte', 'svelte/internal'],
        }),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        !!watch && livereload(),
        !!prod && terser(),
    ],
}
