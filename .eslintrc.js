module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-unused-vars': 'off', //Vue项目中eslint提示 'xxx' is defined but never used
    'linebreak-style': ['error', 'windows'], //VUE项目中eslint报错 Expected linebreaks to be 'LF' but found 'CRLF'
  },
}
