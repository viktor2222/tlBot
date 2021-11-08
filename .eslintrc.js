module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'prettier-standard'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-unused-vars': 0
  }
}
