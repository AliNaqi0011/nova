module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
    'next',
  ],
  overrides: [
    {
      files: [
        'src/modules/builder/editor/modules/basic/BasicLayout.tsx',
        'src/templates/creative2/Creative2Template.tsx',
      ],
      rules: {
        'import/default': 'off', // Disable for BasicLayout.tsx
        '@typescript-eslint/no-unused-vars': 'off', // Disable for Creative2Template.tsx
      },
    },
  ],
};
