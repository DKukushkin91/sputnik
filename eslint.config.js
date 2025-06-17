import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import stylisticPlugin from '@stylistic/eslint-plugin'
import { globalIgnores } from 'eslint/config'

export default [
  globalIgnores([
    '**/node_modules/**',
    '**/public/**',
    '**/src/assets/**',
  ]),
  stylisticPlugin.configs.recommended,
  {
    files: ['**/*.{ts,mts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'multiline-comment-style': 'off',
      'no-negated-condition': 'off',
      'require-atomic-updates': 'off',
      'id-length': ['error', { exceptions: ['t'] }],

      // @stylistic
      '@stylistic/max-len': [
        'error', {
          code: 140,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      '@stylistic/object-property-newline': [
        'error',
        { allowAllPropertiesOnSameLine: false },
      ],
    },
  },
]
