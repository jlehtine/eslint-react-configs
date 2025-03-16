import react from "eslint-plugin-react";

// -----------------------------------------------------------------------
// Print all eslint-plugin-react rules that are not in the recommended set
// -----------------------------------------------------------------------

const allRules = react.configs.flat.all.rules,
  recommendedRules = react.configs.flat.recommended.rules;

console.log(
  JSON.stringify(
    Object.keys(allRules)
      .filter((name) => recommendedRules[name] === undefined)
      .sort(),
    undefined,
    2,
  ),
);
