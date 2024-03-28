module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {}
};
