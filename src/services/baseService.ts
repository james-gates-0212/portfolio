import databaseInit from '@/database/databaseConnection';

export default class BaseService {
  database;
  options;

  constructor() {
    this.database = null;
  }

  async init() {
    this.database = await databaseInit();
    this.options = {
      language: 'en',
      database: this.database,
      currentUser: null,
      transaction: null,
    };
  }
}
