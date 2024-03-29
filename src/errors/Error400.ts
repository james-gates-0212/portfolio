import { i18n, i18nExists } from '@/i18n';

export default class Error400 extends Error {
  code: Number;

  constructor(language?, messageCode?, ...args) {
    let message;

    if (messageCode && i18nExists(messageCode)) {
      message = i18n(messageCode, ...args);
    }

    message = message || i18n('errors.validation.message');

    super(message);
    this.code = 400;
  }
}
