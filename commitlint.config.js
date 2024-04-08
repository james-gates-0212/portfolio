const config = {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'add',
        'adopt',
        'apply',
        'build',
        'chore',
        'config',
        'delete',
        'docs',
        'feat',
        'fix',
        'init',
        'refactor',
        'remove',
        'style',
        'test',
        'update',
        'upgrade',
      ],
    ],
  },
};

module.exports = config;
