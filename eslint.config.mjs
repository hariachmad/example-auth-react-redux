import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      'react/no-unescaped-entities': 'error',
      'no-console': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'import/no-unresolved': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase','PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
]);

export default eslintConfig;