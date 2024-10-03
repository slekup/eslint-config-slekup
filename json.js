import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsonParser from "jsonc-eslint-parser";

export default [
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  {
    // ignores: ["**/package.json"],
    files: ["*.json", "*.jsonc", "*.json5"],
    languageOptions: {
      parser: jsonParser,
    },
    rules: {
      "jsonc/auto": 0, // Automatically configures the parser and plugin based on the file being linted
      "jsonc/key-name-casing": 0, // Enforces a consistent key name casing for object keys
      "jsonc/no-bigint-literals": 2, // Disallows BigInt literals
      "jsonc/no-binary-expression": 2, // Disallows binary expressions in favor of -0 and +0
      "jsonc/no-binary-numeric-literals": 2, // Disallows binary numeric literals
      "jsonc/no-comments": 2, // Disallows comments
      "jsonc/no-escape-sequence-in-identifier": 2, // Disallows escape sequences in identifiers
      "jsonc/no-hexadecimal-numeric-literals": 2, // Disallows hexadecimal numeric literals
      "jsonc/no-infinity": 2, // Disallows Infinity literals
      "jsonc/no-nan": 2, // Disallows NaN literals
      "jsonc/no-number-props": 2, // Disallows numeric property keys
      "jsonc/no-numeric-separators": 2, // Disallows numeric separators
      "jsonc/no-octal-numeric-literals": 2, // Disallows octal numeric literals
      "jsonc/no-parenthesized": 2, // Disallows parenthesized expressions as the left-hand side of assignments
      "jsonc/no-plus-sign": 2, // Disallows unary plus operators
      "jsonc/no-regexp-literals": 2, // Disallows RegExp literals
      "jsonc/no-template-literals": 2, // Disallows template literals
      "jsonc/no-undefined-value": 2, // Disallows undefined values
      "jsonc/no-unicode-codepoint-escapes": 2, // Disallows Unicode code point escape sequences
      "jsonc/sort-array-values": 0, // Enforces that array elements are sorted
      "jsonc/sort-keys": 0, // Enforces that object keys are sorted
      "jsonc/valid-json-number": 2, // Enforces valid JSON numbers
      "jsonc/vue-custom-block/no-parsing-error": 2, // Disallows parsing errors in Vue custom blocks

      // Extension rules
      "jsonc/array-bracket-newline": 0, // Enforces line breaks after opening and before closing array brackets
      "jsonc/array-bracket-spacing": 2, // Disallows spaces inside of brackets on arrays
      "jsonc/array-element-newline": 0, // Enforces line breaks between array elements
      "jsonc/comma-dangle": 2, // Disallows trailing commas in object literals
      "jsonc/comma-style": [2, "last"], // Enforces consistent comma style
      "jsonc/indent": [2, 2], // Enforces indentation
      "jsonc/key-spacing": 2, // Enforces consistent spacing between keys and values in object literal properties
      "jsonc/no-dupe-keys": 2, // Disallows duplicate keys in object literals
      "jsonc/no-floating-decimal": 2, // Disallows floating decimal points
      "jsonc/no-irregular-whitespace": 2, // Disallows irregular whitespace
      "jsonc/no-multi-str": 2, // Disallows multiline strings
      "jsonc/no-octal-escape": 2, // Disallows octal escape sequences
      "jsonc/no-octal": 2, // Disallows octal literals
      "jsonc/no-sparse-arrays": 2, // Disallows sparse arrays
      "jsonc/no-useless-escape": 2, // Disallows unnecessary escape characters
      "jsonc/object-curly-newline": 2, // Enforces line breaks between curly braces
      "jsonc/object-curly-spacing": 0, // Enforces consistent spacing inside braces
      "jsonc/object-property-newline": 2, // Enforces placing object properties on separate lines
      "jsonc/quote-props": 2, // Enforces consistent quote style of object literal property keys
      "jsonc/quotes": 2, // Enforces the consistent use of either double or single quotes
      "jsonc/space-unary-ops": 2, // Enforces consistent spacing before or after unary operators
    },
  },
];
