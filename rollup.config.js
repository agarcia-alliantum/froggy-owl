import serve from "rollup-plugin-serve";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import json from "@rollup/plugin-json";
import terser from "rollup-plugin-terser";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { string }from "rollup-plugin-string";
import sourcemaps from 'rollup-plugin-sourcemaps';

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    input: "src/main.js",
    output: [
      {
        sourcemap: true,
        file: "dist/bundle.js",
        format: "esm",
      },
    ],
    plugins: [
      replace({
        "process.env.OWL_ENV": isProduction ? '"production"' : '"dev"',
        preventAssignment: true,
      }),
      nodeResolve({ preferBuiltins: true }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        extract: true,
        minimize: isProduction,
        // modules: true,
      }),
      commonjs(),
      json({
        compact: true,
      }),
      string({
        include: "src/templates/**/*.html",
        //htmlMinifierOptions: {
        //  collapseWhitespace: true,
        //  collapseBooleanAttributes: true,
        //  conservativeCollapse: true,
        //  minifyJS: true
        //}
      }),
      builtins(),
      globals(),
      copy({
        targets: [{ src: "public/*", dest: "dist" }],
      }),
      babel({
        exclude: "node_modules/**",
        sourceMaps: true,
        sourceMap: true,
      }),
      sourcemaps(),
      !isProduction &&
        serve({
          open: false,
          verbose: true,
          contentBase: ["dist", "public"],
          host: "localhost",
          port: 8080,
        }),
      !isProduction && livereload(),
      isProduction && terser.terser(),
    ],
    sourceMap: true,
    watch: {
      exclude: ["node_modules/**"],
    },
  },
];
