import { getConfig } from '@/config';
import { IRepositoryOptions } from './IRepositoryOptions';
import { UniqueConstraintError } from 'sequelize';
import Error400 from '@/errors/Error400';
import lodash from 'lodash';

/**
 * Abstracts some basic Sequelize operations.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
export default class SequelizeRepository {
  /**
   * Cleans the database.
   */
  static async cleanDatabase(database) {
    if (getConfig().node.env !== 'test') {
      throw new Error('Clean database only allowed for test!');
    }

    await database.sequelize.sync({ force: true });
  }

  /**
   * Returns the currentUser if it exists on the options.
   */
  static getCurrentUser(options: IRepositoryOptions) {
    return (options && options.currentUser) || { id: null };
  }

  /**
   * Returns the transaction if it exists on the options.
   */
  static getTransaction(options: IRepositoryOptions) {
    return (options && options.transaction) || undefined;
  }

  /**
   * Creates a database transaction.
   */
  static async createTransaction(database) {
    return database.sequelize.transaction();
  }

  /**
   * Commits a database transaction.
   */
  static async commitTransaction(transaction) {
    return transaction.commit();
  }

  /**
   * Rolls back a database transaction.
   */
  static async rollbackTransaction(transaction) {
    return transaction.rollback();
  }

  static handleUniqueFieldError(error, language, entityName) {
    if (!(error instanceof UniqueConstraintError)) {
      if (getConfig().node.devMode) {
        console.error(error);
      }
      return;
    }

    const fieldName = lodash.get(error, 'errors[0].path');
    throw new Error400(language, `entities.${entityName}.errors.unique.${fieldName}`);
  }

  static handleNotEmptyField(data, fields, language, entityName) {
    (fields || []).forEach((field) => {
      if (!data[field] || data[field] === '') {
        throw new Error400(language, `entities.${entityName}.errors.notEmpty.${field}`);
      }
    });
  }
}
