export default {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  overrides: [
    {
      files: ["tsconfig.json"],
      options: {
        parser: "jsonc",
      },
    },
  ],
};
