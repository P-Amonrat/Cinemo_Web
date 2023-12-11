module.exports = {
    // Your ESLint rules and configuration go here
    // For example:
    rules: {
      'no-console': 'off',
    },
    parserOptions: {
      ecmaVersion: 2022, // or the ECMAScript version you are using
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      parser: 'babel-eslint', // Add this line
    },
    env: {
      node: true, // if your project is a Node.js project
      browser: true, // if your project is a browser-based project
    },
  };
  