module.exports = {
  extends: ["custom/next"],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-sort-props': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // re enable eventually
    'unicorn/filename-case': 'off', // re enable eventually
    'react/self-closing-comp': 'off', // re enable eventually
    'no-console': 'off', // also re-enable eventually
    'object-shorthand': 'off',
    'camelcase': 'off',
    '@typescript-eslint/no-inferrable-types': 'off', // also re-enable eventually
    '@typescript-eslint/no-unsafe-call': 'off', // also re-enable eventually
    '@typescript-eslint/no-unsafe-any': 'off', // also re-enable eventually
    '@typescript-eslint/no-unsafe-assignment': 'off', // also re-enable eventually
    '@typescript-eslint/no-unsafe-member-access': 'off' // also re-enable eventually
  }
};
