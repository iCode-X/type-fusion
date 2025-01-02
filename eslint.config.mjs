// eslint.config.js
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // 忽略以 _ 开头的函数参数
          argsIgnorePattern: '^_',
          // 忽略以 _ 开头的变量
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
      'no-unused-disable-directive': 'off',
    },
  },
];
