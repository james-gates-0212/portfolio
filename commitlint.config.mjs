export default {
  extends: ['@commitlint/config-conventional'],

  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'scope-case': [0, 'always', 'lower-case'],
    'subject-case': [0, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        '♻️',
        '⚡️',
        '✅',
        '✏️',
        '✨',
        '❤️',
        '⬆️',
        '⬇️',
        '⭐️',
        '🌈',
        '🎉',
        '🐞',
        '👌',
        '📓',
        '📝',
        '📦',
        '🔀',
        '🔖',
        '🚀',
        '🚧',
        '🚨',
        '🛠️',
        'add',
        'adopt',
        'build',
        'chore',
        'docs',
        'feat',
        'fix',
        'refactor',
        'remove',
        'style',
      ],
    ],
  },
};
