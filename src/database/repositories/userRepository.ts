import { IRepositoryOptions } from '@/database/repositories/IRepositoryOptions';
import BaseRepository from '@/database/repositories/baseRepository';
import SequelizeRepository from '@/database/repositories/sequelizeRepostiory';
import { Op } from 'sequelize';

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

    return { rows, count };
  }
}
