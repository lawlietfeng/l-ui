module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // 去除按需引入import的报错
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended'],
  plugins: ['vue'],
  rules: {
    "semi": "warn"
  },
}
