import en from '@/i18n/en';
import _get from 'lodash/get';

/**
 * Object with the languages available.
 */
const languages = {
  en: en,
};

const defaultLanguage = 'en';

/**
 * Replaces the parameters of a message with the args.
 */
function format(message?: string, args?: string[]) {
  if (!message || !args) {
    return message || '';
  }

  return message.replace(/{(\d+)}/g, function (match, number: string) {
    const index = parseInt(number);
    if (index >= 0 && index < args.length) {
      return args[index];
    } else {
      return match;
    }
  });
}

/**
 * Checks if the key exists on the language.
 */
export const i18nExists = (key: string) => {
  const dictionary = languages[defaultLanguage];
  const message = _get(dictionary, key);
  return Boolean(message);
};

/**
 * Returns the translation based on the key.
 */
export const i18n = (key: string, ...args: string[]) => {
  const dictionary = languages[defaultLanguage];
  const message = _get(dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
};
