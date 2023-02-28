module.exports = {
  plugins: [
    "@babel/plugin-transform-runtime",
    // ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
    // "@babel/plugin-transform-object-assign",
    // ...(process.env.NET_ENV !== "preview" ? ["transform-remove-console"] : []),
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: true },
      },
    ],
    "@babel/preset-react",
  ],
};
