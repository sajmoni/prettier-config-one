export default {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  experimentalTernaries: true,
  overrides: [
    {
      files: ["tsconfig.json"],
      options: {
        parser: "jsonc",
      },
    },
  ],
};
