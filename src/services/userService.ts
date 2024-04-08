import SequelizeRepository from '@/database/repositories/sequelizeRepostiory';
import UserRepository from '@/database/repositories/userRepository';
import BaseService from '@/services/baseService';

export default class UserService extends BaseService {
  constructor() {
    super();
  }

  async getAll() {
    return await UserRepository.findAndCountAll(
      { filter: '', limit: undefined, offset: undefined },
      { language: 'en', currentUser: null, database: this.database, transaction: null },
    );
  }
}
