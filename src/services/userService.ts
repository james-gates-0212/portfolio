import SequelizeRepository from '@/database/repositories/sequelizeRepostiory';
import UserRepository from '@/database/repositories/userRepository';
import BaseService from '@/services/baseService';

export default class UserService extends BaseService {
  constructor() {
    super();
  }

  async getAll() {
    return await UserRepository.findAndCountAll({ filter: '', limit: undefined, offset: undefined }, this.options);
  }

  async findById(id) {
    return await UserRepository.findById(id, this.options);
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await UserRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'user');

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await UserRepository.update(id, data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'user');

      throw error;
    }
  }
}
