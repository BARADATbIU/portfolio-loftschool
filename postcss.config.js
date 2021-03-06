module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".scss"
    }),
    require("autoprefixer")({
      cascade: false
    }),
    require("postcss-preset-env")(),
    require("postcss-pxtorem")({
      propList: ["*"],
      selectorBlackList: [":root"],
      minPixelValue: 6
    }),
    require("postcss-advanced-variables")({
      variables: require("./src/assets/styles/variables")
    }),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-comment"),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/assets/images/icons"
    }),
    require("postcss-svgo"),
    require("cssnano")()
  ]
};
