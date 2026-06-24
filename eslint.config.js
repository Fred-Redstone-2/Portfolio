/* eslint-disable @typescript-eslint/no-require-imports */
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
  // 1. Les exclusions globales (s'appliquent à tous les types de fichiers)
  {
    ignores: ['projects/**/*', 'node_modules/**/*', 'out/**/*', 'coverage/**/*'],
  },

  // 2. Configuration et règles de base (JavaScript & TypeScript)
  {
    files: ['**/*.js', '**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      // Note : Bien que le projet soit 100% client, les variables globales Node (process, Buffer...)
      // ont été conservées ici pour correspondre exactement à votre ancien fichier basic.
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
      },
    },
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'semi': ['error', 'always'],
      'eqeqeq': ['error', 'smart'],
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': 'error',
      'brace-style': ['error', '1tbs'],
      'complexity': ['error', 15],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': ['error', { code: 150, ignoreComments: true, ignoreTrailingComments: true }],
      'max-lines': ['error', { max: 350, skipBlankLines: true, skipComments: true }],
      'max-params': ['error', 5],
      'max-classes-per-file': ['error', 3],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-empty': 'error',
      'no-eval': 'error',
      'no-invalid-this': 'error',
      'no-restricted-imports': ['error', { patterns: ['../*'] }],
      'no-fallthrough': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-return-assign': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      'radix': 'error',
      'use-isnan': 'error',
      'guard-for-in': 'error',
    },
  },

  // 3. Règles TypeScript et Angular associées aux fichiers source (.ts)
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      // --- Règles TypeScript ---
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1, 2],
          ignoreArrayIndexes: true,
          ignoreClassFieldInitialValues: true,
          ignoreEnums: true,
          ignoreReadonlyClassProperties: true,
        },
      ],
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true, ignoreProperties: true },
      ],
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'default',
          trailingUnderscore: 'allow',
          filter: { regex: '^(_id|__v)$', match: false },
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          selector: 'variable',
          trailingUnderscore: 'allow',
        },
        {
          format: ['PascalCase'],
          selector: 'typeLike',
        },
        {
          format: ['PascalCase'],
          selector: 'enumMember',
        },
      ],

      // --- Règles Angular (.ts) ---
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/no-input-rename': 'error',
    },
  },

  // 4. Surcharges pour les fichiers de tests (.spec.ts)
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/dot-notation': 'off',
    },
  },

  // 5. Configuration pour les templates HTML Angular
  {
    files: ['**/*.html'],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    languageOptions: {
      parser: angular.templateParser,
    },
    plugins: {
      '@angular-eslint/template': angular.templatePlugin,
    },
    rules: {},
  },
]);
