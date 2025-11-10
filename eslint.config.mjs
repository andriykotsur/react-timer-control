import eslint from '@eslint/js'
import eslintReactPlugin from 'eslint-plugin-react'
import eslintTs from 'typescript-eslint'

export default eslintTs.config(
  eslint.configs.recommended,
  eslintTs.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintReactPlugin.configs.flat.recommended,
  eslintReactPlugin.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      'react/destructuring-assignment': 'error',
      'react/jsx-no-useless-fragment': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }
)
