/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
  // rules: {
  //   'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  //   'no-unused-imports': 'error' // 這需要額外的 ESLint 插件
  // }
}
