import ts from "@wessberg/rollup-plugin-ts";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const PLUGINS = [
  resolve(),
  ts(),
  external(),
  commonjs({
    extensions: [".js", ".ts"],
  }),
];

export default {
  input: {
    A: "./lib/A/index.ts",
  },
  plugins: PLUGINS,
  output: {
    dir: "./build",
    format: "es",
    compact: true,
    chunkFileNames: "_/[name]-[hash].js",
    sourcemap: "inline",
  },
};
