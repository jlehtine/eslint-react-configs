import eslintReact from "eslint-plugin-react";
import { ERROR, WARNING } from "./severity.js";

const strictRules = [
  "react/button-has-type",
  "react/checked-requires-onchange-or-readonly",
  "react/default-props-match-prop-types",
  "react/forbid-component-props",
  "react/forbid-foreign-prop-types",
  "react/forbid-prop-types",
  "react/forward-ref-uses-ref",
  "react/hook-use-state",
  "react/iframe-missing-sandbox",
  "react/jsx-child-element-spacing",
  "react/jsx-filename-extension",
  "react/jsx-no-bind",
  "react/jsx-no-constructed-context-values",
  "react/jsx-no-leaked-render",
  "react/jsx-no-script-url",
  "react/jsx-props-no-spread-multi",
  "react/no-access-state-in-setstate",
  "react/no-array-index-key",
  "react/no-arrow-function-lifecycle",
  "react/no-did-mount-set-state",
  "react/no-did-update-set-state",
  "react/no-invalid-html-attribute",
  "react/no-namespace",
  "react/no-object-type-as-default-prop",
  "react/no-redundant-should-component-update",
  "react/no-this-in-sfc",
  "react/no-typos",
  "react/no-unstable-nested-components",
  "react/no-unused-class-component-methods",
  "react/no-unused-prop-types",
  "react/no-unused-state",
  "react/no-will-update-set-state",
  "react/prefer-exact-props",
  "react/void-dom-elements-no-children",
];

const strictRulesConfig = {
  "react/jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"], ignoreFilesWithoutCode: true }],
  "react/jsx-no-useless-fragment": WARNING,
  "react/jsx-pascal-case": WARNING,
};

const stylisticRules = [
  "react/destructuring-assignment",
  "react/function-component-definition",
  "react/jsx-curly-brace-presence",
  "react/jsx-fragments",
  "react/jsx-handler-names",
  "react/jsx-no-useless-fragment",
  "react/jsx-pascal-case",
  "react/no-multi-comp",
  "react/prefer-es6-class",
  "react/prefer-stateless-function",
  "react/self-closing-comp",
  "react/state-in-constructor",
  "react/static-property-placement",
  "react/style-prop-object",
];

const stylisticRulesConfig = {
  "react/jsx-curly-brace-presence": [ERROR, { props: "never", children: "never", propElementValues: "always" }],
  "react/self-closing-comp": [ERROR, { component: true, html: false }],
};

const ignoredRules = [
  "react/boolean-prop-naming",
  "react/forbid-dom-props",
  "react/forbid-elements",
  "react/jsx-boolean-value",
  "react/jsx-closing-bracket-location",
  "react/jsx-closing-tag-location",
  "react/jsx-curly-newline",
  "react/jsx-curly-spacing",
  "react/jsx-equals-spacing",
  "react/jsx-first-prop-new-line",
  "react/jsx-indent",
  "react/jsx-indent-props",
  "react/jsx-max-depth",
  "react/jsx-max-props-per-line",
  "react/jsx-newline",
  "react/jsx-no-literals",
  "react/jsx-one-expression-per-line",
  "react/jsx-props-no-multi-spaces",
  "react/jsx-props-no-spreading",
  "react/jsx-sort-props",
  "react/jsx-tag-spacing",
  "react/jsx-wrap-multilines",
  "react/no-adjacent-inline-elements",
  "react/no-danger",
  "react/no-set-state",
  "react/prefer-read-only-props",
  "react/require-default-props",
  "react/require-optimization",
  "react/sort-comp",
  "react/sort-default-props",
  "react/sort-prop-types",
];

export default {
  configs: {
    strict: [
      eslintReact.configs.flat.recommended,
      {
        rules: {
          ...Object.fromEntries(strictRules.map((rule) => [rule, ERROR])),
          ...strictRulesConfig,
        },
      },
    ],
    stylistic: [
      eslintReact.configs.flat.recommended,
      {
        rules: {
          ...Object.fromEntries(stylisticRules.map((rule) => [rule, ERROR])),
          ...stylisticRulesConfig,
        },
      },
    ],
  },
  ruleNames: {
    strict: strictRules,
    stylistic: stylisticRules,
    ignored: ignoredRules,
  },
};
