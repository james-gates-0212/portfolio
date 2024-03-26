export default class SequelizeUtils {
  static value(obj, fieldName, defaultValue: any = null) {
    if (!obj || !obj.dataValues) {
      return defaultValue;
    }
    return obj.dataValues[fieldName] || defaultValue;
  }
}
