import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbTs from "eslint-config-airbnb-typescript";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

  // Directly configure all rules and settings instead of using "extends"
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parser: "@typescript-eslint/parser", // Use TypeScript parser
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // ES modules
      project: "./tsconfig.json",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  // Merging plugins directly without using "extends"
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
  ],

  rules: {
    "react/react-in-jsx-scope": "off", // React is automatically in scope with JSX
    "react/jsx-uses-react": "off", // No need to import React explicitly
    "react/jsx-props-no-spreading": "warn", // Warn about prop spreading
    "react/no-unescaped-entities": "off", // Disable warning for unescaped entities
    // Other custom rules...
  },

  // Directly include recommended configurations (not using "extends")
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginReact.configs.recommended,
  ...airbnbBase,
  ...airbnbTs,
  ...prettier.configs.recommended, // Add Prettier plugin for formatting
};
