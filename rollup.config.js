// // Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import node_resolve from "@rollup/plugin-node-resolve";
import { babel } from '@rollup/plugin-babel';

export default {
 input: './src/index.ts', // our source file
 output: [
  {
   file: pkg.main,
   format: 'cjs'
  },
  {
   file: pkg.module,
   format: 'es' // the preferred format
  },
  {
   file: pkg.browser,
   format: 'iife',
   name: 'play' // the global which can be used in a browser
  }
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [
    node_resolve(),
    babel({
        plugins: ["@babel/plugin-proposal-class-properties"]
    }),
    css(),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser(
        // {
        // ecma: 2020,
        // module: true,
        // warnings: true,
        // }
    ),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['./src/styles/**/*'],
    }),
    // Support Typescript
  typescript({ 
   typescript: require('typescript'),
  }),
 ],
//  preserveEntrySignatures: 'strict',
}