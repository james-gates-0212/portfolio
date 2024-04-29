import SequelizeRepository from '@/database/repositories/sequelizeRepository';
import ProfileRepository from '@/database/repositories/profileRepository';
import BaseService from '@/services/baseService';

export default class ProfileService extends BaseService {
  constructor() {
    super();
  }

  async getAll() {
    return await ProfileRepository.findAndCountAll({ filter: '', limit: undefined, offset: undefined }, this.options);
  }

  async findById(id) {
    return await ProfileRepository.findById(id, this.options);
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await ProfileRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'profile');

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await ProfileRepository.update(id, data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'profile');

      throw error;
    }
  }

  async destroy(id) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      await ProfileRepository.destroy(id, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'profile');

      throw error;
    }
  }
}
