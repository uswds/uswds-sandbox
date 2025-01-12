/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: false,
  indentSchema: true,
  plugins: ["@shopify/prettier-plugin-liquid"],
};

export default config;
