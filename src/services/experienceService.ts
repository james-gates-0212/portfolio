import SequelizeRepository from '@/database/repositories/sequelizeRepository';
import ExperienceRepository from '@/database/repositories/experienceRepository';
import BaseService from '@/services/baseService';
import moment from 'moment';

export default class ExperienceService extends BaseService {
  constructor() {
    super();
  }

  async getAll(data) {
    return await ExperienceRepository.findAndCountAll(
      { filter: data, limit: undefined, offset: undefined },
      this.options,
    );
  }

  async findById(id) {
    return await ExperienceRepository.findById(id, this.options);
  }

  safeDate(value) {
    return /\d{4}-\d{1,2}/.test(value) ? value : null;
  }

  parseData(data) {
    data.since = this.safeDate(data.since);
    data.until = this.safeDate(data.until);
    return {
      ...data,
      profile: data.profile || 0,
      since: data.since ? moment(`${data.since}-01`) : null,
      until: data.until ? moment(`${data.until}-01`) : null,
    };
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await ExperienceRepository.create(this.parseData(data), {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'experience');

      console.error(error);

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const record = await ExperienceRepository.update(id, this.parseData(data), {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'experience');

      throw error;
    }
  }

  async destroy(id) {
    const transaction = await SequelizeRepository.createTransaction(this.database);

    try {
      const profile = await ExperienceRepository.destroy(id, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(transaction);

      return profile;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(transaction);

      SequelizeRepository.handleUniqueFieldError(error, this.options.language, 'experience');

      throw error;
    }
  }
}
