/**
 * This module creates the Sequelize to the database and
 * exports all the models.
 */
import * as pg from 'pg';
import * as mysql from 'mysql2';
import * as mariadb from 'mariadb';
import * as sqlite from 'sqlite';
import { Dialect, Sequelize } from 'sequelize';
import { getConfig } from '../../config';

// import models for tables of your database
import experienceModel from './experience';
import profileModel from './profile';
import userModel from './user';

const dataModels: Array<Function> = [experienceModel, profileModel, userModel];

const databaseModules = {
  postgres: pg,
  mysql: mysql,
  mariadb: mariadb,
  sqlite: sqlite,
};

const highlight: Function = require('cli-highlight').highlight as Function;

function models() {
  const config = getConfig();

  const database = {} as any;

  if (!config.database) {
    return null;
  }

  let sequelize = new Sequelize(config.database.db, config.database.user, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: config.database.dialect as Dialect,
    dialectModule: databaseModules[config.database.dialect],
    dialectOptions: {
      ssl: config.database.ssl && {
        ssl: true,
        rejectUnauthorized: false,
        ca: config.database.ssl_cert,
      },
    },
    logging: config.database.logging
      ? (log: string) =>
          console.log(
            highlight(log, {
              language: 'sql',
              ignoreIllegals: true,
            }),
          )
      : false,
  });

  dataModels.forEach((dataModel) => {
    const model = dataModel(sequelize);
    database[model.name] = model;
  });

  Object.keys(database).forEach(function (modelName) {
    if (database[modelName].associate) {
      database[modelName].associate(database);
    }
  });

  database.sequelize = sequelize;
  database.Sequelize = Sequelize;

  return database;
}

export default models;
