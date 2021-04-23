module.exports = {
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended" // 添加 prettier 插件
  ],
  plugins: ["html", "typescript"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  globals: {
    wx: true,
    Image: true,
    FileReader: true,
    FormData: true
  },
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/no-multiple-template-root": "off",
    "no-useless-return": 0,
    "no-unreachable": 1,
    "no-new": 0,
    "prefer-promise-reject-errors": 1
  }
};
