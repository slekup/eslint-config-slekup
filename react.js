import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";

import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import hooksPlugin from "eslint-plugin-react-hooks";

/// NOTE: Discontinued and not exported.
export default [
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["*.js", "*.mjs", "*.cjs", "*.jsx", "*.ts", "*.tsx"],
    plugins: {
      "react-hooks": fixupPluginRules(hooksPlugin),
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react/boolean-prop-naming": 0, // Enforce consistent naming of boolean props
      "react/button-has-type": 2, // Enforce explicit type property for button
      "react/default-props-match-prop-types": 2, // Enforce all defaultProps are defined and not 'required' in propTypes.
      "react/destructuring-assignment": 0, // Enforce consistent usage of destructured components
      "react/display-name": 0, // Prevent missing displayName in a React component definition
      "react/forbid-component-props": 0, // Forbid certain props on Components
      "react/forbid-dom-props": 0, // Forbid certain props on DOM Nodes
      "react/forbid-elements": 0, // Forbid certain elements
      "react/forbid-foreign-prop-types": 0, // Forbid using another component's propTypes
      "react/forbid-prop-types": 0, // Forbid certain propTypes
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ], // Enforce consistent usage of destructured components
      "react/iframe-missing-sandbox": 2, // Enforce that iframe elements must have a title attribute
      "react/jsx-boolean-value": [2, "never"], // Enforce boolean attributes notation in JSX
      "react/jsx-child-element-spacing": 0, // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
      "react/jsx-closing-bracket-location": [2, "line-aligned"], // Validate closing bracket location in JSX
      "react/jsx-closing-tag-location": 0, // Validate closing tag location in JSX
      "react/jsx-curly-brace-presence": [
        2,
        {
          children: "never",
          props: "never",
        },
      ], // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
      "react/jsx-curly-newline": 2, // Enforce or disallow newlines inside of curly braces in JSX attributes and expressions
      "react/jsx-curly-spacing": [
        2,
        "never",
        {
          allowMultiline: true,
        },
      ], // Enforce or disallow spaces inside of curly braces in JSX attributes
      "react/jsx-equals-spacing": [2, "never"], // Enforce or disallow spaces around equal signs in JSX attributes
      "react/jsx-filename-extension": 0, // Restrict file extensions that may contain JSX
      "react/jsx-first-prop-new-line": [2, "multiline-multiprop"], // Enforce position of the first prop in JSX
      "react/jsx-fragments": [2, "syntax"], // Enforce shorthand or standard form for React fragments
      "react/jsx-handler-names": [
        2,
        {
          checkInlineFunction: false,
          checkLocalVariables: false,
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ], // Enforce event handler naming conventions in JSX
      "react/jsx-indent": 0, // Validate JSX indentation
      "react/jsx-indent-props": 0, // Validate props indentation in JSX
      "react/jsx-key": [
        2,
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
        },
      ], // Validate JSX has key prop when in array or iterator
      "react/jsx-max-depth": 0, // Enforce a maximum depth that callbacks can be nested
      "react/jsx-max-props-per-line": [
        2,
        {
          maximum: 3,
          when: "multiline",
        },
      ], // Limit maximum of props on a single line in JSX
      "react/jsx-newline": [
        2,
        {
          prevent: true,
        },
      ], // Prevent missing parentheses around multilines JSX
      "react/jsx-no-bind": [
        2,
        {
          allowArrowFunctions: true,
          allowBind: false,
          ignoreRefs: true,
        },
      ], // Prevent usage of .bind() and arrow functions in JSX props
      "react/jsx-no-comment-textnodes": 2, // Prevent comments from being inserted as text nodes
      "react/jsx-no-constructed-context-values": 2, // Prevent passing of context values to Provider
      "react/jsx-no-duplicate-props": 2, // Prevent duplicate props in JSX
      "react/jsx-no-literals": 0, // Enforce no literals
      "react/jsx-no-script-url": 2, // Prevent usage of javascript: URLs
      "react/jsx-no-target-blank": 2, // Prevent usage of unsafe target='_blank'
      "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
      "react/jsx-no-useless-fragment": [
        2,
        {
          allowExpressions: true,
        },
      ], // Disallow unnecessary fragments
      "react/jsx-one-expression-per-line": 0, // Enforce one expression per line
      "react/jsx-pascal-case": [
        2,
        {
          ignore: [
            "h{}",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
            "a",
            "ul",
            "ol",
            "li",
            "img",
            "div",
            "span",
            "dl",
            "dt",
            "dd",
          ],
        },
      ], // Enforce PascalCase for user-defined JSX components
      "react/jsx-props-no-multi-spaces": 2, // Disallow multiple spaces between inline JSX props
      "react/jsx-props-no-spreading": 0, // Enforce props spreading on DOM elements
      "react/jsx-sort-props": 2, // Enforce props alphabetical sorting
      "react/jsx-tag-spacing": [
        2,
        {
          afterOpening: "never",
          beforeSelfClosing: "always",
          closingSlash: "never",
        },
      ], // Enforce spacing around jsx equals signs and curly braces in JSX props and prevent comments
      "react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
      "react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
      "react/jsx-wrap-multilines": 0, // Prevent missing parentheses around multilines JSX
      "react/no-access-state-in-setstate": 2, // Prevent using this.state inside this.setState
      "react/no-adjacent-inline-elements": 0, // Prevent adjacent inline elements not separated by whitespace.
      "react/no-array-index-key": 1, // Prevent usage of Array index in keys
      "react/no-arrow-function-lifecycle": 2, // Prevent usage of arrow functions in lifecycle methods
      "react/no-children-prop": 2, // Prevent passing of children as props.
      "react/no-danger": 2, // Prevent usage of dangerous JSX properties
      "react/no-danger-with-children": 2, // Prevent problem with children and props.dangerouslySetInnerHTML
      "react/no-deprecated": 2, // Prevent usage of deprecated methods
      "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
      "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
      "react/no-direct-mutation-state": 2, // Prevent direct mutation of this.state
      "react/no-find-dom-node": 2, // Prevent usage of findDOMNode
      "react/no-invalid-html-attribute": 2, // Prevent usage of invalid HTML attributes
      "react/no-is-mounted": 2, // Prevent usage of isMounted
      "react/no-multi-comp": 0, // Enforce a single React component per file
      "react/no-namespace": 2, // Prevent JSX prop spreading
      "react/no-redundant-should-component-update": 2, // Prevent usage of shouldComponentUpdate when extending React.PureComponent
      "react/no-render-return-value": 2, // Prevent usage of the return value of React.render
      "react/no-set-state": 2, // Prevent usage of setState
      "react/no-string-refs": 2, // Prevent using string references in ref attribute.
      "react/no-this-in-sfc": 2, // Prevent using this in stateless functional components
      "react/no-typos": 2, // Prevent common typos
      "react/no-unescaped-entities": 0, // Prevent invalid characters from appearing in markup
      "react/no-unknown-property": 2, // Prevent usage of unknown DOM property
      "react/no-unsafe": 2, // Prevent usage of unsafe lifecycle methods
      "react/no-unstable-nested-components": 2, // Prevent usage of unstable components inside components
      "react/no-unused-class-component-methods": 2, // Prevent unused class methods that are not a React lifecycle method
      "react/no-unused-prop-types": 2, // Prevent definitions of unused prop types
      "react/no-unused-state": 2, // Prevent definitions of unused state
      "react/no-will-update-set-state": 2, // Prevent usage of setState in componentWillUpdate
      "react/prefer-es6-class": 2, // Enforce ES5 or ES6 class for React Components
      "react/prefer-exact-props": 0, // Enforce exact proptypes definition
      "react/prefer-read-only-props": 2, // Enforce props readonly
      "react/prefer-stateless-function": [
        2,
        {
          ignorePureComponents: true,
        },
      ], // Enforce stateless React Components to be written as a pure function
      "react/prop-types": 0, // Prevent missing props validation in a React component definition
      "react/react-in-jsx-scope": 0, // Prevent missing React when using JSX
      "react/require-default-props": 0, // Enforce a defaultProps definition for every prop that is not a required prop
      "react/require-optimization": 0, // Enforce React components to have a shouldComponentUpdate method
      "react/require-render-return": 2, // Enforce ES5 or ES6 class for returning value in render function
      "react/self-closing-comp": 2, // Enforce self-closing style for JSX elements
      "react/sort-comp": 2, // Enforce component methods order
      "react/sort-default-props": 2, // Enforce defaultProps declarations alphabetical sorting
      "react/sort-prop-types": 2, // Enforce propTypes declarations alphabetical sorting
      "react/state-in-constructor": 2, // Enforces that a class component always initializes state in the constructor.
      "react/static-property-placement": 2, // Enforces where React component static properties should be positioned.
      "react/style-prop-object": 2, // Enforce style prop value being an object
      "react/void-dom-elements-no-children": 2, // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
      "react/hook-use-state": 2, // Enforce rules of Hooks
      "react-hooks/exhaustive-deps": 2, // Checks effect dependencies
      "react-hooks/rules-of-hooks": 2, // Checks rules of Hooks

      // JSDoc (documentation) rules
      "jsdoc/require-jsdoc": 0, // Requires that all functions (? other contexts) have a JSDoc block.

      // ESLint
      "comma-spacing": 0, // Enforces consistent spacing before and after commas.
      "no-console": 0, // Disallow the use of console
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
