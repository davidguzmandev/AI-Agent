import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    // Enable both Node and ES2022 environments
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Node.js built-ins (require, __dirname, etc.)
      },
    },

    // Extend from recommended configs
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // disables ESLint rules that conflict with Prettier
    ],

    // Custom rules
    rules: {
      "no-console": "off", // allow console.log for now
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
