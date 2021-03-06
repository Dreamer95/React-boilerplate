module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: false,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        jsxBracketSameLine: false,
        arrowParens: 'always',
        htmlWhitespaceSensitivity: 'strict',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-mixed-spaces-and-tabs': 0,
    useTabs: 0,
    indent: [0, 'tab'],
    'no-tabs': ['error', {allowIndentationTabs: true}],
    'max-len': ['error', {code: 120, ignoreUrls: true}],
    'no-confusing-arrow': ['error', {allowParens: false}],
    quotes: ['error', 'single'],
    semi: ['error', 'always', {omitLastInOneLineBlock: true}],
    'semi-spacing': ['error', {before: false, after: true}],
    'object-curly-spacing': ['error', 'never'],
    'lines-between-class-members': ['error', 'always'],
    'default-case': 0,
    'space-infix-ops': ['error', {int32Hint: false}],
    'comma-dangle': [2, 'always-multiline'],
    'no-prototype-builtins': 0,
    'guard-for-in': 0,
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-unused-vars': ['warn'],
    curly: ['error', 'all'],
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {blankLine: 'always', prev: ['import'], next: '*'},
      {
        blankLine: 'any',
        prev: ['import'],
        next: ['import'],
      },
      {blankLine: 'always', prev: '*', next: ['export']},
      {
        blankLine: 'any',
        prev: ['export'],
        next: ['export'],
      },
    ],
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-space-before-closing': ['error'],
    'no-class-assign': 0,
    'no-undef': ['error'],
    'react/no-string-refs': 0,
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'no-case-declarations': 0,
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
};
