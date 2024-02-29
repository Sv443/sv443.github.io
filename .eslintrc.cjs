module.exports = {
  ignorePatterns: ["dist/"],
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [{ files: ["*.ts", "*.tsx"] }],
};
