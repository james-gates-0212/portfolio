export function classNames(...classes) {
  return Array.from(new Set(classes.filter(Boolean))).join(' ');
}

export const DEFAULT_MOMENT_FORMAT = 'YYYY-MM-DD HH:mm';
