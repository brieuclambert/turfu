module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    DATA: true,
    TEST_ID: true,
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-new": "off"
  }
};
