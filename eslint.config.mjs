import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
//   {
//     rules: {
//       "react/no-unescaped-entities": "off",
//       "@next/next/no-page-custom-font": "off",
//     },
//   },
// ];

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Override or disable rules here
  {
    rules: {
      // Example: turn off 'react/no-unescaped-entities'
      "react/no-unescaped-entities": "off",

      // Example: turn off '@next/next/no-page-custom-font'
      "@next/next/no-page-custom-font": "off",

      // Your rule from your error, e.g. disable unused vars globally (not always recommended)
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
