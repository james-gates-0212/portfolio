import databaseInit from '@/database/databaseConnection';

export default class BaseService {
  database;

  constructor() {
    this.database = null;
  }

  async init() {
    this.database = await databaseInit();
  }
}
