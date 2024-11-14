module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@entities": "./src/entities",
          "@repositories": "./src/repositories",
          "@middlewares": "./src/middlewares",
          "@utils": "./src/utils/",
          "@config": "./src/config/",
          "@routes": "./src/routes/",
          "@services": "./src/services/",
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
