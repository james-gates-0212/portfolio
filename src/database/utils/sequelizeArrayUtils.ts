import { getConfig } from '@/config';
import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize';

export default class SequelizeArrayUtils {
  // MySQL doesn't have Array Field
  static get DataType() {
    return getConfig().database?.dialect === 'mysql' ? DataTypes.JSON : DataTypes.ARRAY(DataTypes.TEXT);
  }

  static invalid(obj, fieldName) {
    return !obj || !obj.dataValues || !fieldName;
  }

  static indexToValue(obj, fieldName, values: any[] = []) {
    if (this.invalid(obj, fieldName) || !values) {
      return null;
    }
    return values[Number(obj.dataValues[fieldName])] ?? null;
  }

  static valueToIndex(value, values: any[] = [], defaultIndex = 0) {
    const index = values.indexOf(value);
    return index < 0 ? defaultIndex : index;
  }

  static toJSON(obj, fieldName, defaultJSON = {}) {
    if (this.invalid(obj, fieldName)) {
      return defaultJSON;
    }
    const originalValue = obj.dataValues[fieldName];
    if (getConfig().database?.dialect === 'mysql') {
      if (typeof originalValue !== 'string') {
        return originalValue;
      }
      return JSON.parse(originalValue);
    }
    return originalValue;
  }

  static filter(tableName, fieldName, filterValue) {
    const filterValueAsArray = Array.isArray(filterValue) ? filterValue : [filterValue];

    if (getConfig().database?.dialect === 'mysql') {
      return {
        [Sequelize.Op.and]: filterValueAsArray.map((filterValue) =>
          arrayContainsForMySQL(tableName, fieldName, filterValue),
        ),
      };
    } else {
      return {
        [fieldName]: {
          [Sequelize.Op.contains]: filterValueAsArray,
        },
      };
    }
  }
}

function arrayContainsForMySQL(model, column, value) {
  return Sequelize.fn('JSON_CONTAINS', Sequelize.col(`${model}.${column}`), `"${value}"`);
}
