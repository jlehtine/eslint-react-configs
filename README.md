# Opinionated ESLint configurations for React development

This package contains ESLint configurations I have found useful in my React
projects. In practice they are configurations utilizing the rules provided by
the `eslint-plugin-react` package.

My primary motivation for composing them into a public package has been to make
it easier to apply them consistently to my own projects. However, I am planning
to do my best to document the rationale behind the choices and to maintain
consistent semantic versioning for the package.

To install:

```shell
npm install -D @jlehtine/eslint-react-configs
```

The following ESLint flat configurations are provided by this package. Both
configurations include the `eslint-plugin-react` recommended configuration as
the starting point.

- `strict`: strict rules for discovering potential bugs and other issues
- `stylistic`: stylistic rules

Include the selected configurations in `eslint.config.mjs`:

```javascript
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactConfigs from "@jlehtine/eslint-react-configs";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...reactConfigs.configs.strict,
  ...reactConfigs.configs.stylistic,
);
```
