// babel.config.js
export default {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};