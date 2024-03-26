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
function format(message, args) {
  if (!message) {
    return null;
  }

  return message.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
}

/**
 * Checks if the key exists on the language.
 */
export const i18nExists = (languageCode, key) => {
  const dictionary = languages[languageCode] || languages[defaultLanguage];
  const message = _get(dictionary, key);
  return Boolean(message);
};

/**
 * Returns the translation based on the key.
 */
export const i18n = (languageCode, key, ...args) => {
  const dictionary = languages[languageCode] || languages[defaultLanguage];
  const message = _get(dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
};
