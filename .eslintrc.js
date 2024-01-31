module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"], // Добавьте "prettier" сюда
  rules: {
    quotes: ["error", "double"],
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["error", "never"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    "no-undef": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
  },
};
