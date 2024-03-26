import { IRepositoryOptions } from '@/database/repositories/IRepositoryOptions';

export function orderByUtils(orderBy, options: IRepositoryOptions, alias = {}) {
  const [, model, field, order] =
    /^([\w_]*)[.]?([\w_]+)[_]{1}([\w]+)$/.exec(/[.]+/.test(orderBy) ? orderBy : `.${orderBy}`) || [];

  const nameAs = alias[model] || null;

  return [
    model.length > 0 && {
      model: options.database[model],
      ...(nameAs ? { as: nameAs } : {}),
    },
    field,
    order,
  ].filter(Boolean);
}
