module.exports = {
  root: true,
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins
          // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Internal Imports
          [
            // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
            `^(${require('fs')
              .readdirSync('frontend', { withFileTypes: true })
              .filter((x) => x.isDirectory())
              .map((x) => x.name)
              .join('|')})(/.*|$)`,
          ],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
