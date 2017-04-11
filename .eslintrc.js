module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ],
    // "linebreak-style": [
    //   2,
    //   "unix"
    // ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
    "no-unused-vars": 0,
    "no-undef": 0,
  }
};