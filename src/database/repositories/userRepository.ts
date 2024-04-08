import { IRepositoryOptions } from '@/database/repositories/IRepositoryOptions';
import { Op } from 'sequelize';
import BaseRepository from '@/database/repositories/baseRepository';
import Error404 from '@/errors/Error404';
import SequelizeRepository from '@/database/repositories/sequelizeRepostiory';

export default class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  static async findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options: IRepositoryOptions) {
    let whereAnd: Array<any> = [];
    let include: any = [];

    const where = { [Op.and]: whereAnd };

    let { rows, count } = await options.database.user.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy ? [orderBy.split('_')] : [['id', 'desc']],
    });

    rows = await Promise.all(rows.map(async (row) => this._fillWithRelationsAndFiles(row, options)));

    return { rows, count };
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(options);

    const record = await options.database.user.findOne({
      where: {
        id,
      },
      transaction,
    });

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options, false);
  }

  static async create(data, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(options);
    const record = await options.database.user.create(data, {
      transaction,
    });

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(options);

    let record = await options.database.user.findOne({
      where: {
        id,
      },
      transaction,
    });

    if (!record) {
      throw new Error404();
    }

    record = await record.update(data, {
      transaction,
    });

    return this.findById(record.id, options);
  }

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions, metaOnly = true) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    output.action = output.id;

    if (metaOnly) {
      return output;
    }

    return output;
  }
}
