module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    ENV: true,
  },
  rules: {
    // 这里填入你的项目需要的个性化配置，比如：
    //
    // // @fixable 一个缩进必须用两个空格替代
    semi: ["error", "never"],
    "no-console": "off",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
        caughtErrors: "none",
      },
    ],
    "max-nested-callbacks": "off",
    "typescript/member-ordering": "off",
    "typescript/member-delimiter-style": "off",
    "import/no-unresolved": 0,
    indent: [
      "off",
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
  },
}
